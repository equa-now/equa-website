import { Link } from 'react-router-dom';
import { CONTACT_URL } from '../config';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <Link to="/" aria-label="Equa home">
          <img src="/images/equa-logo-primary.png" alt="Equa" className="footer-logo" />
        </Link>
        <div className="footer-links">
          <a href={CONTACT_URL}>hello@equa.now</a>
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
  );
}
