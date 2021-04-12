import { supabase } from 'utils/supabaseClient'
import { definitions } from 'types/supabase'

export type BoxShadowProps = Omit<
  definitions['box_shadows'],
  'id' | 'inserted_at' | 'slug'
>

export async function createBoxShadow({
  user_id,
  title,
  box_shadow,
  shape,
  theme
}: BoxShadowProps) {
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

  return { data, error }
}

export async function saveBoxShadow(props: BoxShadowProps) {
  try {
    const { error } = await createBoxShadow(props)

    if (error) {
      throw error || new Error('Error creating Box Shadow.')
    }

    return
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function getBoxShadow() {
  const { data, error } = await supabase
    .from<BoxShadowProps>('box_shadows')
    .select(
      `
    title, slug,
    box_shadow,
    theme,
    shape,
    user_id (
      name,
      avatar_url
    )
  `
    )
    .single()

  const preset = {
    name: data?.title,
    boxShadow: JSON.parse(data?.box_shadow || ''),
    shape: data?.shape,
    theme: data?.theme
  }

  const author = {
    name: data?.user_id.name,
    avatar_url: data?.user_id.avatar_url
  }

  return { preset, author }
}
