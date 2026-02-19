export default function Skills() {
  const groups = [
    { label: 'Programming', tags: ['Python', 'Java', 'SQL', 'R'] },
    { label: 'ML & AI', tags: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'NumPy', 'Pandas', 'XGBoost'] },
    { label: 'Analytics', tags: ['Tableau', 'Power BI', 'QuickSight', 'Excel', 'Jupyter'] },
    { label: 'Data & Cloud', tags: ['MySQL', 'MongoDB', 'Informatica', 'AWS', 'GCP', 'Git'] },
    { label: 'Soft', tags: ['Leadership', 'Problem-solving', 'Communication', 'Collaboration'] },
  ]

  return (
    <section id="skills" className="block block-skills">
      <div className="block-inner">
        <span className="block-label">05 — Skills</span>
        <h2 className="block-title">Technical stack</h2>
        <div className="skills-flow">
          {groups.map((g, i) => (
            <div key={i} className="skills-group">
              <span className="skills-group-label">{g.label}</span>
              <div className="skills-tags">
                {g.tags.map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
