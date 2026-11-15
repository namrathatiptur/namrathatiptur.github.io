import { useState } from 'react'

// Where each skill was used. Intensity on the grid = how many places it shows up.
const SOURCES = {
  ospo: 'Syracuse OSPO (TeachOrange)',
  cpi: 'Centre for Public Impact',
  carelon: 'Carelon',
  bwf: 'Belgian Waffle Factory',
  pulselake: 'PulseLake',
  rag: 'RAG Observatory',
  cogni: 'Cogni Research',
  crew: 'ContentCrew',
  pcos: 'PCOS Subtypes',
  health: 'Healthcare Analytics',
  ms: 'MS coursework',
}

const S = (name, ...used) => ({ name, used })

const groups = [
  { label: 'Programming', skills: [
    S('Python', 'ospo', 'cpi', 'carelon', 'bwf', 'pulselake', 'rag', 'cogni', 'crew', 'pcos'),
    S('SQL', 'cpi', 'carelon', 'bwf', 'pulselake', 'health', 'ms'),
    S('JavaScript', 'ospo'), S('Java', 'ms'), S('R', 'ms'), S('Shell', 'carelon'),
  ] },
  { label: 'Data Engineering', skills: [
    S('Apache Airflow', 'carelon', 'bwf'), S('Informatica', 'carelon'), S('dbt', 'pulselake'),
    S('Apache Spark', 'carelon'), S('PySpark', 'carelon'), S('Spark Streaming', 'carelon'), S('Kafka', 'carelon'),
    S('Databricks', 'carelon'), S('Delta Lake', 'carelon'), S('Control-M', 'carelon'),
    S('ETL', 'cpi', 'carelon', 'bwf', 'pulselake'), S('Data Quality', 'cpi', 'carelon', 'pulselake'),
    S('pytest', 'pulselake'), S('CI/CD', 'carelon', 'pulselake'),
  ] },
  { label: 'AWS Data Services', skills: [
    S('S3', 'carelon', 'bwf'), S('EC2', 'bwf'), S('Redshift', 'carelon', 'bwf'), S('Glue', 'carelon'), S('EMR', 'carelon'),
    S('Athena', 'carelon'), S('Lambda', 'carelon'), S('Step Functions', 'carelon'), S('IAM', 'carelon'),
    S('Kinesis'), S('MWAA'), S('Lake Formation'), S('RDS'), S('DynamoDB', 'carelon'), S('CloudWatch'),
  ] },
  { label: 'Databases & Warehouses', skills: [
    S('Snowflake', 'carelon'), S('PostgreSQL', 'ospo', 'cpi'), S('Teradata', 'carelon'), S('Oracle', 'carelon'),
    S('SQL Server', 'carelon'), S('MySQL', 'ms'), S('DuckDB', 'pulselake'), S('MongoDB', 'ms'), S('BigQuery'), S('ChromaDB', 'cogni'),
  ] },
  { label: 'Cloud & DevOps', skills: [
    S('Azure', 'carelon'), S('GCP'), S('Git', 'ospo', 'carelon', 'pulselake', 'rag', 'cogni', 'crew'), S('Jenkins', 'carelon'),
    S('Terraform', 'carelon'), S('GitHub Actions', 'pulselake'), S('Jupyter', 'pcos', 'ms'),
  ] },
  { label: 'ML & AI', skills: [
    S('Scikit-learn', 'pcos', 'ms'), S('Pandas', 'carelon', 'pcos', 'rag', 'ms'), S('NumPy', 'carelon', 'pcos', 'ms'),
    S('XGBoost', 'ms'), S('TensorFlow', 'ms'), S('PyTorch', 'ms'), S('Keras', 'ms'),
    S('Clustering', 'cpi', 'pcos', 'ms'), S('NLP', 'cpi', 'rag'),
  ] },
  { label: 'GenAI & Agents', skills: [
    S('RAG', 'rag', 'cogni'), S('LLM Evaluation', 'cpi', 'rag'), S('LangGraph', 'cogni'), S('LangChain', 'cogni'),
    S('crewAI', 'crew'), S('MCP', 'cogni'), S('Claude / Codex', 'cpi', 'cogni'),
  ] },
  { label: 'Analytics & BI', skills: [
    S('Power BI', 'cpi', 'bwf'), S('Tableau', 'carelon', 'health'), S('Streamlit', 'pulselake', 'rag', 'cogni'),
    S('Statistical Testing', 'cpi', 'pcos', 'ms'), S('A/B Testing', 'ms'), S('QuickSight'), S('Excel', 'ms'),
  ] },
  { label: 'Apps & Serving', skills: [S('Django', 'ospo'), S('FastAPI', 'cogni'), S('Pydantic', 'crew')] },
]

