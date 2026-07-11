// IMPORTANT: Replace TRY_EQUA_URL with the production Equa application URL.
// This is the destination for every "Try Equa" button on the site.
// Currently set to the contact email as a safe fallback.
export const TRY_EQUA_URL = 'mailto:hello@equa.now';

export const CONTACT_URL = 'mailto:hello@equa.now';

export function trackTryEqua(section: string) {
  if (typeof gtag === 'function') {
    gtag('event', 'try_equa_click', { section });
  }
}
