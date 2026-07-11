interface HeroProps {
  overline?: string;
  headline: string;
  subheadline?: string;
}

export function Hero({ overline, headline, subheadline }: HeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        {overline && <span className="section-overline">{overline}</span>}
        <h1 className="page-hero-h1">{headline}</h1>
        {subheadline && <p className="page-hero-sub">{subheadline}</p>}
      </div>
    </section>
  );
}
