export default function About() {
  const education = [
    { date: 'Dec 2026', title: 'Master of Science, Information Systems', school: 'Syracuse University', focus: 'GPA 4.0/4.0 · ML, Data Analytics, BI' },
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
              <p>I'm a data engineer and ML enthusiast pursuing my Master's at Syracuse University. I work with healthcare data, build ETL pipelines, and design machine learning models.</p>
              <p>Before grad school, I spent a year as a data engineer at <strong>Carelon Global Solutions</strong> in Bangalore, processing terabytes of data daily. I love the problem-solving aspect—optimizing queries, building pipelines, training models—and figuring out how to make things work better.</p>
              <p>I'm looking for opportunities to apply what I've learned through internships, co-ops, or collaborative projects.</p>
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
            <img src="/assets/IMG_2440-removebg-preview.png" alt="Namratha Tiptur Manjunath" />
          </div>
        </div>
      </div>
    </section>
  )
}
