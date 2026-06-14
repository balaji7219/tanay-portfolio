import { useEffect } from 'react'

// Adds the `.in` class to every `.reveal` element as it scrolls into view.
export default function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const els = document.querySelectorAll('.reveal')
    els.forEach((el, i) => {
      el.style.transitionDelay = (i % 3) * 0.08 + 's'
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])
}
