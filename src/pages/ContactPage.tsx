import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { CONTACT_URL } from '../config';

export function ContactPage() {
  useEffect(() => {
    document.title = 'Equa | Contact';
  }, []);

  return (
    <>
      <Hero
        overline="Get in touch"
        headline="Let's talk about your marketing strategy."
        subheadline="We're always happy to hear from marketing leaders who want to bring more clarity to how they segment, target, position, and message."
      />
      <section className="section">
        <div className="section-header">
          <p className="section-sub">
            Email us at{' '}
            <a href={CONTACT_URL} className="section-sub-link">
              hello@equa.now
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