const soft = ['Leadership', 'Problem-solving', 'Communication', 'Collaboration', 'Mentoring']

const level = (n) => (n >= 4 ? 4 : n >= 3 ? 3 : n >= 2 ? 2 : n >= 1 ? 1 : 0)

export default function Skills() {
  const [focus, setFocus] = useState(null) // source id being highlighted
  const [hover, setHover] = useState(null) // skill being hovered

  const total = groups.reduce((a, g) => a + g.skills.length, 0)
  const counts = Object.fromEntries(
    Object.keys(SOURCES).map((k) => [k, groups.reduce((a, g) => a + g.skills.filter((s) => s.used.includes(k)).length, 0)])
  )

  return (
    <section id="skills" className="block block-skills">
      <div className="block-inner">
        <span className="block-label">05 — Skills</span>
        <h2 className="block-title">Technical stack</h2>

        <div className="heat glass-card">
          <div className="heat-top">
            <p className="heat-caption">
              <strong>{total}</strong> tools · shaded by how many roles and projects I've used each one in
            </p>
            <div className="heat-legend" aria-hidden="true">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((l) => <i key={l} className={`heat-sq lv-${l}`} />)}
              <span>More</span>
            </div>
          </div>

          <div className="heat-sources" role="group" aria-label="Highlight skills by where they were used">
            <span className="heat-sources-label">Used at</span>
            {Object.entries(SOURCES).map(([k, v]) => (
              <button
                key={k}
                className={`heat-source ${focus === k ? 'is-on' : ''}`}
                aria-pressed={focus === k}
                onMouseEnter={() => setFocus(k)}
                onMouseLeave={() => setFocus(null)}
                onFocus={() => setFocus(k)}
                onBlur={() => setFocus(null)}
                onClick={() => setFocus(focus === k ? null : k)}
              >
                {v}<span>{counts[k]}</span>
              </button>
            ))}
          </div>

          <div className={`heat-grid ${focus ? 'is-focused' : ''}`}>
            {groups.map((g) => (
              <div key={g.label} className="heat-row">
                <span className="heat-row-label">{g.label}</span>
                <div className="heat-cells">
                  {g.skills.map((s) => {
                    const lit = focus && s.used.includes(focus)
                    return (
                      <span
                        key={s.name}
                        tabIndex={0}
                        className={`heat-cell lv-${level(s.used.length)} ${lit ? 'is-lit' : ''}`}
                        onMouseEnter={() => setHover(s)}
                        onMouseLeave={() => setHover(null)}
                        onFocus={() => setHover(s)}
                        onBlur={() => setHover(null)}
                      >
                        {s.name}
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="heat-status" aria-live="polite">
            {hover ? (
              <>
                <strong>{hover.name}</strong>
                {hover.used.length
                  ? <> · used in {hover.used.map((u) => SOURCES[u]).join(', ')}</>
                  : <> · familiar, not yet in a featured role or project</>}
              </>
            ) : focus ? (
              <><strong>{SOURCES[focus]}</strong> · {counts[focus]} tools highlighted</>
            ) : (
              <span>Hover a tile to see where it was used, or pick a role or project above.</span>
            )}
          </div>

          <div className="heat-soft">
            <span className="heat-row-label">Ways of working</span>
            <span className="heat-soft-list">{soft.join(' · ')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
