export default function Navbar({ menuOpen, setMenuOpen, scrollTo, theme, setTheme }) {
  const links = [
    { id: 'activities', label: 'Activities' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home') }} className="nav-logo">
          Namratha
        </a>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollTo(link.id) }}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-menu-resume">
            <a
              href="/assets/Namratha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume-btn"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>
          <li className="nav-menu-theme">
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.2" />
                <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" />
              </svg>
            </button>
          </li>
        </ul>
        <button
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
