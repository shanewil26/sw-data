import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { firstName, email, token } = await req.json()

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://swgrowth.co.uk'
  const confirmUrl = `${siteUrl}/api/confirm-email?token=${token}`

  // Use your preferred email provider here.
  // This example uses a simple fetch to any transactional email API.
  // We recommend Resend (resend.com) — free tier covers 3,000 emails/month.
  const RESEND_API_KEY = process.env.RESEND_API_KEY

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not set')
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'SW Growth <hello@swgrowth.co.uk>',
      to: email,
      subject: 'Please confirm your subscription — SW Growth',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; color: #0a0a0f;">
          <h1 style="font-size: 24px; margin-bottom: 8px;">Hi ${firstName},</h1>
          <p style="color: #6b6b7a; line-height: 1.7; margin-bottom: 24px;">
            Thanks for signing up to the SW Growth mailing list. Please confirm your email address by clicking the button below.
          </p>
          <a href="${confirmUrl}"
            style="display: inline-block; background: #e8401c; color: white; font-weight: bold;
                   text-decoration: none; padding: 14px 32px; font-size: 13px; letter-spacing: 0.05em; text-transform: uppercase;">
            Confirm Subscription
          </a>
          <p style="color: #6b6b7a; font-size: 12px; margin-top: 32px; line-height: 1.6;">
            If you didn't sign up for this list, you can safely ignore this email.<br/>
            This link will expire in 48 hours.
          </p>
          <hr style="border: none; border-top: 1px solid #d8d5cf; margin: 32px 0;" />
          <p style="color: #6b6b7a; font-size: 11px;">
            SW Growth · <a href="${siteUrl}" style="color: #e8401c;">${siteUrl}</a>
          </p>
        </div>
      `,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
