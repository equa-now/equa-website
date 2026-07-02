import { Link, NavLink } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="brand">
          <Link to="/">
            <img src="/images/equa-logo-primary.png" alt="Equa" className="brand-logo" />
          </Link>
        </div>
        <nav aria-label="Primary navigation" className="site-nav">
          <NavLink to="/solution" className={({ isActive }) => isActive ? 'nav-active' : undefined}>
            Solution
          </NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? 'nav-active' : undefined}>
            Team
          </NavLink>
          <NavLink to="/board" className={({ isActive }) => isActive ? 'nav-active' : undefined}>
            Board
          </NavLink>
          <a href="mailto:hello@equa.now">Contact</a>
        </nav>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="footer-brand">Equa</div>
        <div className="footer-links">
          <a href="mailto:hello@equa.now">hello@equa.now</a>
          <a
            href="https://www.linkedin.com/company/equa-now"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="#privacy">Privacy</a>
        </div>
        <p className="footer-copy">© 2026 Equa. All rights reserved.</p>
      </footer>
    </div>
  );
}
