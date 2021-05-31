const puppeteer = require('puppeteer');
var browser;
async function openBrowser()
{
		browser = await puppeteer.launch({headless: false, defaultViewport: null,args: ['--start-maximized'] });
 	  	const page = await browser.newPage();
 	   	await page.goto('https://www.amazon.in/');
        // await page.setViewport({ width: 1366, height: 768});
		return page;
}

async function closeBrowser()
{
	await browser.close();
}

      

module.exports=
{
	openBrowser,
	closeBrowser
};
