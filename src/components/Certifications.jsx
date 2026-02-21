export default function Certifications() {
  const certs = [
    { name: 'Google Data Analytics Professional Certificate' },
    { name: 'Data Analytics & BI with Advanced Excel' },
  ]

  return (
    <section id="certifications" className="block block-certs">
      <div className="block-inner">
        <span className="block-label">06 — Certifications</span>
        <h2 className="block-title">Credentials</h2>
        <div className="certs-row">
          {certs.map((c, i) => (
            <div key={i} className="cert-badge glass-card">
              <i className="fas fa-award cert-badge-icon"></i>
              <h4>{c.name}</h4>
              {c.status && <span className="cert-badge-status">{c.status}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
