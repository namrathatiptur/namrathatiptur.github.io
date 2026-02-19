export default function Projects() {
  const iconMap = {
    county: 'fa-map-location-dot',
    contentcrew: 'fa-robot',
    cogni: 'fa-magnifying-glass-chart',
    rag: 'fa-chart-line',
    pcos: 'fa-flask',
    healthcare: 'fa-heart-pulse',
  }

  const projects = [
    { title: 'US County Health Outcomes Dashboard', desc: 'Tableau dashboard with 29+ health metrics across 3,000+ US counties.', link: 'https://github.com/namrathatiptur/US-County-Health-Outcomes-Dashboard', visual: 'county' },
    { title: 'ContentCrew', desc: 'Multi-agent content system with crewAI—research, write, edit, fact-check.', link: 'https://github.com/namrathatiptur/contentcrew', visual: 'contentcrew' },
    { title: 'Cogni Research', desc: 'AI research assistant with LangGraph, Claude, MCP—auto research & citations.', link: 'https://github.com/namrathatiptur/cogni-research', visual: 'cogni' },
    { title: 'RAG Observatory', desc: 'LLM eval framework—relevance, grounding, attribution, consistency metrics.', link: 'https://github.com/namrathatiptur/rag-observatory', visual: 'rag' },
    { title: 'PCOS Subtype Discovery', desc: 'Unsupervised learning for 4 clinical subtypes. 82% stability, 0.73 ARI.', link: null, visual: 'pcos' },
    { title: 'Healthcare Analytics', desc: '10+ SQL projects, CDC PLACES dashboard, AI job landscape analysis.', link: null, visual: 'healthcare' },
  ]

  const ProjectCard = ({ p }) => {
    const Wrapper = p.link ? 'a' : 'div'
    const linkProps = p.link ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <Wrapper
        {...linkProps}
        className={`marquee-card glass-card ${!p.link ? 'marquee-card-no-link' : ''}`}
      >
        <div className={`marquee-card-visual marquee-${p.visual}`}>
          <i className={`fas ${iconMap[p.visual]} marquee-card-icon`}></i>
        </div>
        <div className="marquee-card-content">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          {p.link && <span className="marquee-card-link">View on GitHub <i className="fas fa-arrow-up-right-from-square"></i></span>}
        </div>
      </Wrapper>
    )
  }

  return (
    <section id="projects" className="block block-projects">
      <div className="block-inner">
        <span className="block-label">03 — Projects</span>
        <h2 className="block-title">Selected work</h2>
      </div>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...projects, ...projects].map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
