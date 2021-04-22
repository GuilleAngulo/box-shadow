import { supabase } from 'utils/supabaseClient'

import { definitions } from 'types/supabase'
export type Like = Omit<definitions['likes'], 'id' | 'inserted_at'>

export async function createLike({ user_id, box_shadow_id }: Like) {
  const { data, error } = await supabase
    .from<Like>('likes')
    .insert([{ user_id, box_shadow_id }])
    .single()

  return { data, error }
}

export async function removeLike({ user_id, box_shadow_id }: Like) {
  const { data, error } = await supabase
    .from('likes')
    .delete()
    .match({ user_id, box_shadow_id: String(box_shadow_id) })
    .single()

  return { data, error }
}

export async function getLikesByUser(user_id: string) {
  const { data, error } = await supabase
    .from('likes')
    .select('box_shadow_id')
    .eq('user_id', user_id)

  return { data, error }
}
