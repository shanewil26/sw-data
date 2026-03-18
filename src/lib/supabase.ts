import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactFormData = {
  first_name: string
  last_name: string
  email: string
  service: string
  message: string
  source?: string
}

export async function submitContactForm(data: ContactFormData) {
  const { error } = await supabase
    .from('contacts')
    .insert([{ ...data, source: 'swdata.com' }])

  if (error) throw error
  return { success: true }
}
