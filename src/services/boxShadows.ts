import { supabase } from 'utils/supabaseClient'
import { definitions } from 'types/supabase'

import { Author } from 'types/index'
import { getLikesCount } from './likes'

export type BoxShadowProps = Omit<definitions['box_shadows'], 'id'>

export async function saveBoxShadow(
  props: Omit<BoxShadowProps, 'inserted_at'>
) {
  try {
    const { error } = await createBoxShadow(props)

    if (error) {
      throw error || new Error('Failed to save the box shadow.')
    }

    return
  } catch (error) {
    throw new Error(error.message)
  }
}

export type BoxShadowAuthorProps = Omit<BoxShadowProps, 'user_id'> & {
  id: number
  user_id?: Author
  likes: number
}

export async function getPresetByBoxShadow(boxShadowId: number) {
  try {
    const { data, error } = await getBoxShadow(boxShadowId)

    if (error || !data) {
      throw error || new Error('No box shadow found with that ID.')
    }

    const { data: count, error: likesError } = await getLikesCount(data.id)

    return {
      data: {
        name: data?.title,
        boxShadow: parseBoxShadow(data?.box_shadow),
        shape: data?.shape,
        theme: data?.theme,
        likes: count,
        author: {
          name: data?.user_id?.name,
          avatar_url: data?.user_id?.avatar_url
        }
      },
      error: likesError
    }
  } catch (err) {
    const message = 'Failed to retrieve preset by id: ' + err.message
    return { data: null, error: { message } }
  }
}

export async function getFeaturedBoxShadow() {
  try {
    const { data: featured } = await getBoxShadowOrderByLikes()
    const likes = featured?.likes_count ?? 0

    // If featured is undefined, will call without ID and return the newest

    const { data, error } = await getBoxShadow(featured?.box_shadow_id)

    const boxShadow = {
      name: data?.title,
      boxShadow: parseBoxShadow(data?.box_shadow),
      shape: data?.shape,
      theme: data?.theme,
      likes,
      author: {
        name: data?.user_id?.name,
        avatar_url: data?.user_id?.avatar_url
      }
    }

    return { data: boxShadow, error }
  } catch (err) {
    const message = 'Failed to retrieve featured box shadow: ' + err.message
    return { data: null, error: { message } }
  }
}

export async function createBoxShadow(
  props: Omit<BoxShadowProps, 'inserted_at'>
) {
  try {
    const { data, error } = await supabase
      .from('box_shadows')
      .insert([props], { returning: 'minimal' })

    return { data, error }
  } catch (err) {
    const message = 'Failed to create the box shadow: ' + err.message
    return { data: null, error: { message } }
  }
}

export async function deleteBoxShadow(boxShadowId: number) {
  try {
    const { data, error } = await supabase
      .from('box_shadows')
      .delete()
      .match({ id: String(boxShadowId) })

    return { data, error }
  } catch (err) {
    const message = 'Failed to delete the box shadow: ' + err.message
    return { data: null, error: { message } }
  }
}

export async function getBoxShadow(boxShadowId?: number) {
  try {
    if (boxShadowId) {
      const { data, error } = await supabase
        .from<BoxShadowAuthorProps>('box_shadows')
        .select(
          `id, title, slug, box_shadow, theme, shape,
              user_id (
                name,
                avatar_url
              )
            `
        )
        .eq('id', boxShadowId)
        .single()

      return { data, error }
    }

    //If there is no ID, return newest
    const { data, error } = await supabase
      .from<BoxShadowAuthorProps>('box_shadows')
      .select(
        `id, title, slug, box_shadow, theme, shape,
          user_id (
            name,
            avatar_url
          )
        `
      )
      .order('inserted_at', { ascending: false })
      .limit(1)
      .single()

    return { data, error }
  } catch (err) {
    const message = 'Failed to retrieve the box shadow: ' + err.message
    return { data: null, error: { message } }
  }
}

export async function getBoxShadowBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from<BoxShadowAuthorProps>('box_shadows')
      .select(
        `id, title, slug, box_shadow, theme, shape,
            user_id (
              name,
              avatar_url
            )
          `
      )
      .eq('slug', slug)
      .single()

    return { data, error }
  } catch (err) {
    const message = 'Failed to retrieve the box shadow by slug: ' + err.message
    return { data: null, error: { message } }
  }
}

export async function getAllBoxShadows() {
  try {
    const { data, error } = await supabase
      .from<BoxShadowAuthorProps>('box_shadows')
      .select(
        `id, title, slug, box_shadow, theme, shape, inserted_at,
            user_id (
              name,
              avatar_url
            )
          `
      )

    return { data, error }
  } catch (err) {
    const message = 'Failed to retrieve all box shadows: ' + err.message
    return { data: null, error: { message } }
  }
}

export async function getAllBoxShadowsByUser(user_id: string) {
  try {
    const { data, error } = await supabase
      .from<BoxShadowAuthorProps>('box_shadows')
      .select(`id, title, slug, box_shadow, theme, shape, inserted_at`)
      .eq('user_id', user_id)

    if (data) {
      const withLikes = await populateWithLikes(data)
      return { data: withLikes, error }
    }

    return { data, error }
  } catch (err) {
    const message = 'Failed to retrieve box shadows from user: ' + err.message
    return { data: null, error: { message } }
  }
}

export async function getBoxShadowOrderByLikes() {
  try {
    const { data, error } = await supabase
      .rpc('get_most_popular_box_shadow')
      .single()

    return { data, error }
  } catch (err) {
    const message = "RPC 'get_most_popular_box_shadow()' failed: " + err.message
    return { data: null, error: { message } }
  }
}

export async function getSlugs(limit: number) {
  try {
    const { data, error } = await supabase
      .from('box_shadows')
      .select('slug')
      .limit(limit)

    return { data, error }
  } catch (err) {
    const message = 'Failed to retrieve box shadows slugs: ' + err.message
    return { data: null, error: { message } }
  }
}

const parseBoxShadow = (boxShadow?: string) => {
  try {
    if (boxShadow) {
      return JSON.parse(boxShadow)
    }
  } catch {
    return boxShadow
  }
}

export const populateWithLikes = async (
  boxShadowList: BoxShadowAuthorProps[],
  featuredId?: number
) => {
  const promises = boxShadowList.map(async (item) => {
    const { data } = await getLikesCount(item.id)
    const likes = data ?? 0
    return {
      ...item,
      likes,
      ...(featuredId === item.id && {
        featured: true
      })
    }
  })

  const populated = await Promise.all(promises)
  return populated
}
