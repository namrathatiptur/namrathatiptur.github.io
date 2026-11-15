export default function Contact() {
  return (
    <section id="contact" className="block block-contact">
      <div className="block-inner">
        <span className="block-label">07 — Contact</span>
        <div className="contact-card glass-card">
          <div className="contact-copy">
            <h2 className="contact-title">Let's work together</h2>
            <p className="block-contact-desc">Available full-time from January 2027 for data engineering, data science, AI and analytics roles.</p>
          </div>
          <div className="contact-actions">
            <a href="mailto:namrathatm.ms@gmail.com" className="contact-cta">
              <i className="fas fa-envelope"></i> Email me
            </a>
            <a className="contact-icon" href="https://www.linkedin.com/in/namrathatm/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="contact-icon" href="https://github.com/namrathatiptur" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
