'use client'

import { useState } from 'react'
import { submitContactForm } from '@/lib/supabase'
import { trackEvent } from '@/components/GoogleAnalytics'

const SERVICES = [
  'Data Strategy',
  'Marketing Analytics',
  'Audience Insights',
  'Growth Consulting',
  'Other',
]

const COUNTRY_CODES = [
  { code: '+44', label: '+44 (UK)' },
  { code: '+1',  label: '+1 (US)' },
  { code: '---', label: '─────────', disabled: true },
  { code: '+93',  label: '+93 (Afghanistan)' },
  { code: '+355', label: '+355 (Albania)' },
  { code: '+213', label: '+213 (Algeria)' },
  { code: '+376', label: '+376 (Andorra)' },
  { code: '+244', label: '+244 (Angola)' },
  { code: '+54',  label: '+54 (Argentina)' },
  { code: '+374', label: '+374 (Armenia)' },
  { code: '+61',  label: '+61 (Australia)' },
  { code: '+43',  label: '+43 (Austria)' },
  { code: '+994', label: '+994 (Azerbaijan)' },
  { code: '+973', label: '+973 (Bahrain)' },
  { code: '+880', label: '+880 (Bangladesh)' },
  { code: '+32',  label: '+32 (Belgium)' },
  { code: '+501', label: '+501 (Belize)' },
  { code: '+229', label: '+229 (Benin)' },
  { code: '+975', label: '+975 (Bhutan)' },
  { code: '+591', label: '+591 (Bolivia)' },
  { code: '+387', label: '+387 (Bosnia)' },
  { code: '+267', label: '+267 (Botswana)' },
  { code: '+55',  label: '+55 (Brazil)' },
  { code: '+673', label: '+673 (Brunei)' },
  { code: '+359', label: '+359 (Bulgaria)' },
  { code: '+226', label: '+226 (Burkina Faso)' },
  { code: '+257', label: '+257 (Burundi)' },
  { code: '+855', label: '+855 (Cambodia)' },
  { code: '+237', label: '+237 (Cameroon)' },
  { code: '+1',   label: '+1 (Canada)' },
  { code: '+238', label: '+238 (Cape Verde)' },
  { code: '+236', label: '+236 (Central African Rep.)' },
  { code: '+235', label: '+235 (Chad)' },
  { code: '+56',  label: '+56 (Chile)' },
  { code: '+86',  label: '+86 (China)' },
  { code: '+57',  label: '+57 (Colombia)' },
  { code: '+269', label: '+269 (Comoros)' },
  { code: '+242', label: '+242 (Congo)' },
  { code: '+506', label: '+506 (Costa Rica)' },
  { code: '+385', label: '+385 (Croatia)' },
  { code: '+53',  label: '+53 (Cuba)' },
  { code: '+357', label: '+357 (Cyprus)' },
  { code: '+420', label: '+420 (Czech Republic)' },
  { code: '+45',  label: '+45 (Denmark)' },
  { code: '+253', label: '+253 (Djibouti)' },
  { code: '+1',   label: '+1 (Dominican Republic)' },
  { code: '+593', label: '+593 (Ecuador)' },
  { code: '+20',  label: '+20 (Egypt)' },
  { code: '+503', label: '+503 (El Salvador)' },
  { code: '+240', label: '+240 (Equatorial Guinea)' },
  { code: '+291', label: '+291 (Eritrea)' },
  { code: '+372', label: '+372 (Estonia)' },
  { code: '+251', label: '+251 (Ethiopia)' },
  { code: '+679', label: '+679 (Fiji)' },
  { code: '+358', label: '+358 (Finland)' },
  { code: '+33',  label: '+33 (France)' },
  { code: '+241', label: '+241 (Gabon)' },
  { code: '+220', label: '+220 (Gambia)' },
  { code: '+995', label: '+995 (Georgia)' },
  { code: '+49',  label: '+49 (Germany)' },
  { code: '+233', label: '+233 (Ghana)' },
  { code: '+30',  label: '+30 (Greece)' },
  { code: '+502', label: '+502 (Guatemala)' },
  { code: '+224', label: '+224 (Guinea)' },
  { code: '+592', label: '+592 (Guyana)' },
  { code: '+509', label: '+509 (Haiti)' },
  { code: '+504', label: '+504 (Honduras)' },
  { code: '+852', label: '+852 (Hong Kong)' },
  { code: '+36',  label: '+36 (Hungary)' },
  { code: '+354', label: '+354 (Iceland)' },
  { code: '+91',  label: '+91 (India)' },
  { code: '+62',  label: '+62 (Indonesia)' },
  { code: '+98',  label: '+98 (Iran)' },
  { code: '+964', label: '+964 (Iraq)' },
  { code: '+353', label: '+353 (Ireland)' },
  { code: '+972', label: '+972 (Israel)' },
  { code: '+39',  label: '+39 (Italy)' },
  { code: '+225', label: '+225 (Ivory Coast)' },
  { code: '+1',   label: '+1 (Jamaica)' },
  { code: '+81',  label: '+81 (Japan)' },
  { code: '+962', label: '+962 (Jordan)' },
  { code: '+7',   label: '+7 (Kazakhstan)' },
  { code: '+254', label: '+254 (Kenya)' },
  { code: '+383', label: '+383 (Kosovo)' },
  { code: '+965', label: '+965 (Kuwait)' },
  { code: '+996', label: '+996 (Kyrgyzstan)' },
  { code: '+856', label: '+856 (Laos)' },
  { code: '+371', label: '+371 (Latvia)' },
  { code: '+961', label: '+961 (Lebanon)' },
  { code: '+266', label: '+266 (Lesotho)' },
  { code: '+231', label: '+231 (Liberia)' },
  { code: '+218', label: '+218 (Libya)' },
  { code: '+423', label: '+423 (Liechtenstein)' },
  { code: '+370', label: '+370 (Lithuania)' },
  { code: '+352', label: '+352 (Luxembourg)' },
  { code: '+853', label: '+853 (Macau)' },
  { code: '+389', label: '+389 (Macedonia)' },
  { code: '+261', label: '+261 (Madagascar)' },
  { code: '+265', label: '+265 (Malawi)' },
  { code: '+60',  label: '+60 (Malaysia)' },
  { code: '+960', label: '+960 (Maldives)' },
  { code: '+223', label: '+223 (Mali)' },
  { code: '+356', label: '+356 (Malta)' },
  { code: '+222', label: '+222 (Mauritania)' },
  { code: '+230', label: '+230 (Mauritius)' },
  { code: '+52',  label: '+52 (Mexico)' },
  { code: '+373', label: '+373 (Moldova)' },
  { code: '+377', label: '+377 (Monaco)' },
  { code: '+976', label: '+976 (Mongolia)' },
  { code: '+382', label: '+382 (Montenegro)' },
  { code: '+212', label: '+212 (Morocco)' },
  { code: '+258', label: '+258 (Mozambique)' },
  { code: '+95',  label: '+95 (Myanmar)' },
  { code: '+264', label: '+264 (Namibia)' },
  { code: '+977', label: '+977 (Nepal)' },
  { code: '+31',  label: '+31 (Netherlands)' },
  { code: '+64',  label: '+64 (New Zealand)' },
  { code: '+505', label: '+505 (Nicaragua)' },
  { code: '+227', label: '+227 (Niger)' },
  { code: '+234', label: '+234 (Nigeria)' },
  { code: '+47',  label: '+47 (Norway)' },
  { code: '+968', label: '+968 (Oman)' },
  { code: '+92',  label: '+92 (Pakistan)' },
  { code: '+507', label: '+507 (Panama)' },
  { code: '+675', label: '+675 (Papua New Guinea)' },
  { code: '+595', label: '+595 (Paraguay)' },
  { code: '+51',  label: '+51 (Peru)' },
  { code: '+63',  label: '+63 (Philippines)' },
  { code: '+48',  label: '+48 (Poland)' },
  { code: '+351', label: '+351 (Portugal)' },
  { code: '+974', label: '+974 (Qatar)' },
  { code: '+40',  label: '+40 (Romania)' },
  { code: '+7',   label: '+7 (Russia)' },
  { code: '+250', label: '+250 (Rwanda)' },
  { code: '+966', label: '+966 (Saudi Arabia)' },
  { code: '+221', label: '+221 (Senegal)' },
  { code: '+381', label: '+381 (Serbia)' },
  { code: '+232', label: '+232 (Sierra Leone)' },
  { code: '+65',  label: '+65 (Singapore)' },
  { code: '+421', label: '+421 (Slovakia)' },
  { code: '+386', label: '+386 (Slovenia)' },
  { code: '+252', label: '+252 (Somalia)' },
  { code: '+27',  label: '+27 (South Africa)' },
  { code: '+82',  label: '+82 (South Korea)' },
  { code: '+211', label: '+211 (South Sudan)' },
  { code: '+34',  label: '+34 (Spain)' },
  { code: '+94',  label: '+94 (Sri Lanka)' },
  { code: '+249', label: '+249 (Sudan)' },
  { code: '+597', label: '+597 (Suriname)' },
  { code: '+268', label: '+268 (Swaziland)' },
  { code: '+46',  label: '+46 (Sweden)' },
  { code: '+41',  label: '+41 (Switzerland)' },
  { code: '+963', label: '+963 (Syria)' },
  { code: '+886', label: '+886 (Taiwan)' },
  { code: '+992', label: '+992 (Tajikistan)' },
  { code: '+255', label: '+255 (Tanzania)' },
  { code: '+66',  label: '+66 (Thailand)' },
  { code: '+228', label: '+228 (Togo)' },
  { code: '+216', label: '+216 (Tunisia)' },
  { code: '+90',  label: '+90 (Turkey)' },
  { code: '+993', label: '+993 (Turkmenistan)' },
  { code: '+256', label: '+256 (Uganda)' },
  { code: '+380', label: '+380 (Ukraine)' },
  { code: '+971', label: '+971 (UAE)' },
  { code: '+598', label: '+598 (Uruguay)' },
  { code: '+998', label: '+998 (Uzbekistan)' },
  { code: '+58',  label: '+58 (Venezuela)' },
  { code: '+84',  label: '+84 (Vietnam)' },
  { code: '+967', label: '+967 (Yemen)' },
  { code: '+260', label: '+260 (Zambia)' },
  { code: '+263', label: '+263 (Zimbabwe)' },
]

