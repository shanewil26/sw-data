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
    try {
      const hubspotHeaders = {
        Authorization: `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      }

      const createRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: hubspotHeaders,
        body: JSON.stringify({
          properties: {
            email: data.email,
            firstname: data.first_name,
          },
        }),
      })

      if (createRes.status === 409) {
        // Contact already exists in HubSpot — update it instead
        const updateRes = await fetch(
          `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(data.email)}?idProperty=email`,
          {
            method: 'PATCH',
            headers: hubspotHeaders,
            body: JSON.stringify({ properties: { firstname: data.first_name } }),
          }
        )
        if (!updateRes.ok) {
          console.error('HubSpot update error:', await updateRes.text())
        }
      } else if (!createRes.ok) {
        console.error('HubSpot sync error:', await createRes.text())
      }
    } catch (err) {
      console.error('HubSpot sync error:', err)
    }
  }

  return NextResponse.redirect(`${siteUrl}/?confirmed=true`)
}
