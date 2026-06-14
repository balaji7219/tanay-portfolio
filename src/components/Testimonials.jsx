import { testimonials } from '../data/content.js'

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Kind words</span>
          <h2>Brands I've worked with, in their words.</h2>
        </div>
        <div className="quotes">
          {testimonials.map((t) => (
            <div className="quote reveal" key={t.nm}>
              <div className="stars">★★★★★</div>
              <p>"{t.quote}"</p>
              <div className="who">
                <div className="av">{t.av}</div>
                <div>
                  <div className="nm">{t.nm}</div>
                  <div className="rl">{t.rl}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
