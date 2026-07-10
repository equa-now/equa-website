// TODO: Replace TRY_EQUA_URL with the production Try Equa application URL when available.
export const TRY_EQUA_URL = 'mailto:hello@equa.now';
export const CONTACT_URL = 'mailto:hello@equa.now';

export function trackTryEqua(section: string) {
  if (typeof gtag === 'function') {
    gtag('event', 'try_equa_click', { section });
  }
}
