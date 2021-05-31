const common_action= require('../common_actions/commonAction');
const func = require('../pages/homepage.js');
const verify=require('../pages/validationpage.js')

describe('user is able to click on right and left navigation', ()=>{
		it('user click', async() =>{
			
			const page =await common_action.openBrowser();
			await func.verifybrowserlaunch(page);	
			await func.clickleftnavigation(page);	
			await page.waitForTimeout(5000);
			await func.clickrightnavigation(page);
			await page.waitForTimeout(5000);
			await func.scrollmainpage(page);
			await func.verifypagelanding(page);
			await common_action.closeBrowser();
			
	});
});