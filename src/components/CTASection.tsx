import { Link } from 'react-router-dom';

interface CTASectionProps {
  headline: string;
  sub?: string;
  primaryLabel: string;
  primaryHref: string;
  onPrimaryClick?: () => void;
  secondaryLabel?: string;
  secondaryHref?: string;
}

function SmartLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (href.startsWith('/')) {
    return <Link to={href} className={className} onClick={onClick}>{children}</Link>;
  }
  return <a href={href} className={className} onClick={onClick}>{children}</a>;
}

export function CTASection({
  headline,
  sub,
  primaryLabel,
  primaryHref,
  onPrimaryClick,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="cta-section cta-dark">
      <div className="cta-inner">
        <h2 className="cta-headline">{headline}</h2>
        {sub && <p className="cta-sub">{sub}</p>}
        <div className="cta-actions">
          <SmartLink href={primaryHref} className="button button-inverse-primary" onClick={onPrimaryClick}>
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
