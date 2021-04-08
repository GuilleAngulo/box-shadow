import { createClient } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL)
  throw new Error('Missing Supabase URL')
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  throw new Error('Missing Supabase Key')

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
