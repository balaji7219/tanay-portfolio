import { services } from '../data/content.js'

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">What I do</span>
          <h2>Full-funnel marketing, end to end.</h2>
          <p>
            From the first frame of a video to the last click of a checkout — I handle
            the creative and the campaigns that turn attention into revenue.
          </p>
        </div>
        <div className="cards">
          {services.map((s) => (
            <div className="card reveal" key={s.title}>
              <div className="ic">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
