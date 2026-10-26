import { useEffect, useRef, useState } from 'react'

// Counts a number like "5,000+" or "30 min" up from zero when it scrolls into view.
function Count({ value, duration = 1600 }) {
  const match = String(value).match(/^([\d,]+)(.*)$/)
  const ref = useRef(null)
  const [n, setN] = useState(match ? 0 : null)

  useEffect(() => {
    if (!match) return
    const target = parseInt(match[1].replace(/,/g, ''), 10)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setN(target)
      return
    }
    let raf
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / duration)
          setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(ref.current)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  if (!match) return <span ref={ref}>{value}</span>
  return (
    <span ref={ref}>
      {n.toLocaleString('en-US')}
      {match[2]}
    </span>
  )
}

export default Count
