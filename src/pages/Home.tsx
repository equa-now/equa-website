export function Home() {
  return (
    <>
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
              <img src="/images/americus.jpeg" alt="Americus Reed" className="founder-photo" />
              <h3>Americus Reed</h3>
              <p>Consumer identity scholar and marketing professor at the Wharton School.</p>
              <a
                href="https://www.linkedin.com/in/americus-reed-ii-85b70154/"
                className="founder-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn →
              </a>
            </article>
            <article className="founder-card">
              <img src="/images/samuel.jpeg" alt="Samuel Botts" className="founder-photo" />
              <h3>Samuel Botts</h3>
              <p>Marketing strategy and growth leader with deep B2B and consumer expertise.</p>
              <a
                href="https://www.linkedin.com/in/samuel-botts-jr/"
                className="founder-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn →
              </a>
            </article>
            <article className="founder-card">
              <img src="/images/jeremiah.jpeg" alt="Jeremiah Marble" className="founder-photo" />
              <h3>Jeremiah Marble</h3>
              <p>AI product leader, technologist, and educator.</p>
              <a
                href="https://www.linkedin.com/in/jeremiahmarble/"
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
    </>
  );
}
