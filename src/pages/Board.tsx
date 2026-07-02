import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';

const advisors = [
  { name: 'Advisor Name', title: 'Marketing Leadership' },
  { name: 'Advisor Name', title: 'AI & Product Strategy' },
  { name: 'Advisor Name', title: 'Research & Academic Partnerships' },
  { name: 'Advisor Name', title: 'Go-to-Market Strategy' },
  { name: 'Advisor Name', title: 'Brand & Customer Experience' },
  { name: 'Advisor Name', title: 'Advisor Name' },
];

// Replace each entry with { src: '/images/logo-name.png', alt: 'Organization Name' }
const placeholderLogos = Array(6).fill(null);

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
            {advisors.map((advisor, i) => (
              <article key={i} className="advisor-card">
                <div className="advisor-avatar" aria-hidden="true">
                  {/* Replace with advisor photo: <img src="..." alt={advisor.name} /> */}
                </div>
                <h3 className="advisor-name">{advisor.name}</h3>
                <p className="advisor-title">{advisor.title}</p>
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
          {placeholderLogos.map((_, i) => (
            <div key={i} className="logo-item" aria-label="Logo placeholder">
              {/* Replace with: <img src="/images/logo-name.png" alt="Organization" /> */}
              <span className="logo-placeholder">Logo</span>
            </div>
          ))}
        </div>
        <p className="logo-disclaimer">
          Logos represent prior affiliations, collaborators, advisors, or institutions connected
          to the Equa network. Final list to be updated.
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
