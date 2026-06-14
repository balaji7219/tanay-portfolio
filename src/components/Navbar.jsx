import { useState } from 'react'
import { profile, navLinks } from '../data/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav className="wrap">
        <a href="#top" className="logo">
          <span className="dot" /> {profile.firstName}
          <span className="logo-muted">{profile.brandSuffix}</span>
        </a>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn">Let's talk →</a>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </nav>
    </header>
  )
}
