import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';

export function Team() {
  return (
    <>
      <PageHero
        overline="The founders"
        headline="The team behind Equa."
        subheadline="We combine AI systems expertise, academic marketing research, and real-world execution to build tools marketing leaders actually use."
      />

      <section className="section section-band" id="founders" aria-labelledby="founders-heading">
        <div className="section-inner">
          <h2 id="founders-heading" className="sr-only">Founders</h2>
          <div className="card-grid cards-two">

            <article className="founder-card-large">
              <div className="founder-card-photo-wrap">
                {/* Replace /images/jeremiah.jpeg with final asset */}
                <img src="/images/jeremiah.jpeg" alt="Jeremiah Marble" className="founder-photo-large" />
              </div>
              <div className="founder-card-body">
                <p className="founder-role">Co-founder, Product &amp; AI Systems</p>
                <h2 className="founder-name">Jeremiah Marble</h2>
                <p className="founder-bio">
                  Technical AI product leader with a track record at Microsoft and Mozilla. Architected
                  the Windows Insider Program at global scale. Founded and operated ventures across AI,
                  education, marketing, and brand. Focuses on turning marketing strategy into working AI systems.
                </p>
                <a
                  href="https://www.linkedin.com/in/jeremiahmarble/"
                  className="founder-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
              </div>
            </article>

            <article className="founder-card-large">
              <div className="founder-card-photo-wrap">
                {/* Replace /images/americus.jpeg with final asset */}
                <img src="/images/americus.jpeg" alt="Americus Reed II" className="founder-photo-large" />
              </div>
              <div className="founder-card-body">
                <p className="founder-role">Co-founder, Identity Strategy &amp; Research</p>
                <h2 className="founder-name">Americus Reed II</h2>
                <p className="founder-bio">
                  Wharton marketing professor and one of the leading academic experts on identity,
                  branding, and consumer behavior. Brings the depth of identity theory to segmentation,
                  targeting, positioning, and messaging — bridging decades of research and real-world practice.
                </p>
                <a
                  href="https://www.linkedin.com/in/americus-reed-ii-85b70154/"
                  className="founder-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className="section" id="why-team" aria-labelledby="why-heading">
        <div className="section-header">
          <p className="section-overline">Why this team</p>
          <h2 id="why-heading">Three things most marketing tools lack.</h2>
        </div>
        <div className="card-grid cards-three">
          <article className="pillar-card">
            <div className="pillar-num">01</div>
            <h3>Research-backed strategy</h3>
            <p>
              Equa's approach is grounded in decades of academic research on identity, behavior,
              and what actually drives customer decisions.
            </p>
          </article>
          <article className="pillar-card">
            <div className="pillar-num">02</div>
            <h3>AI-native product building</h3>
            <p>
              We build tools that translate strategic frameworks into AI-powered workflows —
              not dashboards or generic generative outputs.
            </p>
          </article>
          <article className="pillar-card">
            <div className="pillar-num">03</div>
            <h3>Real-world marketing execution</h3>
            <p>
              We've worked at scale across enterprise, growth-stage, and brand contexts.
              We know what breaks between strategy and execution.
            </p>
          </article>
        </div>
      </section>

      <CTASection
        headline="See how Equa works."
        primaryLabel="Explore the solution"
        primaryHref="/solution"
        secondaryLabel="Book a working session"
        secondaryHref="mailto:hello@equa.now"
      />
    </>
  );
}
