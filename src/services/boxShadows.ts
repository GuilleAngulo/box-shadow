import { supabase } from 'utils/supabaseClient'
import { definitions } from 'types/supabase'

import { Author, Preset } from 'types/index'

export type BoxShadowProps = Omit<
  definitions['box_shadows'],
  'id' | 'inserted_at' | 'slug'
>

export async function saveBoxShadow(props: BoxShadowProps) {
  try {
    await createBoxShadow(props)
    return
  } catch (error) {
    throw new Error(error.message)
  }
}

export type BoxShadowAuthorProps = Omit<BoxShadowProps, 'user_id'> & {
  id: number
  user_id?: Author
  likes?: number
}

export async function getPresetByBoxShadow(boxShadowId: number) {
  try {
    const data = await getBoxShadow(boxShadowId)

    const count = await getLikesCount(data!.id!)

    return {
      name: data?.title,
      boxShadow: JSON.parse(data?.box_shadow || ''),
      shape: data?.shape,
      theme: data?.theme,
      likes: count,
      author: {
        name: data?.user_id?.name,
        avatar_url: data?.user_id?.avatar_url
      }
    }
  } catch (error) {
    console.error(error.message)
    return
  }
}

export async function getFeaturedBoxShadow() {
  try {
    const featured = await getMostPopularBoxShadow()

    const data = await getBoxShadow(featured.box_shadow_id)

    if (data) {
      data.likes = featured.likes_count
    }

    return {
      name: data?.title,
      boxShadow: JSON.parse(data?.box_shadow || ''),
      shape: data?.shape,
      theme: data?.theme,
      likes: data?.likes,
      author: {
        name: data?.user_id?.name,
        avatar_url: data?.user_id?.avatar_url
      }
    }
  } catch (error) {
    console.error(error.message)
  }
}

export async function createBoxShadow({
  user_id,
  title,
  box_shadow,
  shape,
  theme
}: BoxShadowProps) {
  try {
    const content = {
      title,
      slug: title.toLowerCase().split(' ').join('-'),
      box_shadow,
      theme,
      shape,
      user_id
    }
    const { data, error } = await supabase
      .from('box_shadows')
      .insert([content], { returning: 'minimal' })

    if (error) {
      throw error || new Error('Failed to create the box shadow.')
    }

    return data
  } catch (err) {
    throw new Error(err.message)
  }
}

export async function getBoxShadow(boxShadowId: number) {
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
      .eq('id', boxShadowId)
      .single()

    if (error) {
      throw error || new Error('Failed to retrieve the box shadow.')
    }

    return data
  } catch (err) {
    throw new Error(err.message)
  }
}

export async function getLikesCount(boxShadowId: number) {
  try {
    const { count, error } = await supabase
      .from('likes')
      .select('*', { count: 'exact' })
      .eq('box_shadow_id', boxShadowId)

    if (error) {
      throw error || new Error('Failed to retrieve the likes count.')
    }

    return count
  } catch (err) {
    throw new Error(err.message)
  }
}

export async function getMostPopularBoxShadow() {
  try {
    const { data, error } = await supabase
      .rpc('get_most_popular_box_shadow')
      .single()

    if (error) {
      throw error || new Error('RPC `get_most_popular_box_shadow()` failed.')
    }

    return data
  } catch (err) {
    throw new Error(err.message)
  }
}
