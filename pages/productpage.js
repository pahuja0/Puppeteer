var expect = require('chai').expect
const puppeteer = require('puppeteer');
const obj_locator= require('../object_locator/productpage.js');
const result_obj = require('../object_locator/productpage.js')

async function verifyitemlandingpage(page)
{
	await page.waitForSelector('span#productTitle');
	const element= await page.$eval('span#productTitle', e1 =>e1.textContent);
	const text= await page.evaluate(element => element.textContent, element);
	// console.log(element.trim().split(" ")[0]);
	expect(element.trim().split(" ")[0]).to.equal("Samsung");

}

async function verifyproductname(page,productname)
{
	await page.waitForSelector(result_obj.productname);
 	const element= await page.$eval(result_obj.productname, e1=> e1.textContent);
 	console.log(element.trim());
 	expect(element.trim()).to.equal(productname);
}

async function verifyproductrating(page,productrating)
{
	await page.waitForSelector(result_obj.productrating);
 	const element= await page.$eval(result_obj.productrating, e1=> e1.textContent);
 	console.log(element);
 	expect(element.substring(0,5)).to.equal(productrating.trim());
}

async function verifyproductprice(page,productprice)
{
	await page.waitForSelector(result_obj.productprice);
 	const element= await page.$eval(result_obj.productprice, e1=> e1.textContent);
 	console.log(element.substring(2,7));
 	expect(element.substring(2,7)).to.equal(productprice);
}

async function addtowishlist(page)
{
	await page.click(obj_locator.addtowishlist);
}

async function addtocart(page)
{
	await page.click(obj_locator.addtocart);
}

module.exports=
{
		verifyitemlandingpage,
		verifyproductrating,
		verifyproductprice,
		verifyproductname,
		addtowishlist,
		addtocart
}