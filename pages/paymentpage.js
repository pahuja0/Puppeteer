const payment = require('../object_locator/payement.js');
var expect = require('chai').expect

async function clickontoproceed(page)
{
	await page.click(payment.proceedtobuy);
}

async function clickontoproceedonpopup(page)
{
	await page.click(payment.proceedtobuy2);
}

async function clickondelievery(page)
{
	await page.click(payment.delivertothisadd);
}
async function clickoncontinue(page)
{
	await page.click(payment.clickoncontinue);
}

async function selectpaymentmethod(page)
{
	await page.click(payment.clickoncardradiobutton);
}

async function selectaddcarddetails(page)
{
	await page.click(payment.clickonaddcard);
}

async function entercardnumber(page)
{
	// await page.waitForSelector(payment.cardnumber);
	const frame=page.frames().find(frame => frame.name()==="ApxSecureIframe");
	await frame.type(payment.cardnumber,"4000 1800 0000 0002");
}

async function selectdropdownmonth(page)
{
	const frame=page.frames().find(frame => frame.name()==="ApxSecureIframe");
	await frame.click(payment.dropdownmonth);
	
}
async function enterexpirymonth(page)
{
	const frame=page.frames().find(frame => frame.name()==="ApxSecureIframe");
	await frame.click(payment.expirymonth);
}
async function entercvv(page)
{
	const frame=page.frames().find(frame => frame.name()==="ApxSecureIframe");
	await frame.type(payment.entercvv, "737");
}

async function selectdropdownyear(page)
{
	const frame=page.frames().find(frame => frame.name()==="ApxSecureIframe");
	await frame.click(payment.dropdownyear);
	
}
async function enterexpiryyear(page)
{
	const frame=page.frames().find(frame => frame.name()==="ApxSecureIframe");
	await frame.click(payment.expiryyear);
}

async function addyourcard(page)
{
	const frame=page.frames().find(frame => frame.name()==="ApxSecureIframe");
	await frame.click(payment.addtocard);
}

async function entercvvagain(page)
{
	// const frame=page.frames().find(frame => frame.name()==="ApxSecureIframe");
	await page.type(payment.entercvvagain, "737");
}
async function clickoncontinueaftercard(page)
{
	await page.click(payment.clickoncontinueaftercvv);
}

async function clickonusethisaddress(page)
{
	await page.click(payment.usethisaddress);
}

async function clickonplaceyourorder(page)
{
	await page.click(payment.placeyouraddress)
}

async function verifyaddresspersonname(page)
{

	await page.waitForSelector(payment.displayaddressname);
	const element= await page.$eval(payment.displayaddressname, e1=>e1.textContent);
	expect(element).to.equal("Harshita pahuja");	
	console.log(element);
}

async function verifyyourdelievryoption(page)
{

	await page.waitForSelector(payment.chooseyourdelievryoption);
	const element= await page.$eval(payment.chooseyourdelievryoption, e1=>e1.textContent);
	expect(element).to.equal("Choose your delivery options");	
	console.log(element);
}


async function verifyreviewyourorder(page)
{
	await page.waitForSelector(payment.reviewyourorder);
	const element= await page.$eval(payment.reviewyourorder, e1=>e1.textContent);
	expect(element.trim()).to.equal("Review your order");	
	console.log(element);
}

async function verifyotplandingpage(page)
{
	const element= await page.$eval(payment.otpverify, e1=>e1.textContent);
	expect(element.trim()).to.equal("Enter One-Time Password (OTP)");
	console.log(element);
}

async function verifypaymentmethod(page)
{
	const element= await page.$eval(payment.paymentmethod, e1=>e1.textContent);
	expect(element.trim()).to.equal("Select a payment method");
	console.log(element);
}



module.exports={
	clickontoproceed,
	clickondelievery,
	clickoncontinue,
	selectpaymentmethod,
	selectaddcarddetails,
	entercardnumber,
	enterexpirymonth,
	entercvv,
	selectdropdownmonth,
	selectdropdownyear,
	enterexpiryyear,
	addyourcard,
	clickoncontinueaftercard,
	entercvvagain,
	clickonusethisaddress,
	clickonplaceyourorder,
	verifyaddresspersonname,
	verifyyourdelievryoption,
	verifyreviewyourorder,
	verifyotplandingpage,
	verifypaymentmethod,
	clickontoproceedonpopup
	
}