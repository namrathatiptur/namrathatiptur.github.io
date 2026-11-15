import { activities, PhotoCarousel } from './Activities'
import HeroScene from './HeroScene'

const ROLES = ['Data Engineer', 'Data Scientist', 'AI Engineer', 'Data Analyst']

export default function Hero({ scrollTo }) {
  const spot = activities[0]

  return (
    <section id="home" className="hero">
      <HeroScene />
      <div className="hero-inner hero-split">
        <aside className="hero-spot glass-card" aria-label="Recent spotlight">
          <div className="hero-spot-media">
            <PhotoCarousel images={spot.images} />
          </div>
          <div className="hero-spot-body">
            <span className="hero-spot-kicker"><i className="hero-spot-dot" />Recent spotlight · {spot.tag}</span>
            <h2 className="hero-spot-title">{spot.title}</h2>
            <button className="hero-spot-link" onClick={() => scrollTo('activities')}>
              See all activities <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </aside>

        <div className="hero-text">
          <p className="hero-eyebrow">Data Engineer · Analytics & ML</p>
          <h1 className="hero-name">
            Namratha <span className="hero-name-accent">Tiptur Manjunath</span>
          </h1>
          <p className="hero-tagline">I build reliable data platforms, from cloud ETL and lakehouses to the analytics and ML that run on them.</p>
          <div className="hero-open">
            <p className="hero-open-status"><i />Open to full-time roles · from January 2027</p>
            <ul className="hero-open-roles">
              {ROLES.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>
          <div className="hero-actions">
            <a href="mailto:namrathatm.ms@gmail.com" className="hero-cta">Get in touch</a>
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
    </section>
  )
}
