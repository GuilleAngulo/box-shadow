import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from 'utils/supabaseClient'

export default (req: NextApiRequest, res: NextApiResponse) => {
  supabase.auth.api.setAuthCookie(req, res)
}
