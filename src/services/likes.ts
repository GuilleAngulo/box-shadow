import { supabase } from 'utils/supabaseClient'

import { definitions } from 'types/supabase'
export type Like = Omit<definitions['likes'], 'id' | 'inserted_at'>

export async function createLike(box_shadow_id: number) {
  const { data, error } = await supabase
    .from<Like>('likes')
    .insert([{ box_shadow_id }], { returning: 'minimal' })

  return { data, error }
}

export async function removeLike({ user_id, box_shadow_id }: Like) {
  const { data, error } = await supabase
    .from('likes')
    .delete()
    .match({ user_id, box_shadow_id: String(box_shadow_id) })

  return { data, error }
}
