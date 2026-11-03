'use client';
import { useEffect, useState } from 'react';
import { SunIcon } from './icons';
const links = [['Work', 'projects'], ['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience']] as const;
export function Header() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('light');
  useEffect(() => { setMode(document.documentElement.dataset.mode || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')); }, []);
  function toggleMode() {
    const next = mode === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.mode = next;
    setMode(next);
    try { localStorage.setItem('portfolio-mode', next); } catch { /* Browsing storage is optional. */ }
  }
  return <header className="site-header"><div className="container header-inner">
    <a className="wordmark" href="#main" aria-label="Ammar Alasfoor, home">a<span className="wordmark-slash">/</span>a<span className="wordmark-period">.</span></a>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
    <div className="header-actions"><button className="theme-toggle" onClick={toggleMode} aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}><SunIcon /></button><a href="#contact" className="contact-link">Let’s talk <span aria-hidden="true">↗</span></a><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button></div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" data-open={open}>{links.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}</nav>
  </div></header>;
}
