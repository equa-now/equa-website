import { Link, NavLink } from 'react-router-dom';
import { TRY_EQUA_URL } from '../config';

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="brand">
          <Link to="/" aria-label="Equa home">
            <img src="/images/equa-logo-primary.png" alt="Equa" className="brand-logo" />
          </Link>
        </div>

        <nav aria-label="Primary navigation" className="site-nav">
          <div className="site-nav-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-active' : undefined}>
              Home
            </NavLink>
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
          <a
            href={TRY_EQUA_URL}
            className="nav-cta"
            onClick={() => {
              if (typeof gtag === 'function') gtag('event', 'try_equa_click', { section: 'nav' });
            }}
          >
            Try Equa
          </a>
        </nav>
      </div>
    </header>
  );
}
