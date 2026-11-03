import puppeteer from 'puppeteer-core';
import {readFileSync, writeFileSync} from 'node:fs';
const font=readFileSync('node_modules/@fontsource/familjen-grotesk/files/familjen-grotesk-latin-600-normal.woff2').toString('base64');
const tokens=readFileSync('tokens.css','utf8');
const browser=await puppeteer.launch({executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
try {
  const page=await browser.newPage();
  await page.setViewport({width:1200,height:630,deviceScaleFactor:1});
  await page.setContent(`<html data-mode="light"><head><style>${tokens}@font-face{font-family:Portfolio;src:url(data:font/woff2;base64,${font})}:root{--font-display:Portfolio,sans-serif}*{box-sizing:border-box}body{margin:0;padding:64px;background:var(--color-paper);color:var(--color-ink);font-family:var(--font-display)}header{display:flex;justify-content:space-between;font-size:24px;border-bottom:1px solid var(--color-rule-2);padding-bottom:28px}h1{font-size:100px;line-height:1.02;letter-spacing:-.055em;margin:66px 0 38px}footer{display:flex;justify-content:space-between;color:var(--color-muted);font-size:23px}.accent{color:var(--color-accent)}</style></head><body><header><span>Ammar Alasfoor<span class="accent">.</span></span><span>Software / Cloud / Cybersecurity / AI</span></header><h1>Thoughtful code.<br>Real-world impact.</h1><footer><span>Software developer, Bahrain</span><span>a-alasfoor.github.io</span></footer></body></html>`);
  await page.evaluate(()=>document.fonts.ready);
  await page.screenshot({path:'public/og-image.png'});
  writeFileSync('app/icon.svg','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><style>:root{--paper:#f7faff;--ink:#0f1829;color:var(--ink)}rect{fill:var(--paper)}text{fill:currentColor;font-family:Arial,sans-serif;font-weight:600}</style><rect width="64" height="64" rx="12"/><text x="8" y="43" font-size="38">a/</text></svg>');
  console.log('Created public/og-image.png and app/icon.svg');
} finally { await browser.close(); }
