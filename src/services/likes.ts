import { supabase } from 'utils/supabaseClient'

import { definitions } from 'types/supabase'
export type Like = definitions['likes']

export async function createLike({ user_id, box_shadow_id }: Like) {
  const { data, error } = await supabase
    .from('likes')
    .insert([{ user_id, box_shadow_id }])

  return { data, error }
}

export async function removeLike({ user_id, box_shadow_id }: Like) {
  const { data, error } = await supabase
    .from('likes')
    .delete()
    .match({ user_id, box_shadow_id: String(box_shadow_id) })

  return { data, error }
}
