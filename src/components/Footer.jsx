export default function Footer({ scrollTo }) {
  const links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <footer className="footer">
      <div className="footer-seal" aria-hidden="true" />
      <div className="footer-inner">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo?.('home') }} className="footer-logo">
          Namratha
        </a>
        <nav className="footer-nav">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollTo?.(link.id) }}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-socials">
          <a href="mailto:namrathatm.ms@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/namrathatm/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/namrathatiptur" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="footer-copyright">&copy; 2026 Namratha Tiptur Manjunath</p>
      </div>
    </footer>
  )
}
