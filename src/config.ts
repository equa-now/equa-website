// Destination for every "Try Equa" button on the site: Production COMPASS.
export const TRY_EQUA_URL = 'https://compass.equa.now';

export const CONTACT_URL = 'mailto:hello@equa.now';

export function trackTryEqua(section: string) {
  if (typeof gtag === 'function') {
    gtag('event', 'try_equa_click', { section });
  }
}
