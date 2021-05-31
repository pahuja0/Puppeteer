const puppeteer = require('puppeteer');
const obj_locator= require('../object_locator/signinpage.js');
var expect = require('chai').expect

async function clickonlogin(page)
{
	await page.waitForSelector(obj_locator.clickonsignin);
	await page.click(obj_locator.clickonsignin);
}

async function enterusername(page)
{
	await page.type(obj_locator.usernameselector,"9870304414");
}

async function clickoncontinue(page)
{
	await page.click(obj_locator.clickoncontinue);
}

async function enterpassword(page)
{
	await page.type(obj_locator.passwordselector,"Neel789$$");	
}

async function clickonsignin(page)
{
	await page.click(obj_locator.signinselector)
}

async function verifylogout(page)
{
	await page.waitForSelector(obj_locator.signinverify);
	const element= await page.$eval(obj_locator.signinverify, e1 =>e1.textContent);
	console.log(element);
	expect(element.trim()).to.equal("Sign-In");

}
module.exports={
	clickonlogin,
	enterusername,
	clickoncontinue,
	enterpassword,
	clickonsignin,
	verifylogout
}