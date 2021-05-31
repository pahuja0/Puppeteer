const common_action= require('../common_actions/commonAction');
const homepage = require('../pages/homepage.js');
const resultpage = require('../pages/resultpage.js');
const productpage = require('../pages/productpage.js')
const filter_res= require('../pages/filterresultpage.js')


describe('value is send to search bar', ()=>{
		it('search bar testing', async() =>{
			const page =await common_action.openBrowser();
			await page.waitForTimeout(8000);
			await homepage.sendkeytosearchbar(page);
			await homepage.clickonsearch(page);
			const resultaftersearch= await resultpage.getnumberofresultaftersearch(page);
			await page.waitForTimeout(6000);
			await homepage. scrollmainpage(page);	
			await filter_res.clickbrandname(page);
			await page.waitForTimeout(6000);
			await filter_res.verifynumberofresultafterbrand(page,resultaftersearch);
			await homepage. scrollmainpage(page);
			await filter_res.enterminprice(page);
			await filter_res.entermaxprice(page);
			await filter_res.clickongo(page);
			await page.waitForTimeout(4000);
			await filter_res.getnumberofresultafterprice(page,resultaftersearch);
			await common_action.closeBrowser();
			
	});
	});