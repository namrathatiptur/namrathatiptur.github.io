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
              href="/resume"
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
              className={`theme-switch ${theme === 'dark' ? 'theme-switch-dark' : 'theme-switch-light'}`}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              role="switch"
              aria-checked={theme === 'dark'}
            >
              <span className="theme-switch-track">
                <span className="theme-switch-thumb" />
                <span className="theme-switch-icon theme-switch-sun">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                </span>
                <span className="theme-switch-icon theme-switch-moon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </span>
              </span>
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
