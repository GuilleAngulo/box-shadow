import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from 'utils/supabaseClient'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = req.headers.token as string
    const { data: user, error } = await supabase.auth.api.getUser(token)

    if (error) return res.status(401).json({ error: error.message })

    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('box_shadow')
        .select('boxShadow, theme, shape')
        .eq('user', user?.id)

      if (error) return res.status(404).json({ error: error.message })
      return res.status(200).json(data)
    }

    if (req.method === 'POST') {
      const { boxShadow, theme, shape } = req.body

      const { data, error } = await supabase
        .from('box_shadow')
        .update({ boxShadow, theme, shape })
        .match({ user: user?.id ?? '' })

      if (error) return res.status(404).json({ error: error.message })
      return res.status(201).json(data)
    }
  } catch (err) {
    return res.status(500).send({ error: 'Internal Server Error.' })
  }
}
