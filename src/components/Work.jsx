import { projects } from '../data/content.js'

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Selected work</span>
          <h2>Campaigns &amp; videos that delivered.</h2>
          <p>A snapshot of recent projects across e-commerce, SaaS, and local brands.</p>
        </div>
        <div className="work-grid">
          {projects.map((p) => (
            <div className={`project ${p.cls} reveal`} key={p.title}>
              <span className="cat">{p.cat}</span>
              <h3>{p.title}</h3>
              <div className="res">
                {p.res.map(([val, label]) => (
                  <span key={label}>
                    <b>{val}</b> {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
