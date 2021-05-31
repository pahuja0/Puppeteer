const puppeteer = require('puppeteer');
const obj_locator= require('../object_locator/homepage.js');
const result_obj= require('../object_locator/resultpage.js')
var expect = require('chai').expect
const homepage = require('./homepage.js');


async function verifyclickcategorylandingpage(page,value)
{
	await page.waitForSelector('span.a-color-state');
	const itemvalue= await page.$eval('span.a-color-state', e1 =>e1.textContent);
	const text= await page.evaluate(itemvalue => itemvalue.textContent, itemvalue);
	expect(itemvalue).to.equal(value);
}

async function verifysearchbar(page,value)
{
	await page.waitForSelector('select.nav-progressive-search-dropdown :nth-child(1)');
	const element= await page.$eval('select.nav-progressive-search-dropdown :nth-child(1)', e1 =>e1.textContent);
	const text= await page.evaluate(element => element.textContent, element);
	expect(value).to.equal(element);
}

async function getnumberofresultaftersearch(page)
{
	await page.waitForSelector(result_obj.resultselector);
 	const result_src= await page.$eval(result_obj.resultselector, e1=> e1.textContent);
 	console.log(result_src.substring(12,));
 	return result_src;
}

async function clickproduct(page)
{
	await page.click(result_obj.selectingproduct);
}

async function getproducttext(page)
{
	await page.waitForSelector(result_obj.selectingproduct);
 	const element= await page.$eval(result_obj.selectingproduct, e1=> e1.textContent);
 	console.log(element);
 	return element;

}

async function getproductrating(page)
{
	await page.waitForSelector(result_obj.productrating);
 	const element= await page.$eval(result_obj.productrating, e1=> e1.textContent);
 	console.log(element);
 	return element;
}

async function getproductprice(page)
{
	await page.waitForSelector(result_obj.productprice);
 	const element= await page.$eval(result_obj.productprice, e1=> e1.textContent);
 	console.log(element);
 	return element;
}

// async function switchtab(page)
// {
// 	const [target] = await Promise.all([
//       new Promise(resolve => browser.once('targetcreated', resolve)),
//       link.click({ button: 'middle' }),
//     ]);

//     const newPage = await target.page();
//     await newPage.bringToFront();
// }

async function navigatetoProductpage(page)
{
const [newPage] = await Promise.all([
    new Promise(resolve => page.once('popup', resolve)),
    page.click(result_obj.selectingproduct),
]);
return newPage;
}

module.exports=
{
	verifyclickcategorylandingpage,
	verifysearchbar,
	getnumberofresultaftersearch,
	clickproduct,
	getproducttext,
	getproductrating,
	getproductprice,
	navigatetoProductpage
}