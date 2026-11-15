import { useState } from 'react'

const CATS = ['All', 'Data Engineering', 'GenAI & Agents', 'ML & Research', 'Analytics']

const projects = [
  {
    title: 'PulseLake',
    cat: 'Data Engineering',
    icon: 'fa-train-subway',
    metric: { value: '740K', label: 'rows / hour, measured' },
    desc: 'End-to-end pipeline over the live NYC subway feed, modeled into 7 dbt marts with 116 tests running in CI.',
    flow: ['MTA GTFS-RT', 'Python ingest', 'DuckDB', 'dbt marts', 'Streamlit'],
    stack: ['Python', 'DuckDB', 'dbt', 'pytest', 'GitHub Actions'],
    link: 'https://github.com/namrathatiptur/pulselake',
    featured: true,
  },
  {
    title: 'RAG Observatory',
    cat: 'GenAI & Agents',
    icon: 'fa-chart-line',
    metric: { value: '+15%', label: 'hallucination detection' },
    desc: 'Evaluation framework for RAG systems with 5 custom metrics, monitored live over 1,000+ test queries.',
    flow: ['Queries', 'Retriever', 'LLM', '5 metrics', 'Dashboard'],
    stack: ['Python', 'RAG', 'Vector DB', 'Streamlit'],
    link: 'https://github.com/namrathatiptur/rag-observatory',
  },
  {
    title: 'Cogni Research',
    cat: 'GenAI & Agents',
    icon: 'fa-magnifying-glass-chart',
    metric: { value: '4', label: 'MCP tool servers' },
    desc: 'Autonomous research-write-reflect agent with vector memory that produces cited reports.',
    flow: ['Question', 'LangGraph agent', 'MCP tools', 'ChromaDB', 'Cited report'],
    stack: ['LangGraph', 'Claude', 'MCP', 'FastAPI'],
    link: 'https://github.com/namrathatiptur/cogni-research',
  },
  {
    title: 'PCOS Subtype Discovery',
    cat: 'ML & Research',
    icon: 'fa-flask',
    metric: { value: '0.73', label: 'adjusted Rand index' },
    desc: 'Extended Nature Medicine research on 4 PCOS subtypes, reaching 82% stability across 100 bootstrap runs.',
    flow: ['Clinical data', '5 clustering methods', 'Bootstrap', '4 subtypes'],
    stack: ['Python', 'scikit-learn', 'Statistics'],
    link: null,
  },
  {
    title: 'ContentCrew',
    cat: 'GenAI & Agents',
    icon: 'fa-robot',
    metric: { value: '5', label: 'collaborating agents' },
    desc: 'Multi-agent crew that researches, drafts, edits and fact-checks content with role-based orchestration.',
    flow: ['Research', 'Write', 'Edit', 'Fact-check'],
    stack: ['crewAI', 'Pydantic', 'GPT-4o-mini'],
    link: 'https://github.com/namrathatiptur/contentcrew',
  },
  {
    title: 'US County Health Outcomes',
    cat: 'Analytics',
    icon: 'fa-map-location-dot',
    metric: { value: '3,000+', label: 'US counties' },
    desc: 'Tableau analysis of 29+ health outcome metrics, mapping where population health diverges.',
    flow: ['CDC PLACES', 'SQL prep', 'Tableau'],
    stack: ['SQL', 'Tableau'],
    link: 'https://github.com/namrathatiptur/US-County-Health-Outcomes-Dashboard',
  },
  {
    title: 'Healthcare Analytics',
    cat: 'Analytics',
    icon: 'fa-heart-pulse',
    metric: { value: '10+', label: 'advanced SQL studies' },
    desc: 'Care fragmentation, health equity and provider fraud analyses, plus a 50K-posting AI jobs study.',
    flow: ['Claims & BLS data', 'Advanced SQL', 'Dashboards'],
    stack: ['SQL', 'Tableau'],
    link: null,
  },
]

function ProjectCard({ p }) {
  const Wrapper = p.link ? 'a' : 'div'
  const linkProps = p.link ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Wrapper {...linkProps} className="proj glass-card">
      <div className="proj-top">
        <span className="proj-icon"><i className={`fas ${p.icon}`}></i></span>
        <span className="proj-cat">{p.cat}</span>
        {p.link && <i className="fas fa-arrow-up-right-from-square proj-out" aria-hidden="true"></i>}
      </div>

      <div className="proj-metric">
        <span className="proj-metric-value">{p.metric.value}</span>
        <span className="proj-metric-label">{p.metric.label}</span>
      </div>

      <h3 className="proj-title">{p.title}</h3>
      <p className="proj-desc">{p.desc}</p>

      <div className="proj-foot">
        <span className="proj-tools">{p.stack.slice(0, 3).join(' · ')}</span>
      </div>
    </Wrapper>
  )
}

export default function Projects() {
  const [cat, setCat] = useState('All')
  const shown = cat === 'All' ? projects : projects.filter((p) => p.cat === cat)

  return (
    <section id="projects" className="block block-projects">
      <div className="block-inner">
        <span className="block-label">03 — Projects</span>
        <h2 className="block-title">Selected work</h2>

        <div className="proj-filters" role="tablist" aria-label="Filter projects">
          {CATS.map((c) => {
            const n = c === 'All' ? projects.length : projects.filter((p) => p.cat === c).length
            return (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                className={`proj-filter ${cat === c ? 'is-on' : ''}`}
                onClick={() => setCat(c)}
              >
                {c}<span>{n}</span>
              </button>
            )
          })}
        </div>

        <div className="proj-grid" key={cat}>
          {shown.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  )
}
