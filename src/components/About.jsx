export default function About() {
  const education = [
    {
      date: 'Dec 2026', degree: 'MS, Information Systems', school: 'Syracuse University', place: 'Syracuse, NY',
      logo: 'https://www.google.com/s2/favicons?domain=syr.edu&sz=128', gpa: 4.0,
      focus: ['Machine Learning', 'Data Engineering', 'Data Analytics', 'BI'],
    },
    {
      date: 'Aug 2023', degree: 'B.Tech, Computer Science & Engineering', school: 'Reva University', place: 'Bangalore, India',
      logo: 'https://www.google.com/s2/favicons?domain=reva.edu.in&sz=128', gpa: 3.5,
      focus: [],
    },
  ]

  const Ring = ({ gpa }) => {
    const r = 22, c = 2 * Math.PI * r
    return (
      <svg className="edu-ring" viewBox="0 0 56 56" role="img" aria-label={`GPA ${gpa.toFixed(1)} out of 4.0`}>
        <circle cx="28" cy="28" r={r} className="edu-ring-bg" />
        <circle cx="28" cy="28" r={r} className="edu-ring-fg" strokeDasharray={c} strokeDashoffset={c * (1 - gpa / 4)} />
        <text x="28" y="27" textAnchor="middle" className="edu-ring-val">{gpa.toFixed(1)}</text>
        <text x="28" y="37" textAnchor="middle" className="edu-ring-sub">GPA</text>
      </svg>
    )
  }

  return (
    <section id="about" className="block block-about">
      <div className="block-inner">
        <span className="block-label">01 — About</span>
        <div className="about-layout">
          <div className="about-text">
            <h2 className="block-title">Building with data</h2>
            <div className="about-bio">
              <p>I'm a data engineer with three years of industry experience, finishing an MS in Information Systems at Syracuse University. I design pipelines that move data reliably at scale and turn it into decisions.</p>
              <p>At <strong>Carelon Global Solutions (Elevance Health)</strong> I migrated legacy Teradata and Hadoop workloads to AWS and Snowflake, ran 35+ pipelines ingesting 2M+ healthcare records a day, and moved hospital feeds from next-day batch to near real time. Before that, at <strong>Belgian Waffle Factory</strong>, I built the AWS Airflow and Redshift platform behind multi-channel sales reporting.</p>
              <p>Today I'm a Software Developer at <strong>Syracuse University's Open Source Program Office</strong>, engineering the TeachOrange platform, after a summer at the <strong>Centre for Public Impact</strong> automating survey reporting for government and philanthropic partners.</p>
            </div>
            <div className="about-education">
              <h3 className="about-edu-title">Education</h3>
              <ol className="edu-path">
                {education.map((e) => (
                  <li key={e.school} className="edu-stop glass-card">
                    <span className="edu-pin" aria-hidden="true" />
                    <img className="edu-logo" src={e.logo} alt="" onError={(ev) => { ev.currentTarget.style.visibility = 'hidden' }} />
                    <div className="edu-body">
                      <span className="edu-date">Graduat{e.date === 'Dec 2026' ? 'ing' : 'ed'} {e.date} · {e.place}</span>
                      <h4>{e.degree}</h4>
                      <p className="edu-school">{e.school}</p>
                      <div className="edu-focus">{e.focus.map((f) => <span key={f}>{f}</span>)}</div>
                    </div>
                    <Ring gpa={e.gpa} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="about-image-wrap">
            <img src="/assets/namratha-profile.jpg" alt="Namratha Tiptur Manjunath" />
          </div>
        </div>
      </div>
    </section>
  )
}
