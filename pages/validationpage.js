var expect = require('chai').expect
const puppeteer = require('puppeteer');

//Common Validation
async function verifybrowserlaunch(page)
{
	const title= await page.title();
	expect(title).to.equal("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
}

//Task 1 validation
async function verifypagelanding(page)
{
	await page.waitForSelector("a.nav-a.nav-a-2.nav-progressive-attribute:nth-child(3) > span.nav-line-1");
	const element= await page.$eval("a.nav-a.nav-a-2.nav-progressive-attribute:nth-child(3) > span.nav-line-1", e1 =>e1.textContent);
	const text= await page.evaluate(element => element.textContent, element);
	expect(element).to.equal("Returns");
}

//Task 3 validation 1
async function verifyhameburgclick(page)
{
	await page.waitForSelector("div#hmenu-content ul.hmenu.hmenu-visible:nth-child(1) li:nth-child(1) > div.hmenu-item");
	const element= await page.$eval("div#hmenu-content ul.hmenu.hmenu-visible:nth-child(1) li:nth-child(1) > div.hmenu-item", e1 =>e1.textContent);
	const text= await page.evaluate(element => element.textContent, element);
	expect(element).to.equal("trending");	
}

//Task 3 validation 2
async function verifyScroll(page)
{
	await page.waitForSelector("div#hmenu-content ul.hmenu-visible:nth-child(1) li:nth-child(15) > a.hmenu-item");
	const element= await page.$eval("div#hmenu-content ul.hmenu-visible:nth-child(1) li:nth-child(15) > a.hmenu-item", e1 =>e1.textContent);
	const text= await page.evaluate(element => element.textContent, element);
	// console.log(element);
	expect(element).to.equal("Mobiles, Computers");	
}

//Task 3 validation 3
async function verifyclickcategoryoption(page)
{
	await page.waitForSelector('div#hmenu-content ul.hmenu.hmenu-visible.hmenu-translateX:nth-child(8) > li:nth-child(9)');
	const element= await page.$eval('div#hmenu-content ul.hmenu.hmenu-visible.hmenu-translateX:nth-child(8) > li:nth-child(9)', e1 =>e1.textContent);
	const text= await page.evaluate(element => element.textContent, element);
	expect(element).to.equal("Tablets");	
}

//Task 3 validation 3
async function verifyclickcategorylandingpage(page)
{
	await page.waitForSelector('span.a-color-state');
	const element= await page.$eval('span.a-color-state', e1 =>e1.textContent);
	const text= await page.evaluate(element => element.textContent, element);
	console.log(element);
	// expect(element).to.equal("Tablets");	
}

//Task 3 validation 4

async function verifysearchbar(page)
{
	await page.waitForSelector('select.nav-progressive-search-dropdown :nth-child(1)');
	const element= await page.$eval('select.nav-progressive-search-dropdown :nth-child(1)', e1 =>e1.textContent);
	const text= await page.evaluate(element => element.textContent, element);
	console.log(element);
}

//Task 2 validation 2
async function verifyprouductrecommendlandingpage(page)
{
	await page.waitForSelector('div#nav-subnav:nth-child(2) a.nav-hasArrow:nth-child(2) > span.nav-a-content');
	const element= await page.$eval('div#nav-subnav:nth-child(2) a.nav-hasArrow:nth-child(2) > span.nav-a-content', e1 =>e1.textContent);
	const text= await page.evaluate(element => element.textContent, element);
	expect(element.trim()).to.equal("Mobiles & Accessories");
	// console.log(element.trim());	
}


//Task 2 validation 3
async function verifyitemlandingpage(page)
{
	await page.waitForSelector('span#productTitle');
	const element= await page.$eval('span#productTitle', e1 =>e1.textContent);
	const text= await page.evaluate(element => element.textContent, element);
	// console.log(element.trim().split(" ")[0]);
	expect(element.trim().split(" ")[0]).to.equal("Samsung");

}
module.exports={
	verifypagelanding,
	verifyclickcategorylandingpage,
	verifyclickcategoryoption,
	verifyhameburgclick,
	verifybrowserlaunch,
	verifyScroll,
	verifyprouductrecommendlandingpage,
	verifyitemlandingpage
};