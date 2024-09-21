import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { setCookie } from "nookies";  // To set auth cookies after signup

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Automatically log the user in after signup
    const { session, error: loginError } = await supabase.auth.signInWithPassword({ email, password });
    if (loginError || !session) {
      return res.status(500).json({ error: loginError?.message || 'Unable to login after signup' });
    }

    // Set auth cookie if using Supabase auth session management
    setCookie({ res }, "supabase-auth-token", session.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    return res.status(200).json({ user: data.user });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
