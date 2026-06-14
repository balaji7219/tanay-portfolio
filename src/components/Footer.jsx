import { profile, socials } from '../data/content.js'

export default function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="logo">
          <span className="dot" /> {profile.firstName} {profile.lastName}
        </div>
        <small>
          © 2026 {profile.firstName} {profile.lastName} — {profile.role}
        </small>
        <div className="socials">
          {socials.map((s) => (
            <a
              href={s.href}
              key={s.title}
              title={s.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
