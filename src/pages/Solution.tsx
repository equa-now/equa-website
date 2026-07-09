import { Link } from 'react-router-dom';
import { CTASection } from '../components/CTASection';

const workflowSteps = [
  {
    step: '01',
    title: 'Segmentation',
    description:
      'Map the market using identity-driven customer segments — not just demographics, but how people actually think and choose.',
  },
  {
    step: '02',
    title: 'Targeting',
    description:
      'Prioritize the segments with the strongest fit, urgency, and business value. Stop spreading resources across audiences that won\'t convert.',
  },
  {
    step: '03',
    title: 'Positioning',
    description:
      'Generate and compare positioning options for your highest-value audiences. Find the angle that is strategically sound and emotionally resonant.',
  },
  {
    step: '04',
    title: 'Messaging',
    description:
      'Translate strategy into messages teams can test, use, and refine. Close the gap between what Marketing creates and what Sales actually uses.',
  },
];

const questions = [
  'Are we focused on the right customers?',
  'Are we wasting budget on the wrong campaigns?',
  "Why isn't Sales using our messaging?",
  'Why do we keep revisiting strategy?',
  "How do we prove marketing's impact?",
  'Are we moving fast enough?',
];

const audiences = [
  { role: 'CMOs', description: 'Align the team on strategy before committing resources.' },
  { role: 'VPs of Marketing', description: 'Drive clearer prioritization across segments and campaigns.' },
  { role: 'Product Marketing', description: 'Build positioning that holds across audiences and channels.' },
  { role: 'GTM & Growth Teams', description: 'Move from assumptions to evidence-backed targeting.' },
];

const outcomes = [
  'Faster strategic alignment',
  'Better campaign focus',
  'Clearer, consistent messaging',
  'Stronger Sales–Marketing alignment',
  'Less strategy rework',
  'More confident marketing decisions',
];

export function Solution() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            The Equa solution
          </p>
          <h1>From scattered assumptions to sharper decisions.</h1>
          <p className="hero-description">
            Equa gives marketing teams a structured path through segmentation, targeting,
            positioning, and messaging — powered by AI, grounded in identity science.
          </p>
          <div className="hero-actions">
            <a href="mailto:hello@equa.now" className="button button-primary">
              Book a working session
            </a>
            <Link to="/team" className="button button-secondary">
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-band" id="problem" aria-labelledby="problem-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-overline">The problem</span>
            <h2 id="problem-heading">More data. Less clarity.</h2>
          </div>
          <div className="problem-columns">
            <div>
              <p className="problem-text">
                Marketing teams have more data than ever — and still struggle to agree on who to
                target, why they matter, how to position, and what to say.
              </p>
            </div>
            <div>
              <p className="problem-text">
                Strategy gets revisited. Messaging gets diluted. Sales doesn't use what Marketing
                creates. And no one can explain why.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STPM Workflow Pipeline */}
      <section className="section" id="workflow" aria-labelledby="workflow-heading">
        <div className="section-header">
          <span className="section-overline">The Equa workflow</span>
          <h2 id="workflow-heading">A structured path from research to message.</h2>
          <p className="section-sub">
            Four connected steps. One consistent methodology. Built so each stage informs the next.
          </p>
        </div>

        <div className="workflow-pipeline" role="list" aria-label="STPM workflow steps">
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
      </section>

      {/* Questions */}
      <section className="section-band" id="questions" aria-labelledby="questions-heading">
        <div className="section-inner">
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
        </div>
      </section>

      {/* Audiences */}
      <section className="section" id="audiences" aria-labelledby="audiences-heading">
        <div className="section-header">
          <span className="section-overline">Designed for marketing leaders</span>
          <h2 id="audiences-heading">Built for the people responsible for growth.</h2>
        </div>
        <div className="card-grid cards-four">
          {audiences.map((a) => (
            <article key={a.role} className="audience-card">
              <h3 className="audience-role">{a.role}</h3>
              <p className="audience-desc">{a.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-band" id="outcomes" aria-labelledby="outcomes-heading">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-overline">What sharper strategy delivers</span>
            <h2 id="outcomes-heading">Decisions that compound over time.</h2>
          </div>
          <div className="outcomes-grid">
            {outcomes.map((o, i) => (
              <div key={i} className="outcome-item">
                <span className="outcome-check" aria-hidden="true">✓</span>
                <span>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to bring more clarity to your marketing strategy?"
        primaryLabel="Book a working session"
        primaryHref="mailto:hello@equa.now"
        secondaryLabel="Meet the team"
        secondaryHref="/team"
      />
    </>
  );
}
