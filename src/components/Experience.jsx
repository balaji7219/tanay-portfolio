import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Experience</span>
          <h2>Where I've made an impact.</h2>
          <p>Six years building and scaling marketing for agencies and brands.</p>
        </div>
        <div className="timeline">
          {experience.map((e) => (
            <div className="tl-item reveal" key={e.title}>
              <div className="when">{e.when}</div>
              <h3>{e.title}</h3>
              <div className="co">{e.co}</div>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
