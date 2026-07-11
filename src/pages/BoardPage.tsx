import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { CTA } from '../components/CTA';
import { advisors, logos } from '../content/advisors';
import { TRY_EQUA_URL, trackTryEqua } from '../config';

function truncate(text: string, maxWords: number): string {
  const words = text.split(' ');
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '…';
}

export function BoardPage() {
  useEffect(() => {
    document.title = 'Equa Board and Advisors';
  }, []);

  return (
    <>
      <Hero
        overline="The Equa Strategic Collective Advisory Board"
        headline="Guided by leaders who have built and scaled marketing at the highest levels."
        subheadline="Equa's advisors bring operating experience from globally recognized brands, academic institutions, and venture-backed companies."
      />

      <section className="section-band" id="advisors" aria-labelledby="advisors-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-overline">Advisors</span>
            <h2 id="advisors-heading">Deep expertise across every dimension of modern marketing.</h2>
          </div>
          <div className="card-grid cards-three">
            {advisors.map((advisor) => (
              <article key={advisor.name} className="advisor-card">
                <div className="advisor-avatar">
                  <img src={advisor.headshot} alt={advisor.name} loading="lazy" />
                </div>
                <h3 className="advisor-name">{advisor.name}</h3>
                <p className="advisor-title">{advisor.title}</p>
                <p className="advisor-bio">{truncate(advisor.bio, 32)}</p>
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
          <span className="section-overline">Network &amp; affiliations</span>
          <h2 id="network-heading">Connected to the organizations that matter.</h2>
          <p className="section-sub">
            Prior employers, academic institutions, and collaborators connected to Equa's
            advisory network.
          </p>
        </div>
        <div className="logo-strip">
          {logos.map((logo) => (
            <div key={logo.alt} className="logo-item">
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <p className="logo-disclaimer">
          Logos represent prior affiliations, employers, collaborators, and institutions.
        </p>
      </section>

      <CTA
        headline="Ready to see Equa in action?"
        primaryLabel="Try Equa"
        primaryHref={TRY_EQUA_URL}
        onPrimaryClick={() => trackTryEqua('board_cta')}
        secondaryLabel="Meet the founding team"
        secondaryHref="/team"
      />
    </>
  );
}
