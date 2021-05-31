const common_action= require('../common_actions/commonAction');
const signinpage = require('../pages/signinpage.js');
const homepage= require('../pages/homepage.js');
const resultpage = require('../pages/resultpage.js');
const produpage = require('../pages/productpage.js')
const wishlist = require('../pages/wishlistpage.js')
const payment = require('../pages/paymentpage.js')
var expect = require('chai').expect
const obj_locator = require('../object_locator/payement.js');

describe.only('user is able to click on signin button', ()=>{
		it('user click', async() =>{
			var username="Hi, Harshita";
			const page =await common_action.openBrowser();
			await signinpage.clickonlogin(page);
			await page.waitForTimeout(5000);
			await signinpage.enterusername(page);
			await page.waitForTimeout(5000);
			await signinpage.clickoncontinue(page);
			await page.waitForTimeout(10000);
			await signinpage.enterpassword(page);
			await signinpage.clickonsignin(page);
			await homepage.verifywelcomename(page,username);
			await homepage.sendkeytosearchbar(page);
			await homepage.clickonsearch(page);
			await homepage.scrollmainpage(page);
			await page.waitForTimeout(5000);
			const newPage = await resultpage.navigatetoProductpage(page);
			await page.waitForTimeout(5000);
			await produpage.addtocart(newPage);
			await page.waitForTimeout(9000);
			if(obj_locator.proceedtobuy)
			{
				await payment.clickontoproceed(newPage);
			}
			else
			{
				await payment.clickontoproceedonpopup(newPage);
			}
			// await payment.clickontoproceed(newPage);
			await page.waitForTimeout(4000);
			await payment.verifyaddresspersonname(newPage);
			await page.waitForTimeout(5000);
			await payment.clickondelievery(newPage);
			await page.waitForTimeout(4000);
			await payment.verifyyourdelievryoption(newPage);
			await page.waitForTimeout(5000);
			await payment.clickoncontinue(newPage);
			await page.waitForTimeout(6000);
			await payment.selectpaymentmethod(newPage);
			await page.waitForTimeout(4000);
			await payment.verifypaymentmethod(newPage);
			await page.waitForTimeout(4000);
			await payment.selectaddcarddetails(newPage);
			await page.waitForTimeout(6000);
			await payment.entercardnumber(newPage);
			await page.waitForTimeout(5000);
			await payment.selectdropdownmonth(newPage);
			await page.waitForTimeout(2000);
			await payment.enterexpirymonth(newPage);
			await page.waitForTimeout(3000);
			await payment.selectdropdownyear(newPage);
			await page.waitForTimeout(6000);
			await payment.enterexpiryyear(newPage);
			await page.waitForTimeout(3000);
			await payment.entercvv(newPage);
			await page.waitForTimeout(3000);
			await payment.addyourcard(newPage);
			await page.waitForTimeout(7000);
			await payment.entercvvagain(newPage);
			await page.waitForTimeout(5000);
			await payment.clickoncontinueaftercard(newPage);
			await page.waitForTimeout(5000);
			await payment.clickonusethisaddress(newPage);
			await page.waitForTimeout(5000);
			await payment.verifyreviewyourorder(newPage);
			await page.waitForTimeout(5000);
			await payment.clickonplaceyourorder(newPage);
			await page.waitForTimeout(5000);
			await payment.verifyotplandingpage(newPage);


			});
	});