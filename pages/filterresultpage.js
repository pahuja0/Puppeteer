const puppeteer = require('puppeteer');
const result_obj= require('../object_locator/resultpage.js');
var expect = require('chai').expect;
const filter_obj= require('../object_locator/filterresultpage.js');

async function enterminprice(page)
{
	await page.type(filter_obj.minvalue,"1000");
}

async function entermaxprice(page)
{
	await page.type(filter_obj.maxvalue,"5000");
}

async function clickongo(page)
{
	await page.click(filter_obj.goselector);
}

async function getnumberofresultafterprice(page,resultaftersearch)
{
	await page.waitForSelector(filter_obj.resultselectorafterprice);
 	const element= await page.$eval(filter_obj.resultselectorafterprice, e1=> e1.textContent);
 	console.log(element.substring(7,));
 	expect(element).to.not.equal(resultaftersearch);	
}

async function verifynumberofresultafterbrand(page,resultaftersearch)
{
	await page.waitForSelector(filter_obj.resultselectorafterbrand);
 	const element= await page.$eval(filter_obj.resultselectorafterbrand, e1=> e1.textContent);
 	console.log(element.substring(7,));
 	expect(element).to.not.equal(resultaftersearch);	
}

async function clickbrandname(page)
{
	await page.waitForSelector(filter_obj.brandselector);
 	await page.click(filter_obj.brandselector)
 	// console.log(element);
}



module.exports= {
	clickongo,
	verifynumberofresultafterbrand,
	getnumberofresultafterprice,
	entermaxprice,
	enterminprice,
	clickbrandname
}