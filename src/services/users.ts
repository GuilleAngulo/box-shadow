import { supabase } from 'utils/supabaseClient'

import { definitions } from 'types/supabase'
export type User = definitions['users']

export async function getUser() {
  const { data, error } = await supabase
    .from<User>('users')
    .select('id, name, avatar_url')
    .single()

  return { user: data, error }
}

export async function createUser({ id, name, avatar_url }: User) {
  const { data, error } = await supabase
    .from('users')
    .insert([{ id, name, avatar_url }], { returning: 'minimal' })

  return { data, error }
}

export async function updateUser(name?: string, avatar_url?: string) {
  const { data, error } = await supabase.from<User>('users').update(
    { name, avatar_url },
    {
      returning: 'minimal'
    }
  )

  return { data, error }
}

export async function signInUser({ id, name, avatar_url }: User) {
  try {
    const { user, error: getUserError } = await getUser()
    console.error(getUserError?.message)

    if (user) {
      // Check if user metadata has change to update
      if (user.name !== name || user.avatar_url !== avatar_url) {
        const { error } = await updateUser(name, avatar_url)

        if (error) {
          throw error || new Error('Error while updating the user.')
        }
      }
      // If there is nothing to update
      return
    }

    //If there is no user, insert new row with user data
    const { error } = await createUser({ id, name, avatar_url })

    if (error) {
      throw error || new Error('Error while creating the user.')
    }
  } catch (error) {
    console.error(error.message)
  }
}
