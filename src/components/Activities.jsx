import { useEffect, useState } from 'react'

export const activities = [
  {
    tag: 'Nov 2026',
    title: 'KubeCon + CloudNativeCon North America 2026',
    location: 'Cloud Native Computing Foundation (CNCF)',
    images: [
      { src: '/assets/kubecon-na-2026-1.jpg', alt: 'Group photo on the KubeCon + CloudNativeCon North America 2026 main stage' },
      { src: '/assets/kubecon-na-2026-2.jpg', alt: 'Namratha talking with attendees on the KubeCon expo floor' },
    ],
    desc: (
      <>
        Attended <strong>KubeCon + CloudNativeCon North America 2026</strong>, the flagship conference of the cloud native community. Connected with platform and data engineers across the expo floor and followed how teams run data and AI workloads on <strong>Kubernetes</strong> and the CNCF ecosystem.
      </>
    ),
  },
  {
    tag: 'Fall 2025',
    title: 'Graduate Case Competition',
    location: 'Syracuse University · Martin J. Whitman School of Management',
    images: [{ src: '/assets/1762648476765.jpeg', alt: 'KNARV Team at Graduate Case Competition Fall 2025' }],
    desc: (
      <>
        Team KNARV competed with a real business challenge for <strong>Spatchcock Funk</strong>. We analyzed audience, digital presence, and growth opportunities, delivering data-backed strategic recommendations with measurable KPIs. 
      </>
    ),
  },
]

export function PhotoCarousel({ images, interval = 4000 }) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = images.length

  useEffect(() => {
    if (n < 2 || paused) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((x) => (x + 1) % n), interval)
    return () => clearInterval(t)
  }, [n, paused, interval])

  if (n === 1) return <img src={images[0].src} alt={images[0].alt} loading="lazy" />

  return (
    <div
      className="activity-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {images.map((img, k) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className={k === i ? 'is-active' : ''}
          aria-hidden={k !== i}
        />
      ))}
      <button className="carousel-nav carousel-prev" aria-label="Previous photo" onClick={() => setI((i - 1 + n) % n)}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="carousel-nav carousel-next" aria-label="Next photo" onClick={() => setI((i + 1) % n)}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="carousel-dots">
        {images.map((_, k) => (
          <button
            key={k}
            className={k === i ? 'is-active' : ''}
            aria-label={`Show photo ${k + 1} of ${n}`}
            aria-current={k === i}
            onClick={() => setI(k)}
          >
            {k === i && !paused && <span style={{ animationDuration: `${interval}ms` }} />}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Activities() {
  return (
    <section id="activities" className="block block-activities">
      <div className="block-inner">
        <span className="block-label">04 — Activities</span>
        <h2 className="block-title">Recent spotlight</h2>
        <div className="activity-list">
          {activities.map((a) => (
            <div key={a.title} className="activity-featured glass-card">
              <div className="activity-featured-image">
                <PhotoCarousel images={a.images} />
              </div>
              <div className="activity-featured-body">
                <span className="activity-featured-tag">{a.tag}</span>
                <h3>{a.title}</h3>
                <p className="activity-featured-location">{a.location}</p>
                <p className="activity-featured-desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
