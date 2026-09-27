import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

// The cinefin.dev footer: mark + wordmark on the left, links on the right.
const LINKS = [
  {label: 'GitHub', href: 'https://github.com/cinefin/cinefin'},
  {label: 'Website', href: 'https://cinefin.dev/'},
  {label: 'Privacy policy', href: 'https://cinefin.dev/privacy.html'},
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__row">
        <ThemedImage
          sources={{
            light: useBaseUrl('/img/cinefin-mark-light.png'),
            dark: useBaseUrl('/img/cinefin-mark-dark.png'),
          }}
          width="20"
          height="26"
          alt=""
        />
        <span className="site-footer__name">Cinefin</span>
        <span className="site-footer__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </span>
      </div>
    </footer>
  );
}
