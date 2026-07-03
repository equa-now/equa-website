import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { advisors, logos } from '../content/advisors';

export function Board() {
  return (
    <>
      <PageHero
        overline="Advisory board"
        headline="Built with guidance from leaders across marketing, technology, and research."
        subheadline="Equa is shaped by experienced operators, advisors, and institutional perspectives who've built and scaled marketing at the highest levels."
      />

      <section className="section section-band" id="advisors" aria-labelledby="advisors-heading">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-overline">Advisors</p>
            <h2 id="advisors-heading">Experienced across every dimension of modern marketing.</h2>
          </div>
          <div className="card-grid cards-three">
            {advisors.map((advisor) => (
              <article key={advisor.name} className="advisor-card">
                <div className="advisor-avatar">
                  <img src={advisor.headshot} alt={advisor.name} loading="lazy" />
                </div>
                <h3 className="advisor-name">{advisor.name}</h3>
                <p className="advisor-title">{advisor.title}</p>
                <p className="advisor-bio">{advisor.bio}</p>
                <div className="advisor-tags" aria-label="Areas of expertise">
                  {advisor.tags.map((tag) => (
                    <span key={tag} className="advisor-tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="network" aria-labelledby="network-heading">
        <div className="section-header">
          <p className="section-overline">Network &amp; affiliations</p>
          <h2 id="network-heading">Connected to the organizations that matter.</h2>
        </div>
        <div className="logo-strip">
          {logos.map((logo) => (
            <div key={logo.alt} className="logo-item">
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <p className="logo-disclaimer">
          Logos represent prior affiliations, employers, collaborators, and institutions connected
          to Equa's advisory network.
        </p>
      </section>

      <CTASection
        headline="Ready to see Equa in action?"
        primaryLabel="Book a working session"
        primaryHref="mailto:hello@equa.now"
        secondaryLabel="Meet the team"
        secondaryHref="/team"
      />
    </>
  );
}
