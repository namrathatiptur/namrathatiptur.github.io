import { useState } from 'react'

export default function Experience() {
  const CompanyLogo = ({ job }) => {
    const [failed, setFailed] = useState(false)
    if (failed) return null
    return (
      <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="exp-card-logo" aria-label={`${job.company} website`}>
        <img src={job.logo} alt={job.company} onError={() => setFailed(true)} />
      </a>
    )
  }
  const jobs = [
    {
      date: 'Aug 2023 – Aug 2024',
      title: 'Associate Software Engineer',
      subtitle: 'Data Engineering & Analytics',
      company: 'Carelon Global Solutions',
      companyUrl: 'https://www.carelonglobal.com',
      logo: 'https://www.google.com/s2/favicons?domain=carelonglobal.com&sz=128',
      location: 'Bangalore, India',
      bullets: [
        'Architected ETL pipelines (Informatica, Python) integrating 20+ sources, processing 1TB+ daily with 99.5% accuracy',
        'Reduced processing time 40% via parallel processing and SQL optimization',
        'Built 15+ automated reports, saving 25 hrs/week',
        'Delivered Tableau dashboards supporting 10+ strategic decisions',
      ],
    },
    {
      date: 'Sep 2021 – Jul 2023',
      title: 'Data Engineer',
      subtitle: null,
      company: 'Belgian Waffle Factory',
      companyUrl: 'https://www.belgianwafflefactory.com',
      logo: 'https://www.google.com/s2/favicons?domain=belgianwafflefactory.com&sz=128',
      location: 'Bangalore, India',
      bullets: [
        'Built AWS-native Airflow pipelines (S3, Redshift) processing 500K events/day from 5+ sources',
        'Developed Python and SQL data transforms for unified sales model in Amazon Redshift',
        'Created Power BI dashboards tracking sales, inventory, and product KPIs across store regions',
        'Integrated POS and delivery aggregator feeds into centralized Redshift data warehouse',
      ],
    },
  ]

  return (
    <section id="experience" className="block block-experience">
      <div className="block-inner">
        <span className="block-label">02 — Experience</span>
        <h2 className="block-title">Where I've built</h2>
        <div className="exp-cards">
          {jobs.map((job, i) => (
            <div key={i} className="exp-card glass-card">
              <div className="exp-card-header">
                <CompanyLogo job={job} />
                <span className="exp-card-date">{job.date}</span>
                <div>
                  <h3>{job.title}{job.subtitle && <span className="exp-card-subtitle"> · {job.subtitle}</span>}</h3>
                  <p className="exp-card-company">{job.company} · {job.location}</p>
                </div>
              </div>
              <ul className="exp-card-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
