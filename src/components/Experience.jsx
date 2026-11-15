import { useState } from 'react'

const jobs = [
  {
    id: 'ospo',
    short: 'OSPO',
    start: '2026-09', end: '2026-11',
    date: 'Sep 2026 – Present',
    title: 'Software Developer',
    subtitle: 'TeachOrange',
    type: 'Current',
    company: 'Syracuse University OSPO',
    companyUrl: 'https://www.teachorange.com/',
    logo: 'https://www.google.com/s2/favicons?domain=syr.edu&sz=128',
    location: 'Syracuse, NY',
    metrics: [
      { value: 'Full-stack', label: 'Django + PostgreSQL' },
      { value: 'Open source', label: 'Syracuse University OSPO' },
      { value: 'In production', label: 'teachorange.com' },
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'REST / JSON API', 'HTML/CSS', 'Gunicorn', 'Git'],
    bullets: [
      'Engineering TeachOrange, Syracuse University\'s open source platform for faculty to discover, preview and download engaged-learning teaching resources',
      'Architected the backend for user profiles, email verification, saved activities and faculty content submissions on Django and PostgreSQL',
      'Productionized the app for cloud deployment with environment-based configuration, a CI pipeline and fixes that restored a failing test suite',
      'Led a full UI redesign across home, browse, activity and consultation pages, introducing multi-select faceted search over categories and tags',
      'Made email flows fail safely, returning a 503 when delivery fails instead of falsely confirming to users that a message was sent',
    ],
  },
  {
    id: 'cpi',
    short: 'CPI',
    start: '2026-06', end: '2026-08',
    date: 'Jun 2026 – Aug 2026',
    title: 'Data and Research Analyst',
    subtitle: 'Internship',
    type: 'Internship',
    company: 'Centre for Public Impact',
    companyUrl: 'https://www.centreforpublicimpact.org',
    logo: 'https://www.google.com/s2/favicons?domain=centreforpublicimpact.org&sz=128',
    location: 'Remote',
    metrics: [
      { value: '3d → 30m', label: 'report turnaround' },
      { value: '400+', label: 'responses segmented' },
      { value: '~50%', label: 'fewer ad hoc requests' },
    ],
    stack: ['Python', 'PostgreSQL', 'SQL', 'Power BI', 'Clustering', 'LLM thematic analysis', 'Significance testing'],
    bullets: [
      'Automated a survey-to-report pipeline (Python, scheduled job, PostgreSQL), cutting report turnaround from 3 days to under 30 minutes',
      'Consolidated survey data from 3 separate sources into one queryable store with automated data-quality checks flagging incomplete responses',
      'Segmented 400+ stakeholder responses across 6 Latin American markets in SQL, uncovering a 30% urban-rural engagement gap and running significance testing on a small, hard-to-reach sample',
      'Built a self-serve Power BI dashboard for 12 stakeholders, cutting ad hoc data requests by ~50% and standardizing reporting across two programs for non-technical government and philanthropic audiences',
      'Clustered respondents into 4 behavioral segments to guide community co-design sessions',
      'Themed 400+ open-ended responses using LLM-based analysis validated against manual coding, accelerating workflows with AI-assisted tools (Claude, Codex, Copilot)',
      'Versioned the full analysis in a documented, reproducible repository so future survey cycles can be rerun end to end',
    ],
  },
  {
    id: 'carelon',
    short: 'Carelon',
    start: '2023-08', end: '2024-08',
    date: 'Aug 2023 – Aug 2024',
    title: 'Associate Software Engineer',
    subtitle: 'Data Engineering & Analytics',
    type: 'Full-time',
    company: 'Carelon Global Solutions (Elevance Health)',
    companyUrl: 'https://www.carelonglobal.com',
    logo: 'https://www.google.com/s2/favicons?domain=carelonglobal.com&sz=128',
    location: 'Bangalore, India',
    metrics: [
      { value: '2M+', label: 'records ingested daily' },
      { value: '180', label: 'legacy jobs retired' },
      { value: '$250K', label: 'yearly license savings' },
    ],
    stack: ['PySpark', 'Snowflake', 'Databricks', 'Delta Lake', 'Kafka', 'AWS (S3, Glue, EMR, Redshift)', 'Informatica', 'Airflow', 'Control-M', 'SQL', 'Python'],
    bullets: [
      'Migrated legacy Teradata and Hadoop/Hive workloads to AWS and Snowflake, retiring 180 on-prem jobs and cutting processing time by 45%',
      'Built and maintained 35+ batch ETL pipelines ingesting 2M+ claims, eligibility, member and provider records a day (~400 GB/day) into AWS S3 and Snowflake',
      'Converted 85 Informatica PowerCenter workflows to PySpark on AWS EMR and Glue, cutting runtime by 30% and retiring ~$250K a year in licenses',
      'Built near real-time ingestion of hospital ADT feeds from 30+ facilities (~200K messages/day) with Kafka and Spark Streaming, cutting latency from next-day to under 5 minutes',
      'Implemented a medallion (bronze, silver, gold) lakehouse on Databricks with Delta Lake and Unity Catalog across 120+ Delta tables',
      'Designed star-schema data marts for claims and pharmacy data supporting reporting for 11M+ Medicaid and Medicare members',
      'Tuned Snowflake pipelines (Snowpipe, Streams, Tasks), clustering and warehouse sizing to lower Snowflake spend by 25%',
      'Enforced HIPAA compliance by masking 200+ PHI/PII columns with role-based access, with zero findings in internal audits',
      'Built 300+ data quality and reconciliation checks, cutting UAT defects by 40%, and kept 150+ daily jobs at 99.5% SLA with Control-M and Airflow',
      'Worked in a SAFe agile team with Jira, Git and Jenkins CI/CD, and mentored 4 junior engineers',
    ],
  },
  {
    id: 'bwf',
    short: 'BWF',
    start: '2021-09', end: '2023-07',
    date: 'Sep 2021 – Jul 2023',
    title: 'Data Engineer',
    subtitle: null,
    type: 'Full-time',
    company: 'Belgian Waffle Factory',
    companyUrl: 'https://www.belgianwafflefactory.com',
    logo: 'https://www.google.com/s2/favicons?domain=belgianwafflefactory.com&sz=128',
    location: 'Bangalore, India',
    metrics: [
      { value: '500K', label: 'events per day' },
      { value: '5+', label: 'source systems' },
      { value: 'S3 → Redshift', label: 'AWS-native ETL' },
    ],
    stack: ['Apache Airflow', 'AWS S3', 'AWS EC2', 'Amazon Redshift', 'Python', 'SQL', 'Power BI'],
    bullets: [
      'Built AWS-native Airflow ETL on EC2, staging in S3 and loading Amazon Redshift, processing 500K events/day of multi-channel sales data',
      'Unified 5+ sources into a single Redshift sales model with Python and SQL transforms and pipeline validation',
      'Created Power BI dashboards tracking sales, inventory and product-mix KPIs across stores and regions',
      'Integrated POS and delivery aggregator feeds into the centralized Redshift data warehouse',
    ],
  },
]

