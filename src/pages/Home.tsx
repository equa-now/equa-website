import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { logos } from '../content/advisors';
import { TRY_EQUA_URL, trackTryEqua } from '../config';

const stpmSteps = [
  {
    label: 'Segmentation',
    text: 'Map your market using identity-driven customer segments.',
  },
  {
    label: 'Targeting',
    text: 'Prioritize segments with the strongest fit and business value.',
  },
  {
    label: 'Positioning',
    text: 'Find the angle that is strategically sound and emotionally resonant.',
  },
  {
    label: 'Messaging',
    text: 'Translate strategy into messages teams can test, use, and refine.',
  },
];

const CREDIBILITY_LOGO_ALTS = [
  'Wharton School',
  'Nike',
  'Coca-Cola',
  'Meta',
  'BCG',
  'JetBlue',
  'LVMH',
  'Intel',
];

const credibilityLogos = logos.filter((l) => CREDIBILITY_LOGO_ALTS.includes(l.alt));

export function Home() {
  useEffect(() => {
    document.title = 'Equa | AI Strategy Tools for Marketing Leaders';
  }, []);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            AI-powered marketing strategy
          </p>
          <h1>Make better marketing decisions with AI.</h1>
          <p className="hero-description">
            Equa helps marketing leaders improve segmentation, targeting, positioning, and messaging
            using AI and identity-based strategy.
          </p>
          <div className="hero-actions">
            <a
              href={TRY_EQUA_URL}
              className="button button-primary"
              onClick={() => trackTryEqua('hero')}
            >
              Try Equa
            </a>
            <Link to="/solution" className="button button-secondary">
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* ── What Equa Does ───────────────────────────────────────────── */}
      <section className="section-band" id="what-equa-does" aria-labelledby="stpm-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-overline">How it works</span>
            <h2 id="stpm-heading">Four connected steps. One consistent methodology.</h2>
          </div>
          <div className="stpm-grid">
            {stpmSteps.map((s) => (
              <div key={s.label} className="stpm-item">
                <h3 className="stpm-label">{s.label}</h3>
                <p className="stpm-text">{s.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/solution" className="section-sub-link">
              See the full workflow →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Credibility ──────────────────────────────────────────────── */}
      <section className="section" id="credibility" aria-labelledby="credibility-heading">
        <div className="section-header">
          <h2 id="credibility-heading">Built on research. Guided by experience.</h2>
          <p className="section-sub">
            Founded by a Wharton identity scientist and an AI product builder. Advised by CMOs,
            researchers, and leaders from globally recognized organizations.{' '}
            <Link to="/board" className="section-sub-link">
              Meet the board →
            </Link>
          </p>
        </div>

        <div className="logo-strip credibility-logo-strip">
          {credibilityLogos.map((logo) => (
            <div key={logo.alt} className="logo-item">
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <p className="logo-disclaimer">
          Prior affiliations and institutions of Equa's advisory network.
        </p>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <CTASection
        headline="Make your next marketing decision with greater confidence."
        primaryLabel="Try Equa"
        primaryHref={TRY_EQUA_URL}
        onPrimaryClick={() => trackTryEqua('final_cta')}
        secondaryLabel="Explore the solution"
        secondaryHref="/solution"
      />
    </>
  );
}
