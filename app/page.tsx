import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About, Contact, Experience, Projects, Skills } from '@/components/sections';
import { profile } from '@/lib/portfolio';
const person = {
  '@context': 'https://schema.org', '@type': 'Person', name: profile.name,
  url: 'https://a-alasfoor.github.io', email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ['Software Engineering', 'Cybersecurity', 'Cloud Computing', 'Artificial Intelligence'],
  alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'University of Bahrain' }, { '@type': 'EducationalOrganization', name: 'Reboot Coding Institute' }],
};
export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(person).replace(/</g, '\\u003c')}}/><Header/><main id="main"><Hero/><Projects/><About/><Skills/><Experience/></main><Contact/></>;
}