const months = (s, e) => {
  const [sy, sm] = s.split('-').map(Number)
  const [ey, em] = e.split('-').map(Number)
  return (ey - sy) * 12 + (em - sm) + 1
}
const fmtDur = (m) => {
  const y = Math.floor(m / 12), r = m % 12
  return [y && `${y} yr${y > 1 ? 's' : ''}`, r && `${r} mo`].filter(Boolean).join(' ')
}

// Wrap numbers/metrics in bullets so they stand out
const highlight = (text) =>
  text.split(/((?<![A-Za-z\d])~?\$?\d[\d,.]*\s?(?:TB|GB|K|M)?\+?(?:%| GB\/day| hrs\/week)?)/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="exp-num">{part}</strong> : part
  )

function Logo({ job, size = 'sm' }) {
  const [failed, setFailed] = useState(false)
  return (
    <span className={`exp-logo exp-logo-${size}`}>
      {failed ? job.short[0] : <img src={job.logo} alt="" onError={() => setFailed(true)} />}
    </span>
  )
}

export default function Experience() {
  const [active, setActive] = useState(0)
  const job = jobs[active]

  // Career timeline: proportional segments, oldest → newest
  const chron = [...jobs].reverse()
  const first = chron[0].start, last = chron[chron.length - 1].end
  const totalFT = jobs.filter((j) => j.type === 'Full-time').reduce((a, j) => a + months(j.start, j.end), 0)

  const onKey = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); setActive((active + 1) % jobs.length) }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); setActive((active - 1 + jobs.length) % jobs.length) }
  }

  return (
    <section id="experience" className="block block-experience">
      <div className="block-inner">
        <span className="block-label">02 — Experience</span>
        <h2 className="block-title">Where I've built</h2>

        <div className="exp-timeline glass-card" aria-hidden="true">
          <div className="exp-timeline-head">
            <span>{fmtDur(totalFT)} full-time in data engineering</span>
            <span className="exp-timeline-range">{first.slice(0, 4)} — {last.slice(0, 4)}</span>
          </div>
          <div className="exp-timeline-track">
            {chron.map((j) => {
              const m = months(j.start, j.end)
              const idx = jobs.indexOf(j)
              return (
                <button
                  key={j.id}
                  tabIndex={-1}
                  className={`exp-seg ${idx === active ? 'is-active' : ''}`}
                  style={{ flexGrow: m }}
                  onClick={() => setActive(idx)}
                  title={`${j.company} · ${j.date}`}
                >
                  <span>{j.short}</span><small>{j.start.slice(0, 4)}{j.end.slice(0, 4) !== j.start.slice(0, 4) ? `–${j.end.slice(2, 4)}` : ''}</small>
                </button>
              )
            })}
          </div>
        </div>

        <div className="exp-shell">
          <div className="exp-tabs" role="tablist" aria-orientation="vertical" onKeyDown={onKey}>
            {jobs.map((j, i) => (
              <button
                key={j.id}
                role="tab"
                id={`exp-tab-${j.id}`}
                aria-selected={i === active}
                aria-controls="exp-panel"
                tabIndex={i === active ? 0 : -1}
                className={`exp-tab ${i === active ? 'is-active' : ''}`}
                onClick={(e) => { setActive(i); e.currentTarget.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: 'smooth' }) }}
              >
                <Logo job={j} />
                <span className="exp-tab-text">
                  <span className="exp-tab-company">{j.company}</span>
                  <span className="exp-tab-meta">{j.date.split(' – ')[0].slice(-4)} · {fmtDur(months(j.start, j.end))}</span>
                </span>
              </button>
            ))}
          </div>

          <div
            key={job.id}
            id="exp-panel"
            role="tabpanel"
            aria-labelledby={`exp-tab-${job.id}`}
            className="exp-panel glass-card"
          >
            <div className="exp-panel-head">
              <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" aria-label={`${job.company} website`}>
                <Logo job={job} size="lg" />
              </a>
              <div className="exp-panel-title">
                <h3>{job.title}{job.subtitle && <span className="exp-card-subtitle"> · {job.subtitle}</span>}</h3>
                <p className="exp-card-company">
                  {job.company} · {job.location}
                </p>
              </div>
              <div className="exp-panel-when">
                <span className={`exp-type exp-type-${job.type === 'Internship' ? 'intern' : 'ft'}`}>{job.type}</span>
                <span className="exp-card-date">{job.date}</span>
              </div>
            </div>

            <div className="exp-metrics">
              {job.metrics.map((m) => (
                <div key={m.label} className="exp-metric">
                  <span className="exp-metric-value">{m.value}</span>
                  <span className="exp-metric-label">{m.label}</span>
                </div>
              ))}
            </div>

            <ul className="exp-card-bullets">
              {job.bullets.map((b, j) => (
                <li key={j} style={{ animationDelay: `${j * 50}ms` }}>{highlight(b)}</li>
              ))}
            </ul>

            <div className="exp-stack">
              {job.stack.map((s) => <span key={s} className="skill-tag">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
