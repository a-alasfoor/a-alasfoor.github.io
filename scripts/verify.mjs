import puppeteer from 'puppeteer-core';
import { AxePuppeteer } from '@axe-core/puppeteer';
import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
const url = process.env.PORTFOLIO_URL || 'http://127.0.0.1:3000';
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const page = await browser.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
mkdirSync('.hallmark/qa', {recursive:true});
try {
  for (const mode of ['light','dark']) {
    await page.setViewport({width:1440,height:900});
    await page.goto(url, {waitUntil:'networkidle0'});
    await page.evaluate(mode=>{document.documentElement.dataset.mode=mode;localStorage.setItem('portfolio-mode',mode)},mode);
    await page.evaluate(()=>document.fonts.ready);
    await new Promise(resolve=>setTimeout(resolve,500));
    const results = await new AxePuppeteer(page).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    assert.equal(results.violations.length, 0, JSON.stringify(results.violations.map(v=>({id:v.id, nodes:v.nodes.map(n=>n.target)}))));
    await page.screenshot({path:`.hallmark/qa/${mode}-desktop.png`,fullPage:true});
    for (const width of [320,375,768,1280,1440,1920]) {
      await page.setViewport({width,height:900});
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${mode} overflow at ${width}`);
    }
    await page.reload({waitUntil:'networkidle0'});
    assert.equal(await page.evaluate(()=>document.documentElement.dataset.mode),mode);
  }
  await page.setViewport({width:375,height:812});
  await page.goto(url,{waitUntil:'networkidle0'});
  await page.click('.menu-toggle');
  assert.equal(await page.$eval('.menu-toggle',el=>el.getAttribute('aria-expanded')),'true');
  await page.click('#mobile-navigation a[href="#skills"]');
  assert.equal(await page.$eval('.menu-toggle',el=>el.getAttribute('aria-expanded')),'false');
  for (const id of ['econx','sijilat','social-network']) {
    await page.$eval(`#${id} summary`,el=>el.click());
    assert(await page.$eval(`#${id} details`,el=>el.open));
    await page.$eval(`#${id} summary`,el=>el.click());
  }
  const brokenAnchors = await page.evaluate(()=>[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash));
  assert.deepEqual(brokenAnchors,[]);
  const oldMode=await page.evaluate(()=>document.documentElement.dataset.mode);
  await page.click('.theme-toggle');
  assert.notEqual(await page.evaluate(()=>document.documentElement.dataset.mode),oldMode);
  await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);
  assert.equal(await page.$eval('.intro-copy',el=>getComputedStyle(el).animationName),'none');
  await page.screenshot({path:'.hallmark/qa/mobile.png',fullPage:true});
  const cv=await page.goto(`${url}/Ammar-Alasfoor-CV.pdf`);
  assert.equal(cv.status(),200); assert.match(cv.headers()['content-type'],/pdf/);
  const nojs = await browser.newPage();
  await nojs.setViewport({width:375,height:812});
  await nojs.setJavaScriptEnabled(false);
  await nojs.goto(url,{waitUntil:'networkidle0'});
  assert(await nojs.$eval('h1',el=>el.getBoundingClientRect().height>0));
  assert(await nojs.$eval('#mobile-navigation',el=>getComputedStyle(el).display!=='none'));
  assert.deepEqual(errors,[]);
  const report={passed:true,modes:['light','dark'],widths:[320,375,768,1280,1440,1920],axeViolations:0,checks:['mobile menu','project disclosures','anchor targets','theme persistence','reduced motion','CV response','no-JavaScript content'],browserErrors:errors};
  writeFileSync('.hallmark/qa/results.json',JSON.stringify(report,null,2));
  console.log(JSON.stringify(report,null,2));
} finally { await browser.close(); }
