function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="brand">Equa</div>
        <nav aria-label="Primary navigation" className="site-nav">
          <a href="#why">Why Equa</a>
          <a href="#founders">Founders</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Strategic marketing powered by identity and AI</p>
            <h1>Better Marketing Decisions Through Identity and AI</h1>
            <p className="hero-description">
              Equa helps marketing leaders transform consumer understanding into sharper segmentation,
              targeting, positioning, and messaging.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">
                Schedule a Conversation
              </a>
              <a href="#why" className="button button-secondary">
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section className="section section-alt" aria-labelledby="problem-heading">
          <div className="section-header">
            <p className="section-overline">Problem</p>
            <h2 id="problem-heading">Most Marketing Teams Have Data. Few Have Clarity.</h2>
          </div>
          <div className="card-grid cards-three">
            <article className="info-card">
              <h3>Too many dashboards</h3>
              <p>Teams are overwhelmed by disconnected metrics that do not translate into strategic choices.</p>
            </article>
            <article className="info-card">
              <h3>Fragmented customer understanding</h3>
              <p>Insights are siloed across channels, preventing a unified view of the people behind the data.</p>
            </article>
            <article className="info-card">
              <h3>AI tools without strategic direction</h3>
              <p>Generative models can create output, but marketers need grounded frameworks to use it effectively.</p>
            </article>
          </div>
        </section>

        <section className="section" aria-labelledby="solution-heading">
          <div className="section-header">
            <p className="section-overline">Solution</p>
            <h2 id="solution-heading">The Equa Approach</h2>
          </div>
          <div className="card-grid cards-four">
            <article className="feature-card">
              <h3>Segmentation</h3>
              <p>Understand meaningful customer differences.</p>
            </article>
            <article className="feature-card">
              <h3>Targeting</h3>
              <p>Prioritize the audiences with the greatest opportunity.</p>
            </article>
            <article className="feature-card">
              <h3>Positioning</h3>
              <p>Develop positioning strategies that resonate.</p>
            </article>
            <article className="feature-card">
              <h3>Messaging</h3>
              <p>Generate messages tailored to specific audiences.</p>
            </article>
          </div>
        </section>

        <section className="section section-alt" id="why" aria-labelledby="why-heading">
          <div className="section-header">
            <p className="section-overline">Why Equa</p>
            <h2 id="why-heading">Why Equa</h2>
          </div>
          <div className="three-column-grid">
            <article className="value-card">
              <h3>Consumer Identity</h3>
              <p>Built on research into how people define themselves and make decisions.</p>
            </article>
            <article className="value-card">
              <h3>AI-Powered Insight</h3>
              <p>Use AI to accelerate analysis and exploration.</p>
            </article>
            <article className="value-card">
              <h3>Human Judgment</h3>
              <p>Keep marketers in control of strategic decisions.</p>
            </article>
          </div>
        </section>

        <section className="section" id="founders" aria-labelledby="founders-heading">
          <div className="section-header">
            <p className="section-overline">Founders</p>
            <h2 id="founders-heading">Founded by Experts in Identity, Marketing, and AI</h2>
          </div>
          <div className="card-grid cards-three">
            <article className="founder-card">
              <h3>Americus Reed</h3>
              <p>Consumer identity scholar and marketing expert.</p>
            </article>
            <article className="founder-card">
              <h3>Samuel Botts</h3>
              <p>Marketing strategy and growth leader.</p>
            </article>
            <article className="founder-card">
              <h3>Jeremiah Marble</h3>
              <p>AI product leader, technologist, and educator.</p>
            </article>
          </div>
        </section>

        <section className="final-cta" id="contact" aria-labelledby="contact-heading">
          <div className="final-cta-copy">
            <h2 id="contact-heading">Ready to Make Better Marketing Decisions?</h2>
            <a href="mailto:hello@equa.com" className="button button-primary">
              Contact Equa
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Equa</strong>
        </div>
        <p>AI for Marketing Strategy</p>
        <p>© 2026 Equa</p>
      </footer>
    </div>
  );
}

export default App;
