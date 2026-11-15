import { useEffect, useRef } from 'react'

// Premium "AI" hero backdrop: a slowly breathing neural network whose
// signals pulse between layers, over soft aurora light. Fades out at the
// bottom (CSS mask) so it melts into the next section.
export default function HeroScene() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, dpr = 1, raf = 0, t = 0, visible = true
    let nodes = [], edges = [], signals = []
    const mouse = { x: -9999, y: -9999 }

    const build = () => {
      const layers = w < 700 ? [4, 6, 6, 4] : [5, 8, 10, 8, 5]
      const x0 = w * 0.06, x1 = w * 0.94
      nodes = []
      layers.forEach((n, li) => {
        const x = x0 + ((x1 - x0) * li) / (layers.length - 1)
        const span = h * (0.32 + 0.38 * Math.sin((Math.PI * (li + 0.5)) / layers.length))
        for (let i = 0; i < n; i++) {
          const y = h * 0.46 + (n === 1 ? 0 : (i / (n - 1) - 0.5) * span)
          nodes.push({ x, y, bx: x, by: y, li, ph: Math.random() * Math.PI * 2 })
        }
      })
      edges = []
      nodes.forEach((a, i) => nodes.forEach((b, j) => {
        if (b.li === a.li + 1 && Math.random() < 0.55) edges.push({ a: i, b: j, wgt: 0.3 + Math.random() * 0.7 })
      }))
      signals = Array.from({ length: Math.round(edges.length / 6) }, () => newSignal())
    }

    const newSignal = () => ({ e: (Math.random() * edges.length) | 0, p: Math.random(), v: 0.004 + Math.random() * 0.006 })

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      build()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const light = document.documentElement.dataset.theme === 'light'
      const line = light ? '0,14,84' : '160,180,255'
      const hot = '247,105,0'
      const cool = light ? '43,114,215' : '120,160,255'

      // breathing node positions + gentle pull toward the cursor
      nodes.forEach((n) => {
        n.x = n.bx + Math.sin(t * 0.5 + n.ph) * 6
        n.y = n.by + Math.cos(t * 0.4 + n.ph) * 6
        const dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.hypot(dx, dy)
        if (d < 180) { const f = (1 - d / 180) * 14; n.x += (dx / d) * f; n.y += (dy / d) * f }
      })

      // hairline edges
      edges.forEach((e) => {
        const a = nodes[e.a], b = nodes[e.b]
        const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
        g.addColorStop(0, `rgba(${line},${0.05 * e.wgt})`)
        g.addColorStop(0.5, `rgba(${line},${(light ? 0.1 : 0.13) * e.wgt})`)
        g.addColorStop(1, `rgba(${line},${0.05 * e.wgt})`)
        ctx.strokeStyle = g
        ctx.lineWidth = 0.8
        ctx.beginPath()
        const mx = (a.x + b.x) / 2
        ctx.moveTo(a.x, a.y)
        ctx.bezierCurveTo(mx, a.y, mx, b.y, b.x, b.y)
        ctx.stroke()
      })

      // signals travelling forward through the network
      signals.forEach((s, i) => {
        const e = edges[s.e]; if (!e) return
        const a = nodes[e.a], b = nodes[e.b]
        const u = s.p, mx = (a.x + b.x) / 2
        // point on the cubic bezier
        const x = (1 - u) ** 3 * a.x + 3 * (1 - u) ** 2 * u * mx + 3 * (1 - u) * u * u * mx + u ** 3 * b.x
        const y = (1 - u) ** 3 * a.y + 3 * (1 - u) ** 2 * u * a.y + 3 * (1 - u) * u * u * b.y + u ** 3 * b.y
        const c = i % 3 === 0 ? hot : cool
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 14)
        glow.addColorStop(0, `rgba(${c},0.55)`)
        glow.addColorStop(1, `rgba(${c},0)`)
        ctx.fillStyle = glow
        ctx.beginPath(); ctx.arc(x, y, 14, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = `rgba(${c},0.95)`
        ctx.beginPath(); ctx.arc(x, y, 1.6, 0, Math.PI * 2); ctx.fill()
        if (!reduce) {
          s.p += s.v
          if (s.p >= 1) {
            // hand the signal to an outgoing edge of the node it reached, like a forward pass
            const next = edges.reduce((acc, ed, k) => (ed.a === e.b ? [...acc, k] : acc), [])
            Object.assign(s, next.length ? { e: next[(Math.random() * next.length) | 0], p: 0 } : newSignal(), { p: 0 })
            if (!next.length) { const firsts = edges.map((ed, k) => (nodes[ed.a].li === 0 ? k : -1)).filter((k) => k >= 0); s.e = firsts[(Math.random() * firsts.length) | 0] }
          }
        }
      })

      // nodes: soft core with a slow pulse
      nodes.forEach((n) => {
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.2 + n.ph)
        const r = 2 + pulse * 1.2
        const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 10)
        halo.addColorStop(0, `rgba(${cool},${0.18 + pulse * 0.12})`)
        halo.addColorStop(1, `rgba(${cool},0)`)
        ctx.fillStyle = halo
        ctx.beginPath(); ctx.arc(n.x, n.y, 10, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = light ? `rgba(0,14,84,${0.45 + pulse * 0.3})` : `rgba(230,236,255,${0.55 + pulse * 0.35})`
        ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2); ctx.fill()
      })

      if (!reduce) t += 0.016
    }

    const loop = () => { if (visible) draw(); raf = requestAnimationFrame(loop) }
    const onMove = (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top }
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting })

    resize()
    io.observe(canvas)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    reduce ? draw() : loop()

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="hero-aurora hero-aurora-1" />
      <div className="hero-aurora hero-aurora-2" />
      <div className="hero-aurora hero-aurora-3" />
      <canvas ref={ref} />
    </div>
  )
}
