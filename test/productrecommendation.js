const common_action= require('../common_actions/commonAction');
const func = require('../pages/homepage.js');
const verify=require('../pages/validationpage.js')
const inter= require('../pages/intermidatepage.js');
const produ = require('../pages/productpage.js');

describe('testing product recommendation', ()=>{
		it('user click on one product', async() =>{

			const page=await common_action.openBrowser();
			await func. scrollmainpage(page);
			await inter.clickproduct(page);
			await inter.verifyprouductrecommendlandingpage(page);
			await page.waitForTimeout(5000);
			await func.scrollmainpage(page);
			await inter.clickproductoption(page);
			await produ.verifyitemlandingpage(page);
			await common_action.closeBrowser();
		});
	});