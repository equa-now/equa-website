import { Link } from 'react-router-dom';

interface CTASectionProps {
  headline: string;
  sub?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  if (href.startsWith('/')) {
    return <Link to={href} className={className}>{children}</Link>;
  }
  return <a href={href} className={className}>{children}</a>;
}

export function CTASection({
  headline,
  sub,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="cta-section cta-dark">
      <div className="cta-inner">
        <h2 className="cta-headline">{headline}</h2>
        {sub && <p className="cta-sub">{sub}</p>}
        <div className="cta-actions">
          <SmartLink href={primaryHref} className="button button-inverse-primary">
            {primaryLabel}
          </SmartLink>
          {secondaryLabel && secondaryHref && (
            <SmartLink href={secondaryHref} className="button button-inverse-secondary">
              {secondaryLabel}
            </SmartLink>
          )}
        </div>
      </div>
    </section>
  );
}
