const common_action= require('../common_actions/commonAction');
const homepage = require('../pages/homepage.js');
const resultpage= require('../pages/resultpage.js');
const prodpage = require('../pages/productpage.js')


describe('value is send to search bar', ()=>{
		it('search bar testing', async() =>{
			const page =await common_action.openBrowser();
			await page.waitForTimeout(6000);
			await homepage.sendkeytosearchbar(page);
			await homepage.clickonsearch(page);
			await resultpage.getnumberofresultaftersearch(page);
			await homepage.scrollmainpage(page);
			const prodname = await resultpage.getproducttext(page);
			await page.waitForTimeout(5000);
			
			const prodrating = await resultpage.getproductrating(page);
			const prodprice= await resultpage.getproductprice(page);
			
			const newPage= await resultpage.navigatetoProductpage(page);
			await page.waitForTimeout(10000);
			
			await prodpage.verifyproductname(newPage,prodname);
			await prodpage.verifyproductprice(newPage,prodprice);
			await prodpage.verifyproductrating(newPage,prodrating);

			await common_action.closeBrowser();
			
});
});
