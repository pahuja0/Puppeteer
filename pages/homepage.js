const puppeteer = require('puppeteer');
const obj_locator= require('../object_locator/homepage.js');
var expect = require('chai').expect


async function verifybrowserlaunch(page)
{
	const title= await page.title();
	expect(title).to.equal("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
}

async function clickrightnavigation(page)
{
	await page.waitForSelector(obj_locator.rightnavigationarrow);
	await page.click(obj_locator.rightnavigationarrow);
}

async function clickleftnavigation(page)
{
	// await page.waitForSelector(obj_locator.leftnavigationarrow);
	await page.click(obj_locator.leftnavigationarrow);
}

async function clickhamburgermenu(page)
{
	
	await page.click(obj_locator.hameburgermenu);
}

async function scrollmainpage(page)
{
	page.evaluate(_ => {
  	window.scrollTo(0, window.innerHeight);
});
}


async function hamburgerscroll(page)
{
	page.hover(obj_locator.mobileoption);
}

async function clickcategory(page)
{
	await page.waitForSelector(obj_locator.category);
	await page.click(obj_locator.category);
}
async function clickcategoryoptions(page)
{
	await page.waitForSelector(obj_locator.categoryoption);
	await page.click(obj_locator.categoryoption);
}


//Task 3 validation 1
async function verifyhameburgclick(page)
{
	await page.waitForSelector(obj_locator.hameburgerclick);
	const element= await page.$eval(obj_locator.hameburgerclick, e1=>e1.textContent);
	expect(element).to.equal("trending");	
}

//Task 3 validation 2
async function verifyclickcategory(page)
{
	await page.waitForSelector(obj_locator.category);
	const element= await page.$eval(obj_locator.category, e1 =>e1.textContent);
	// console.log(element);
	expect(element).to.equal("Mobiles, Computers");	
}

//Task 3 validation 3 :Clicking on tablets
async function getclickcategoryoption(page)
{
	await page.waitForSelector(obj_locator.categoryoption);
	const element= await page.$eval(obj_locator.categoryoption, e1 =>e1.textContent);
	console.log(element);
	return element;
}

//Task 4 Starting.

async function sendkeytosearchbar(page)
{
	// await page.waitForSelector("obj_locator.searchbar");
	await page.type(obj_locator.searchbar,"Tablets");
}

async function clickonsearch(page)
{
	await page.click(obj_locator.clickonsearchbar);
}

async function verifywelcomename(page,name)
{
	await page.waitForSelector(obj_locator.welcomeselector);
	const element= await page.$eval(obj_locator.welcomeselector, e1 =>e1.textContent);
	expect(element).to.equal(name);
}

async function clickonaccount(page)
{
	await page.hover(obj_locator.accountselector);
}

async function clickonsignout(page){
	await page.click(obj_locator.signoutselector);
}



module.exports={
	clickleftnavigation,
	clickrightnavigation,
	clickhamburgermenu,
	clickcategory,
	clickcategoryoptions,
	hamburgerscroll,
	scrollmainpage,	
	getclickcategoryoption,
	verifyhameburgclick,
	verifybrowserlaunch,
	verifyclickcategory,
	sendkeytosearchbar,
	clickonsearch,
	verifywelcomename,
	clickonaccount,
	clickonsignout
	
};