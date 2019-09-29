const { Builder, By, Key } = require('selenium-webdriver')

const driver = new Builder()
    .forBrowser('firefox')
    .build()

async function checkboxForm() {
    // it is better to use try catch when using async function
    try {
        //  in this lesson we're still gonna use xpath selector
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form')
        // xpath always use "//" in the begining
        await driver.findElement(By.xpath('//input[@name="name"]')).sendKeys('Fadil Natakusumah');
        await driver.findElement(By.xpath('//input[@name="comment"]')).sendKeys('Comments here');
        // following is like selecting after the element
        await driver.findElement(By.xpath('//*[@value="one-bed-appartment"]/following::span')).click();
        await driver.findElement(By.xpath('//nb-checkbox[@value="breakfast"]/label/span')).click();
        await driver.findElement(By.xpath('//nb-checkbox[@value="lunch"]/label/span')).click();
        await driver.findElement(By.css('#submit')).click()

        // and then we run the index file with node
    } catch (error) {
        console.log("error here", error)
    }
}

checkboxForm()