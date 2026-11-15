export default function Projects() {
  const iconMap = {
    pulselake: 'fa-train-subway',
    county: 'fa-map-location-dot',
    contentcrew: 'fa-robot',
    cogni: 'fa-magnifying-glass-chart',
    rag: 'fa-chart-line',
    pcos: 'fa-flask',
    healthcare: 'fa-heart-pulse',
  }

  const projects = [
    { title: 'PulseLake', desc: 'End-to-end pipeline over the live NYC subway feed: ~740K rows/hour into 7 dbt marts, 116 tests in CI.', link: 'https://github.com/namrathatiptur/pulselake', visual: 'pulselake' },
    { title: 'US County Health Outcomes Dashboard', desc: 'Tableau analysis of 29+ health outcome metrics across 3,000+ US counties.', link: 'https://github.com/namrathatiptur/US-County-Health-Outcomes-Dashboard', visual: 'county' },
    { title: 'ContentCrew', desc: 'Multi-agent crewAI pipeline that researches, drafts, edits and fact-checks content with role-based agents.', link: 'https://github.com/namrathatiptur/contentcrew', visual: 'contentcrew' },
    { title: 'Cogni Research', desc: 'Autonomous research agent on LangGraph, Claude and MCP with vector memory and cited reports.', link: 'https://github.com/namrathatiptur/cogni-research', visual: 'cogni' },
    { title: 'RAG Observatory', desc: 'RAG evaluation framework with 5 custom metrics, improving hallucination detection by 15% over 1,000+ queries.', link: 'https://github.com/namrathatiptur/rag-observatory', visual: 'rag' },
    { title: 'PCOS Subtype Discovery', desc: 'Extended Nature Medicine research on 4 PCOS subtypes across 5 clustering methods: 82% stability, 0.73 ARI.', link: null, visual: 'pcos' },
    { title: 'Healthcare Analytics', desc: '10+ advanced SQL studies on care fragmentation, health equity and provider fraud, plus a 50K-posting AI jobs analysis.', link: null, visual: 'healthcare' },
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
