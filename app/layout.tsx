import type { Metadata, Viewport } from 'next';
import '@fontsource/familjen-grotesk/500.css';
import '@fontsource/familjen-grotesk/600.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import './globals.css';
const title = 'Ammar Alasfoor — Software, Cloud & Cybersecurity';
const description = 'Software developer and cybersecurity graduate based in Bahrain. Explore ECONX, Sijilat, and full-stack work spanning AWS, AI, React, Next.js, and Go.';
export const metadata: Metadata = {
  metadataBase: new URL('https://a-alasfoor.github.io'),
  title, description, alternates: { canonical: '/' },
  authors: [{name: 'Ammar Alasfoor'}],
  openGraph: { title, description, url: '/', siteName: 'Ammar Alasfoor', type: 'website', locale: 'en_US', images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Ammar Alasfoor — Thoughtful code. Real-world impact.' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1 };
const themeScript = `(function(){document.documentElement.classList.add('js');try{var m=localStorage.getItem('portfolio-mode');if(m==='light'||m==='dark')document.documentElement.dataset.mode=m;}catch(e){}})();`;
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html: themeScript}}/></head><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
