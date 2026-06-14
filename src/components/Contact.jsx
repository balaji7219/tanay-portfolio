import { useState } from 'react'
import { profile, socials } from '../data/content.js'

// Netlify Forms needs a urlencoded POST to "/" including the form name.
const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

const EMPTY = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()

    // Require a name + at least one way to reach back (email OR phone).
    if (!form.name.trim() || (!form.email.trim() && !form.phone.trim())) {
      setStatus('error')
      return
    }

    setStatus('sending')
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => {
        setStatus('success')
        setForm(EMPTY)
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section id="contact">
      <div className="wrap reveal">
        <div className="cta-box">
          <h2>Let's grow your brand.</h2>
          <p>
            Got a product to launch or a campaign to scale? Drop your details below —
            I reply within 24 hours.
          </p>

          {status === 'success' ? (
            <div className="form-success">
              ✅ Thanks! Your message is on its way — I'll be in touch shortly.
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="contact-form"
            >
              {/* Required by Netlify for JS-submitted forms */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot anti-spam field (hidden from humans) */}
              <p className="hp">
                <label>
                  Don't fill this out: <input name="bot-field" onChange={handleChange} />
                </label>
              </p>

              <div className="field-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name *"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone / WhatsApp number"
                value={form.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project (optional)"
                value={form.message}
                onChange={handleChange}
              />

              {status === 'error' && (
                <div className="form-error">
                  Please add your name and either an email or a phone number.
                </div>
              )}

              <button type="submit" className="btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message →'}
              </button>
            </form>
          )}

          <div className="contact-alt">
            <span>Or reach me directly:</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>

          <div className="contact-socials">
            {socials.map((s) => (
              <a
                href={s.href}
                key={s.title}
                title={s.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon} <span>{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
