import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            Consumer Identity · AI Intelligence
          </p>
          <h1>Smarter marketing decisions start here.</h1>
          <p className="hero-description">
            Equa helps marketing leaders move from scattered assumptions to sharper
            segmentation, targeting, positioning, and messaging — grounded in identity
            science and powered by AI.
          </p>
          <div className="hero-actions">
            <a href="mailto:hello@equa.now" className="button button-primary">
              Request a conversation
            </a>
            <Link to="/solution" className="button button-secondary">
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* STPM overview */}
      <section className="section-band" id="what-we-help-with" aria-labelledby="what-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-overline">The Equa method</span>
            <h2 id="what-heading">One structured path from research to message.</h2>
            <p className="section-sub">
              Marketing leaders don't need more data. They need a clearer process for turning
              what they know about customers into decisions that hold.
            </p>
          </div>
          <div className="card-grid cards-four">
            <article className="feature-card">
              <div className="feature-card-step">01</div>
              <h3>Segmentation</h3>
              <p>Map the market using identity-driven customer groups — not just demographics.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-step">02</div>
              <h3>Targeting</h3>
              <p>Prioritize the segments with the strongest fit, urgency, and business value.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-step">03</div>
              <h3>Positioning</h3>
              <p>Find the angle that is both strategically sound and emotionally resonant.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card-step">04</div>
              <h3>Messaging</h3>
              <p>Translate strategy into language that Sales actually uses.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section" id="who" aria-labelledby="who-heading">
        <div className="section-header">
          <span className="section-overline">Who it's for</span>
          <h2 id="who-heading">Built for the leaders responsible for growth.</h2>
          <p className="section-sub">
            For growth-stage and mid-market companies who need clearer customer strategy before
            scaling campaigns.
          </p>
        </div>
        <div className="who-row" role="list">
          {['CMOs', 'VPs of Marketing', 'Product Marketing Leaders', 'GTM & Growth Teams', 'Chief Strategy Officers'].map((title) => (
            <span key={title} className="who-pill" role="listitem">{title}</span>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="section-band" id="founders" aria-labelledby="founders-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-overline">Founded by</span>
            <h2 id="founders-heading">Identity science meets AI execution.</h2>
            <p className="section-sub">
              Equa combines decades of academic marketing research with real-world AI product
              building.
            </p>
          </div>
          <div className="card-grid cards-two">
            <article className="founder-card">
              <img src="/images/americus.jpeg" alt="Americus Reed II" className="founder-photo" />
              <p className="founder-role-label">Co-founder, Identity Strategy &amp; Research</p>
              <h3>Americus Reed II</h3>
              <p>
                Wharton marketing professor and one of the world's foremost academic experts on
                identity, branding, and consumer behavior.
              </p>
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
              <img src="/images/jeremiah.jpeg" alt="Jeremiah Marble" className="founder-photo" />
              <p className="founder-role-label">Co-founder, Product &amp; AI Systems</p>
              <h3>Jeremiah Marble</h3>
              <p>
                AI product leader with a track record at Microsoft and Mozilla. Focused on turning
                marketing strategy into working AI systems.
              </p>
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
