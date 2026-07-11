import { useEffect } from 'react';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { TRY_EQUA_URL, trackTryEqua } from '../config';

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: 'Research-backed strategy',
    description:
      "Equa's approach is grounded in decades of academic research on identity, behavior, and what actually drives customer decisions — not intuition or trend-chasing.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M17.5 14v6M14.5 17h6" />
      </svg>
    ),
    title: 'AI-native product building',
    description:
      'We build tools that translate strategic frameworks into AI-powered workflows — not dashboards or generic generative outputs that require interpretation.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 12h4M18 12h4M12 2v4M12 18v4" />
        <circle cx="12" cy="12" r="5" />
        <path d="M8.5 8.5l2 2M13.5 13.5l2 2M8.5 15.5l2-2M13.5 10.5l2-2" />
      </svg>
    ),
    title: 'Real-world execution experience',
    description:
      'We have worked at scale across enterprise, growth-stage, and brand contexts. We know exactly where strategy breaks down before it reaches market.',
  },
];

export function Team() {
  useEffect(() => {
    document.title = 'Equa Team | Americus Reed and Jeremiah Marble';
  }, []);

  return (
    <>
      <PageHero
        overline="The founders"
        headline="Identity science meets AI execution."
        subheadline="Equa is built by people who have spent careers at the intersection of marketing strategy, academic research, and AI product development."
      />

      {/* Founder cards */}
      <section className="section-band" id="founders" aria-labelledby="founders-heading">
        <div className="section-inner">
          <h2 id="founders-heading" className="sr-only">Founders</h2>
          <div className="card-grid cards-two">

            <article className="founder-card-large">
              <div className="founder-card-photo-wrap">
                <img src="/images/jeremiah.jpeg" alt="Jeremiah Marble" className="founder-photo-large" />
              </div>
              <div className="founder-card-body">
                <p className="founder-role">Co-founder · Product &amp; AI Systems</p>
                <h3 className="founder-name">Jeremiah Marble</h3>
                <p className="founder-bio">
                  Technical AI product leader with a track record at Microsoft and Mozilla.
                  Architected the Windows Insider Program at global scale. Founded and operated
                  ventures across AI, education, and brand. Focused on turning marketing strategy
                  into working AI systems.
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
                <img src="/images/americus.jpeg" alt="Americus Reed II" className="founder-photo-large" />
              </div>
              <div className="founder-card-body">
                <p className="founder-role">Co-founder · Identity Strategy &amp; Research</p>
                <h3 className="founder-name">Americus Reed II</h3>
                <p className="founder-bio">
                  Wharton marketing professor and one of the world's foremost academic experts on
                  consumer identity, branding, and behavior. Bridges decades of research with
                  real-world marketing practice across segmentation, targeting, positioning,
                  and messaging.
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

      {/* Pillars */}
      <section className="section" id="why-team" aria-labelledby="why-heading">
        <div className="section-header">
          <span className="section-overline">Why this team</span>
          <h2 id="why-heading">Three things most marketing tools lack.</h2>
        </div>
        <div className="card-grid cards-three">
          {pillars.map((p) => (
            <article key={p.title} className="pillar-card">
              <div className="icon-circle">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        headline="See how Equa turns strategy into sharper decisions."
        primaryLabel="Try Equa"
        primaryHref={TRY_EQUA_URL}
        onPrimaryClick={() => trackTryEqua('team_cta')}
        secondaryLabel="Explore the solution"
        secondaryHref="/solution"
      />
    </>
  );
}
