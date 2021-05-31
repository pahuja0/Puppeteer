var expect = require('chai').expect
const puppeteer = require('puppeteer');
const obj_locator= require('../object_locator/wishlist.js');


async function clickonwishlist(page)
{
	await page.click(obj_locator.wishlist);
}

async function verifyitemtext(page,product)
{
	await page.waitForSelector(obj_locator.producttext);
 	const element= await page.$eval(obj_locator.producttext, e1=> e1.textContent);
 	console.log(element);
 	expect(element.trim()).to.equal(product.trim());
 	
}


module.exports=
{
	clickonwishlist,
	verifyitemtext

}