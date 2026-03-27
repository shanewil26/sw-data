import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Use service role key here so we can update the record server-side
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://swgrowth.co.uk'

  if (!token) {
    return NextResponse.redirect(`${siteUrl}/?confirmed=false`)
  }

  const { data, error } = await supabase
    .from('email_signups')
    .update({ confirmed: true, confirmed_at: new Date().toISOString() })
    .eq('confirmation_token', token)
    .select()
    .single()

  if (error || !data) {
    return NextResponse.redirect(`${siteUrl}/?confirmed=false`)
  }

  // Sync to HubSpot if configured
  const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY
  if (HUBSPOT_API_KEY) {
    await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          email: data.email,
          firstname: data.first_name,
          hs_email_optout: false,
        },
      }),
    }).catch(err => console.error('HubSpot sync error:', err))
  }

  return NextResponse.redirect(`${siteUrl}/?confirmed=true`)
}
