import { Link, NavLink } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="site-header-inner">
          <div className="brand">
            <Link to="/" aria-label="Equa home">
              <img src="/images/equa-logo-primary.png" alt="Equa" className="brand-logo" />
            </Link>
          </div>

          <nav aria-label="Primary navigation" className="site-nav">
            <div className="site-nav-links">
              <NavLink to="/solution" className={({ isActive }) => isActive ? 'nav-active' : undefined}>
                Solution
              </NavLink>
              <NavLink to="/team" className={({ isActive }) => isActive ? 'nav-active' : undefined}>
                Team
              </NavLink>
              <NavLink to="/board" className={({ isActive }) => isActive ? 'nav-active' : undefined}>
                Board
              </NavLink>
            </div>
            <a href="mailto:hello@equa.now" className="nav-cta">
              Request a conversation
            </a>
          </nav>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <img src="/images/equa-logo-primary.png" alt="Equa" className="footer-logo" />
          <div className="footer-links">
            <a href="mailto:hello@equa.now">hello@equa.now</a>
            <a
              href="https://www.linkedin.com/company/equa-now"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <p className="footer-copy">© 2026 Equa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
