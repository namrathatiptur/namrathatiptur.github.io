export default function About() {
  const education = [
    { date: 'Dec 2026', title: 'Master of Science, Information Systems', school: 'Syracuse University', focus: 'GPA 4.0/4.0 · ML, Data Engineering, Data Analytics, BI' },
    { date: 'Aug 2023', title: 'B.Tech, Computer Science & Engineering', school: 'Reva University', focus: 'GPA 3.5/4.0' },
  ]

  return (
    <section id="about" className="block block-about">
      <div className="block-inner">
        <span className="block-label">01 — About</span>
        <div className="about-layout">
          <div className="about-text">
            <h2 className="block-title">Building with data</h2>
            <div className="about-bio">
              <p>I'm a data engineer with three years of industry experience, finishing an MS in Information Systems at Syracuse University with a 4.0 GPA. I design pipelines that move data reliably at scale and turn it into decisions.</p>
              <p>At <strong>Carelon Global Solutions (Elevance Health)</strong> I migrated legacy Teradata and Hadoop workloads to AWS and Snowflake, ran 35+ pipelines ingesting 2M+ healthcare records a day, and moved hospital feeds from next-day batch to near real time. Before that, at <strong>Belgian Waffle Factory</strong>, I built the AWS Airflow and Redshift platform behind multi-channel sales reporting.</p>
              <p>Today I'm a Software Developer at <strong>Syracuse University's Open Source Program Office</strong>, engineering the TeachOrange platform, after a summer at the <strong>Centre for Public Impact</strong> automating survey reporting for government and philanthropic partners.</p>
              <p>Graduating December 2026 and open to full-time Data Engineer, Data Scientist, AI Engineer and Data Analyst roles from January 2027.</p>
            </div>
            <div className="about-education">
              <h3 className="about-edu-title">Education</h3>
              <div className="about-edu-list">
                {education.map((e, i) => (
                  <div key={i} className="about-edu-item glass-card">
                    <span className="about-edu-date">{e.date}</span>
                    <h4>{e.title}</h4>
                    <p>{e.school} · {e.focus}</p>
                  </div>
                ))}
              </div>
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
