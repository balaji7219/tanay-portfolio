import { marqueeItems } from '../data/content.js'

export default function Marquee() {
  // Duplicate the list so the scroll loops seamlessly.
  const loop = [...marqueeItems, ...marqueeItems]

  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={i}>
            {item}
            <span className="sep"> • </span>
          </span>
        ))}
      </div>
    </div>
  )
}
