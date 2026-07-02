import { Link } from 'react-router-dom';
import { CTASection } from '../components/CTASection';

const workflowSteps = [
  {
    step: '01',
    title: 'Segmentation',
    description:
      'Map the market using meaningful customer dimensions — not just demographics, but identity-driven segments that reflect how people actually think and choose.',
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
      'Generate and compare positioning options for the highest-value audiences. Find the angle that\'s both strategically sound and emotionally resonant.',
  },
  {
    step: '04',
    title: 'Messaging',
    description:
      'Translate strategy into messages teams can test, use, and improve. Make sure Sales uses what Marketing creates.',
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
  { role: 'Product Marketing leaders', description: 'Build positioning that holds across audiences and channels.' },
  { role: 'Growth & GTM teams', description: 'Move from assumptions to evidence-backed targeting.' },
];

const outcomes = [
  'Faster strategic alignment',
  'Better campaign focus',
  'Clearer messaging',
  'Stronger Sales and Marketing alignment',
  'Reduced strategy rework',
  'More confident marketing decisions',
];

export function Solution() {
  return (
    <>
      <section className="hero-section solution-hero">
        <div className="hero-copy">
          <p className="section-overline">The Equa solution</p>
          <h1>Turn marketing strategy into sharper decisions.</h1>
          <p className="hero-description">
            Equa helps teams move from scattered assumptions to clearer segmentation, targeting,
            positioning, and messaging — powered by AI and grounded in identity research.
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

      <section className="section section-band" id="problem" aria-labelledby="problem-heading">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-overline">The problem</p>
            <h2 id="problem-heading">More data. Less clarity.</h2>
          </div>
          <div className="problem-body">
            <p className="problem-text">
              Marketing teams have more data than ever but still struggle to agree on who to target,
              why they matter, how to position, and what to say.
            </p>
            <p className="problem-text">
              Strategy gets revisited. Messaging gets diluted. And Sales doesn't always use what
              Marketing creates.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="workflow" aria-labelledby="workflow-heading">
        <div className="section-header">
          <p className="section-overline">The Equa workflow</p>
          <h2 id="workflow-heading">A structured path from research to message.</h2>
        </div>
        <div className="card-grid workflow-grid">
          {workflowSteps.map((s) => (
            <article key={s.step} className="workflow-card">
              <div className="workflow-step">{s.step}</div>
              <h3 className="workflow-title">{s.title}</h3>
              <p className="workflow-desc">{s.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-band" id="questions" aria-labelledby="questions-heading">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-overline">What Equa helps answer</p>
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

      <section className="section" id="audiences" aria-labelledby="audiences-heading">
        <div className="section-header">
          <p className="section-overline">Designed for marketing leaders</p>
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

      <section className="section section-band" id="outcomes" aria-labelledby="outcomes-heading">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-overline">Business outcomes</p>
            <h2 id="outcomes-heading">What sharper strategy delivers.</h2>
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
        headline="Bring more clarity to your marketing strategy."
        primaryLabel="Book a working session"
        primaryHref="mailto:hello@equa.now"
      />
    </>
  );
}
