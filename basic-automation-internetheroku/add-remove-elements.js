const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('chromedriver');

async function register() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://the-internet.herokuapp.com/add_remove_elements/");

        let addButton = await driver.findElement(By.css(".example > button"));

        for (let i = 0; i < 5; i++) {
            await addButton.click();
        }


        let addedList = await driver.findElements(By.css("#elements > button"));
        for(const list2 of addedList){
            await list2.click();
        }
        
        
        await new Promise(resolve => setTimeout(resolve, 15000));

    } catch(error) {
        console.error("Error :" , error);
    } finally {
        await driver.quit();
    }
}

register();