function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="brand">Equa</div>
        <nav aria-label="Primary navigation" className="site-nav">
          <a href="#what-we-help-with">What we do</a>
          <a href="#founders">Team</a>
          <a href="mailto:hello@equa.now">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero-section">
          <div className="hero-copy">
            <h1>AI strategy tools for marketing leaders.</h1>
            <p className="hero-description">
              Equa helps CMOs move from fuzzy customer understanding to clearer segmentation,
              targeting, positioning, and messaging.
            </p>
            <div className="hero-actions">
              <a href="mailto:hello@equa.now" className="button button-primary">
                Request a conversation
              </a>
            </div>
          </div>
        </section>

        <section className="section section-band" id="what-we-help-with" aria-labelledby="what-heading">
          <div className="section-inner">
            <div className="section-header">
              <p className="section-overline">What we help with</p>
              <h2 id="what-heading">Marketing leaders do not need more generic AI output. They need sharper decisions.</h2>
            </div>
            <div className="card-grid cards-four">
              <article className="feature-card">
                <h3>Segmentation</h3>
                <p>Identify meaningful customer groups.</p>
              </article>
              <article className="feature-card">
                <h3>Targeting</h3>
                <p>Prioritize where to focus.</p>
              </article>
              <article className="feature-card">
                <h3>Positioning</h3>
                <p>Clarify why you win.</p>
              </article>
              <article className="feature-card">
                <h3>Messaging</h3>
                <p>Turn strategy into market-ready language.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="who" aria-labelledby="who-heading">
          <div className="section-header">
            <p className="section-overline">Who it's for</p>
            <h2 id="who-heading">CMOs, founders, and marketing leaders.</h2>
          </div>
          <p className="who-description">
            For growth-stage and mid-market companies who need better customer strategy before
            scaling campaigns.
          </p>
        </section>

        <section className="section section-band" id="founders" aria-labelledby="founders-heading">
          <div className="section-inner">
            <div className="section-header">
              <p className="section-overline">Built by</p>
              <h2 id="founders-heading">Founded by experts in identity, marketing, and AI.</h2>
            </div>
            <div className="card-grid cards-three">
              <article className="founder-card">
                <h3>Americus Reed</h3>
                <p>Consumer identity scholar and marketing professor at the Wharton School.</p>
                <a
                  href="https://www.linkedin.com/in/placeholder-americus-reed"
                  className="founder-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
              </article>
              <article className="founder-card">
                <h3>Samuel Botts</h3>
                <p>Marketing strategy and growth leader with deep B2B and consumer expertise.</p>
                <a
                  href="https://www.linkedin.com/in/placeholder-samuel-botts"
                  className="founder-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
              </article>
              <article className="founder-card">
                <h3>Jeremiah Marble</h3>
                <p>AI product leader, technologist, and educator.</p>
                <a
                  href="https://www.linkedin.com/in/placeholder-jeremiah-marble"
                  className="founder-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">Equa</div>
        <div className="footer-links">
          <a href="mailto:hello@equa.now">hello@equa.now</a>
          <a
            href="https://www.linkedin.com/company/placeholder-equa"
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

export default App;
