const common_action= require('../common_actions/commonAction');
const signinpage = require('../pages/signinpage.js');
const homepage= require('../pages/homepage.js');
const resultpage = require('../pages/resultpage.js');
const produpage = require('../pages/productpage.js')
const wishlist = require('../pages/wishlistpage.js')

describe('user is able to click on signin button', ()=>{
		it('user click', async() =>{
			var username="Hi, Harshita";
			const page =await common_action.openBrowser();
			// await page.waitForTimeout(5000);
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
			// const prodname = await resu.getproducttext(page);
			await page.waitForTimeout(5000);
			const newPage = await resultpage.navigatetoProductpage(page);
			await page.waitForTimeout(4000);
			await homepage.scrollmainpage(page);
			await page.waitForTimeout(4000);
			const prodname =await resultpage.getproducttext(page);
			await produpage.addtowishlist(newPage);
			await page.waitForTimeout(4000);
			await wishlist.clickonwishlist(newPage);
			await page.waitForTimeout(4000);
			await wishlist.verifyitemtext(newPage,prodname);
			await homepage.clickonaccount(newPage);
			await homepage.clickonsignout(newPage);
			await signinpage.verifylogout(newPage);
		});
	});

				