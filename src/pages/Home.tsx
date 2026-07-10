import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { advisors, logos } from '../content/advisors';
import { TRY_EQUA_URL, CONTACT_URL, trackTryEqua } from '../config';

const problems = [
  'Teams struggle to agree on the customers that matter most.',
  'Strategy gets revisited without producing clearer decisions.',
  'Messaging becomes disconnected from what customers and Sales actually need.',
];

const questions = [
  'Are we focused on the right customers?',
  'Are we wasting budget on the wrong campaigns?',
  "Why isn't Sales using our messaging?",
  'Why do we keep revisiting strategy?',
  "How do we prove marketing's impact?",
  'Are we moving fast enough?',
];

const workflowSteps = ['Segmentation', 'Targeting', 'Positioning', 'Messaging'];

const FEATURED_ADVISOR_NAMES = [
  'Lee Applbaum',
  'Kathy Hines',
  'David Bell',
  'Michael Platt',
  'Elizabeth Windram',
];

const FEATURED_LOGO_ALTS = [
  'Wharton School',
  'Nike',
  'Coca-Cola',
  'CLEAR',
  'JetBlue',
  'Meta',
  'BCG',
  'Uber',
  'The North Face',
  'LVMH',
  'Patrón',
  'Intel',
];

const featuredAdvisors = advisors.filter((a) => FEATURED_ADVISOR_NAMES.includes(a.name));
const featuredLogos = logos.filter((l) => FEATURED_LOGO_ALTS.includes(l.alt));
const remainingAdvisorCount = advisors.length - FEATURED_ADVISOR_NAMES.length;

export function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            AI-powered marketing strategy
          </p>
          <h1>Stop guessing which customers matter.</h1>
          <p className="hero-description">
            Equa helps marketing teams make sharper segmentation, targeting, positioning, and
            messaging decisions using AI grounded in identity science.
          </p>
          <div className="hero-actions">
            <a href={TRY_EQUA_URL} className="button button-primary" onClick={() => trackTryEqua('hero')}>
              Try Equa
            </a>
            <Link to="/solution" className="button button-secondary">
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────────────── */}
      <section className="section-band" id="problem" aria-labelledby="problem-heading">
        <div className="section-inner">
          <div className="section-header">
            <h2 id="problem-heading">
              Marketing teams have more data than ever, but less clarity.
            </h2>
          </div>
          <div className="card-grid cards-three">
            {problems.map((text, i) => (
              <div key={i} className="problem-item">
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Questions ────────────────────────────────────────────────── */}
      <section className="section" id="questions" aria-labelledby="questions-heading">
        <div className="section-header">
          <span className="section-overline">What Equa helps answer</span>
          <h2 id="questions-heading">The questions every marketing leader is asking.</h2>
        </div>
        <div className="questions-grid">
          {questions.map((q, i) => (
            <div key={i} className="question-item">
              <span className="question-arrow" aria-hidden="true">→</span>
              <p>{q}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Product Preview ──────────────────────────────────────────── */}
      <section className="section-band" id="product-preview" aria-labelledby="preview-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-overline">The Equa workflow</span>
            <h2 id="preview-heading">A structured path from research to message.</h2>
            <p className="section-sub">
              Four connected steps powered by AI, grounded in identity science.{' '}
              <Link to="/solution" className="section-sub-link">
                See the full workflow →
              </Link>
            </p>
          </div>

          <div className="workflow-chain" aria-label="STPM workflow steps">
            {workflowSteps.map((step, i) => (
              <Fragment key={step}>
                <span className="workflow-chain-step">{step}</span>
                {i < workflowSteps.length - 1 && (
                  <span className="workflow-chain-arrow" aria-hidden="true">→</span>
                )}
              </Fragment>
            ))}
          </div>

          {/* TODO: Replace with product screenshot, brand film embed, or UI walkthrough */}
          <div
            className="product-preview-placeholder"
            role="img"
            aria-label="Product UI — visual coming soon"
          >
            <p>Product walkthrough — coming soon</p>
          </div>

          <div className="hero-actions" style={{ marginTop: '2rem' }}>
            <a href={TRY_EQUA_URL} className="button button-primary" onClick={() => trackTryEqua('product_preview')}>
              Try Equa
            </a>
          </div>
        </div>
      </section>

      {/* ── Credibility ──────────────────────────────────────────────── */}
      <section className="section" id="credibility" aria-labelledby="credibility-heading">
        <div className="section-header">
          <h2 id="credibility-heading">
            Built at the intersection of AI, marketing strategy, and identity science.
          </h2>
          <p className="section-sub">
            Founded by a Wharton identity scientist and an AI product builder.
            Guided by an <Link to="/board">advisory board</Link> of CMOs, researchers, and
            founders from globally recognized organizations.
          </p>
        </div>

        <div className="credibility-advisor-row" aria-label="Featured advisors">
          {featuredAdvisors.map((a) => (
            <div key={a.name} className="credibility-advisor-item">
              <div className="advisor-avatar">
                <img src={a.headshot} alt={a.name} loading="lazy" />
              </div>
              <span className="credibility-advisor-name">{a.name}</span>
            </div>
          ))}
        </div>
        <Link to="/board" className="credibility-advisors-link">
          Meet all {remainingAdvisorCount + FEATURED_ADVISOR_NAMES.length} advisors →
        </Link>

        <div className="logo-strip credibility-logo-strip">
          {featuredLogos.map((logo) => (
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
        secondaryLabel="Request a conversation"
        secondaryHref={CONTACT_URL}
      />
    </>
  );
}