type FormState = {
  first_name: string
  last_name: string
  email: string
  country_code: string
  phone: string
  service: string
  message: string
}

const empty: FormState = {
  first_name: '',
  last_name: '',
  email: '',
  country_code: '+44',
  phone: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [phoneError, setPhoneError] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    // Only allow digits — silently block non-numeric characters as user types
    if (/^\d*$/.test(val)) {
      setPhoneError(false)
      setForm((prev) => ({ ...prev, phone: val }))
    } else {
      setPhoneError(true)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Final validation on submit
    if (form.phone && !/^\d+$/.test(form.phone)) {
      setPhoneError(true)
      return
    }
    setPhoneError(false)
    setStatus('loading')

    try {
      const { country_code, phone, ...rest } = form
      await submitContactForm({
        ...rest,
        phone: phone ? `${country_code} ${phone}` : '',
      })
      setStatus('success')
      setForm(empty)
      trackEvent('form_submit', 'contact', form.service)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const inputBase =
    'bg-white/5 border text-paper placeholder-white/25 px-4 py-3 text-sm font-dm outline-none transition-colors duration-200 w-full'
  const inputNormal = inputBase + ' border-white/10 focus:border-accent'
  const inputError = inputBase + ' border-red-500 focus:border-red-500'

  return (
    <section
      id="contact"
      className="py-32 px-16 bg-ink text-paper grid grid-cols-2 gap-24 items-start"
    >
      {/* Left info */}
      <div>
        <p className="text-accent text-xs tracking-[0.15em] uppercase mb-6">Get In Touch</p>
        <h2 className="font-syne font-extrabold text-[clamp(2rem,3.5vw,3.2rem)] leading-tight tracking-tight text-paper mb-8">
          Let's Build Something Together
        </h2>
        <div className="mt-2 divide-y divide-white/[0.08]">
          {[
            { label: 'Email', value: 'hello@swdata.com' },
            { label: 'Location', value: 'Available Worldwide' },
            { label: 'Response', value: 'Within 24 hours' },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-4 py-5 text-sm text-white/60">
              <span className="font-syne font-semibold text-paper w-24">{label}</span>
              {value}
            </div>
          ))}
        </div>
      </div>

      {/* Right form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Name row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] uppercase tracking-widest text-white/40">
              First Name
            </label>
            <input
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              placeholder="Jane"
              required
              className={inputNormal}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] uppercase tracking-widest text-white/40">
              Last Name
            </label>
            <input
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Smith"
              required
              className={inputNormal}
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/40">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            required
            className={inputNormal}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/40">
            Phone{' '}
            <span className="normal-case tracking-normal opacity-50">(optional)</span>
          </label>
          <div className="flex gap-2">
            {/* Country code dropdown */}
            <select
              name="country_code"
              value={form.country_code}
              onChange={handleChange}
              className="bg-[#0a0a0f] border border-white/10 text-paper text-sm font-dm outline-none focus:border-accent transition-colors duration-200 px-3 py-3 w-40 shrink-0"
            >
              {COUNTRY_CODES.map((c, i) =>
                c.disabled ? (
                  <option key={i} disabled>{c.label}</option>
                ) : (
                  <option key={i} value={c.code}>{c.label}</option>
                )
              )}
            </select>

            {/* Digits-only phone input */}
            <input
              name="phone"
              type="tel"
              inputMode="numeric"
              pattern="\d*"
              value={form.phone}
              onChange={handlePhoneChange}
              placeholder="7700900000"
              className={phoneError ? inputError : inputNormal}
            />
          </div>

          {/* Error message */}
          {phoneError && (
            <p className="text-red-400 text-xs mt-1">
              Numbers only — please remove any spaces, dashes or brackets.
            </p>
          )}
        </div>

        {/* Service */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/40">
            I'm interested in
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className={inputNormal}
            style={{ background: '#0a0a0f' }}
          >
            <option value="" disabled>Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            required
            rows={5}
            className={inputNormal + ' resize-none'}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="self-start mt-2 bg-accent text-white font-syne font-bold text-xs tracking-widest uppercase px-10 py-4 transition-all duration-200 hover:bg-[#ff5a38] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message →'}
        </button>

        {status === 'success' && (
          <div className="border border-accent bg-accent/10 text-accent font-syne text-sm px-4 py-3">
            ✓ Message sent! We'll be in touch within 24 hours.
          </div>
        )}
        {status === 'error' && (
          <div className="border border-red-500 bg-red-500/10 text-red-400 font-syne text-sm px-4 py-3">
            Something went wrong. Please try again or email us directly.
          </div>
        )}
      </form>
    </section>
  )
}
