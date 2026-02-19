import { useState } from 'react'

export default function Hero({ scrollTo }) {
  const [badgeHover, setBadgeHover] = useState(false)
  const roles = ['Data Engineer', 'ML Engineer', 'Data Analyst', 'Data Scientist', 'AI Engineer']

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">Data Engineer & ML Enthusiast</p>
          <h1 className="hero-name">
            <span className="hero-name-line">Namratha</span>
            <span className="hero-name-line hero-name-accent">Tiptur Manjunath</span>
          </h1>
          <p className="hero-tagline">Building intelligent systems and transforming data into insights</p>
          <div
            className="hero-badge-wrap"
            onMouseEnter={() => setBadgeHover(true)}
            onMouseLeave={() => setBadgeHover(false)}
            onTouchEnd={(e) => { e.preventDefault(); setBadgeHover(!badgeHover) }}
          >
            <button className="hero-badge">Seeking Co-op / Internship · Summer 2026</button>
            {badgeHover && (
              <div className="hero-badge-dropdown glass-card">
                <div className="hero-badge-dropdown-section">
                  <span className="hero-badge-label">Roles</span>
                  <div className="hero-badge-tags">
                    {roles.map((r) => (
                      <span key={r} className="hero-badge-tag">{r}</span>
                    ))}
                  </div>
                </div>
                <div className="hero-badge-dropdown-section">
                  <span className="hero-badge-label">Timeline</span>
                  <p className="hero-badge-timeline">May – August 2026 · Full-time · On-site or Remote</p>
                </div>
              </div>
            )}
          </div>
          <div className="hero-actions">
            <div className="hero-actions-primary">
              <a href="mailto:namrathatm.ms@gmail.com" className="hero-cta">
                Get in touch
              </a>
            </div>
            <div className="hero-actions-divider" aria-hidden="true" />
            <div className="hero-links">
              <a href="https://www.linkedin.com/in/namrathatm/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/namrathatiptur" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <button className="hero-scroll" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <i className="fas fa-chevron-down"></i>
      </button>
    </section>
  )
}
