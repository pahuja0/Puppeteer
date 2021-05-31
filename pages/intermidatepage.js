const puppeteer = require('puppeteer');
const obj_locator= require('../object_locator/intermediatepage.js');
var expect = require('chai').expect


async function clickproduct(page)
{
	// await page.waitForSelector(obj_locator.productselector);
	await page.click(obj_locator.productselector);
}

async function verifyprouductrecommendlandingpage(page)
{
	await page.waitForSelector('div#nav-subnav:nth-child(2) a.nav-hasArrow:nth-child(2) > span.nav-a-content');
	const element= await page.$eval('div#nav-subnav:nth-child(2) a.nav-hasArrow:nth-child(2) > span.nav-a-content', e1 =>e1.textContent);
	const text= await page.evaluate(element => element.textContent, element);
	expect(element.trim()).to.equal("Mobiles & Accessories");
	// console.log(element.trim());	
}

async function clickproductoption(page)
{
	await page.waitForSelector(obj_locator.productlandingselector);
	await page.click(obj_locator.productlandingselector);
}

module.exports=
{
	clickproduct,
	verifyprouductrecommendlandingpage,
	clickproductoption,

}