import { profile, heroStats, reelMetrics } from '../data/content.js'

export default function Hero() {
  const playReel = () =>
    alert('🎬 Drop your showreel video URL here to make it play!')

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="reveal">
          <span className="pill">
            <span className="live" /> Available for new projects · 2026
          </span>
          <p className="intro">
            Hi, I'm {profile.firstName} {profile.lastName} 👋
          </p>
          <h1>
            Marketing that <span className="grad">moves</span> people &amp; metrics.
          </h1>
          <p className="lead">
            I'm a digital marketer who crafts scroll-stopping marketing videos, runs
            high-ROI paid ad campaigns, and builds growth systems for brands that want
            results — not just reach.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn">View my work</a>
            <a href="#contact" className="btn ghost">Book a free call</a>
          </div>
          <div className="hero-stats">
            {heroStats.map((s) => (
              <div key={s.lbl}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal visual">
          <div className="v-row">
            <span className="tag">▶ FEATURED REEL</span>
            <span className="tag">0:42</span>
          </div>
          <div className="play">
            <div className="pbtn" title="Play showreel" onClick={playReel} />
          </div>
          <div className="metrics">
            {reelMetrics.map((m) => (
              <div className="metric" key={m.lbl}>
                <div className="m-num">{m.num}</div>
                <div className="m-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
