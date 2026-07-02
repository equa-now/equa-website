interface PageHeroProps {
  overline?: string;
  headline: string;
  subheadline?: string;
}

export function PageHero({ overline, headline, subheadline }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        {overline && <p className="section-overline">{overline}</p>}
        <h1 className="page-hero-h1">{headline}</h1>
        {subheadline && <p className="page-hero-sub">{subheadline}</p>}
      </div>
    </section>
  );
}
