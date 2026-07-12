import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CTA } from '../components/CTA';
import { logos } from '../content/advisors';
import { TRY_EQUA_URL, trackTryEqua } from '../config';

const workflowSteps = [
  {
    step: '01',
    title: 'Segment',
    description: 'Identify meaningful customer segments based on identity, motivations, and behavior.',
  },
  {
    step: '02',
    title: 'Target',
    description: 'Compare and prioritize the audiences with the strongest strategic potential.',
  },
  {
    step: '03',
    title: 'Position',
    description: 'Develop differentiated positioning designed for the customers who matter most.',
  },
  {
    step: '04',
    title: 'Message',
    description: 'Generate messaging aligned with the selected audience and strategic position.',
  },
];

const videoPoints = [
  'Built on consumer identity science',
  'AI recommends; marketers decide',
  'Designed to align Marketing, Product, and Sales',
];

const outcomes = [
  'Ranked target segments',
  'AI-generated positioning options',
  'Messaging tailored to your audience',
  'A strategy your team can align around',
];

const CREDIBILITY_LOGO_ALTS = ['Wharton School', 'Nike', 'Coca-Cola', 'Meta', 'BCG', 'JetBlue', 'LVMH', 'Intel'];
const credibilityLogos = logos.filter((l) => CREDIBILITY_LOGO_ALTS.includes(l.alt));

export function SolutionPage() {
  useEffect(() => {
    document.title = 'Equa Solution | AI-Powered Segmentation, Targeting, Positioning and Messaging';
  }, []);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            The Equa solution
          </p>
          <h1>Marketing decisions shouldn't rely on guesswork.</h1>
          <p className="hero-description">
            AI-powered segmentation, targeting, positioning, and messaging built on consumer
            identity science.
          </p>
          <div className="hero-actions">
            <a
              href={TRY_EQUA_URL}
              className="button button-primary"
              onClick={() => trackTryEqua('solution_hero')}
            >
              Try Equa Free
            </a>
            <a href="#video" className="button button-secondary">
              Watch the overview
            </a>
          </div>
        </div>
      </section>

      {/* ── How Equa Works ───────────────────────────────────────────── */}
      <section className="section-band" id="workflow" aria-labelledby="workflow-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-overline">How Equa works</span>
            <h2 id="workflow-heading">How Equa Works</h2>
            <p className="section-sub">
              Four connected steps built so each stage informs the next.
            </p>
          </div>
          <div className="workflow-pipeline" role="list" aria-label="Equa workflow steps">
            {workflowSteps.map((s, i) => (
              <div key={s.step} className="workflow-pipeline-item" role="listitem">
                <article className="workflow-step-card">
                  <div className="workflow-step">{s.step}</div>
                  <h3 className="workflow-title">{s.title}</h3>
                  <p className="workflow-desc">{s.description}</p>
                </article>
                {i < workflowSteps.length - 1 && (
                  <div className="workflow-connector" aria-hidden="true">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video ────────────────────────────────────────────────────── */}
      <section className="section" id="video" aria-labelledby="video-heading">
        <div className="section-header">
          <span className="section-overline">See it in action</span>
          <h2 id="video-heading">See Equa in Action</h2>
          <p className="section-sub">
            See how Equa combines consumer identity science and AI to help marketers move from
            customer understanding to clearer strategic decisions.
          </p>
        </div>
        <div className="video-layout">
          <div className="video-player-wrap">
            <video
              controls
              playsInline
              preload="metadata"
              className="video-player"
              aria-label="Equa brand overview: AI-powered segmentation, targeting, positioning, and messaging"
            >
              <source src="/videos/equa-brand-mobile.mp4" type="video/mp4" media="(max-width: 999px)" />
              <source src="/videos/equa-brand-desktop.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </div>
          <div className="video-side">
            <ul className="video-points" aria-label="Key differentiators">
              {videoPoints.map((point) => (
                <li key={point} className="video-point">
                  <span className="video-point-check" aria-hidden="true">✓</span>
                  <p className="video-point-text">{point}</p>
                </li>
              ))}
            </ul>
            <div>
              <a
                href={TRY_EQUA_URL}
                className="button button-primary"
                onClick={() => trackTryEqua('solution_video')}
              >
                Try Equa Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcomes ─────────────────────────────────────────────────── */}
      <section className="section-band" id="outcomes" aria-labelledby="outcomes-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-overline">Tangible deliverables</span>
            <h2 id="outcomes-heading">What You'll Leave With</h2>
          </div>
          <div className="card-grid cards-two">
            {outcomes.map((o) => (
              <div key={o} className="outcome-item">
                <span className="outcome-check" aria-hidden="true">✓</span>
                <span>{o}</span>
              </div>
            ))}
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
      <CTA
        headline="Turn customer understanding into strategy."
        sub="Use Equa to move from segmentation to messaging with greater clarity, speed, and confidence."
        primaryLabel="Try Equa Free"
        primaryHref={TRY_EQUA_URL}
        onPrimaryClick={() => trackTryEqua('solution_final_cta')}
      />
    </>
  );
}
