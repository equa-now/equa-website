import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { TRY_EQUA_URL, trackTryEqua } from '../config';

// Placeholder for the freemium AI strategy tool.
// Phase 3: replace this page with auth + onboarding + strategy workflow.
export function TryEquaPage() {
  useEffect(() => {
    document.title = 'Try Equa | AI-Powered Marketing Strategy';
  }, []);

  return (
    <>
      <Hero
        overline="Try Equa"
        headline="AI-powered marketing strategy, built for leaders."
        subheadline="The Equa strategy tool is coming soon. Reach out to get early access."
      />
      <section className="section">
        <div className="section-header">
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a
              href={TRY_EQUA_URL}
              className="button button-primary"
              onClick={() => trackTryEqua('try_page')}
            >
              Request Early Access
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
