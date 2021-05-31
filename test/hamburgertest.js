const common_action= require('../common_actions/commonAction');
const func = require('../pages/homepage.js');

const result=require('../pages/resultpage.js');

describe('testing hamburger button', ()=>{
		it('user click on hamburger', async() =>{
			const page=await common_action.openBrowser();
			await func.clickhamburgermenu(page);
			await func.verifyhameburgclick(page);
			await func.hamburgerscroll(page);
			await func.verifyclickcategory(page);
			await page.waitForTimeout(5000);
			await func.clickcategory(page);
			await page.waitForTimeout(5000);
			const value = await func.getclickcategoryoption(page);
			await func.clickcategoryoptions(page);
			await page.waitForTimeout(5000);
			await result.verifyclickcategorylandingpage(page,value);
			await result. verifysearchbar(page,value);	
			await common_action.closeBrowser();


		})
	});

