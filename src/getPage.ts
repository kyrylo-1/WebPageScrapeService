import puppeteer from 'puppeteer';

const userAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36';
export const getPage = async (url: string): Promise<string> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setUserAgent(userAgent);
  await page.goto(url);

  let html = await page.evaluate(() => document.body.innerHTML);

  browser.close();
  return html;
};
