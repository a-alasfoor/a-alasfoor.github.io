import { ArrowIcon } from './icons';
export function Hero() {
  return <section className="hero" aria-labelledby="hero-title"><div className="container opening-inner">
    <div className="intro-copy"><h1 id="hero-title">Thoughtful code.<br/>Real-world impact.</h1><p className="hero-lead">I’m Ammar, building across software, security, cloud, and AI.</p><div className="hero-actions"><a className="key key-primary" href="#projects">Explore my work <ArrowIcon/></a><a className="text-link" href="/Ammar-Alasfoor-CV.pdf" download>Download CV <span className="download-icon" aria-hidden="true">↓</span></a></div></div>
    <nav className="hero-work-index" aria-label="Featured projects"><a href="#econx"><span>01</span>ECONX<ArrowIcon/></a><a href="#sijilat"><span>02</span>Sijilat<ArrowIcon/></a><a href="#social-network"><span>03</span>Social Network<ArrowIcon/></a><p>Software, from concept to delivery.</p></nav>
    <div className="hero-bottom"><span>Software with purpose. Systems with care.</span><a href="#projects">Scroll to explore <span aria-hidden="true">↓</span></a></div>
  </div></section>;
}
