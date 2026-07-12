import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TRY_EQUA_URL } from '../config';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="brand">
          <Link to="/" aria-label="Equa home" onClick={close}>
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

          <button
            className="mobile-menu-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          <NavLink to="/" end onClick={close} className={({ isActive }) => isActive ? 'nav-active' : undefined}>
            Home
          </NavLink>
          <NavLink to="/solution" onClick={close} className={({ isActive }) => isActive ? 'nav-active' : undefined}>
            Solution
          </NavLink>
          <NavLink to="/team" onClick={close} className={({ isActive }) => isActive ? 'nav-active' : undefined}>
            Team
          </NavLink>
          <NavLink to="/board" onClick={close} className={({ isActive }) => isActive ? 'nav-active' : undefined}>
            Board
          </NavLink>
          <a
            href={TRY_EQUA_URL}
            className="mobile-menu-cta"
            onClick={() => {
              close();
              if (typeof gtag === 'function') gtag('event', 'try_equa_click', { section: 'mobile-nav' });
            }}
          >
            Try Equa
          </a>
        </div>
      )}
    </header>
  );
}
