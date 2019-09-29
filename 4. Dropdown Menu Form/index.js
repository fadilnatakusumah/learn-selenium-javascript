
const { Builder, By, Key } = require('selenium-webdriver')

const driver = new Builder()
    .forBrowser('firefox')
    .build()

async function dropdownMenuForm() {
    // it is better to use try catch when using async function
    try {
        //  in this lesson we're using xpath selector for selecting dropdown
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form')
        // xpath always use "//" in the begining
        await driver.findElement(By.xpath('//nb-select[@formcontrolname="select1"]/button')).click();
        await driver.findElement(By.xpath('//*[@id="cdk-overlay-0"]/nb-card/nb-card-body/nb-option[@value="1"]')).click();
        await driver.findElement(By.xpath('//*[@id="cdk-overlay-0"]/nb-card/nb-card-body/nb-option[@value="2"]')).click();
        await driver.findElement(By.xpath('//nb-select[@formcontrolname="select1"]/button')).click();
        await driver.findElement(By.xpath(`//select[@formcontrolname="select2"]/option[@value="0: 'volvo'"]`)).click();
        await driver.findElement(By.xpath(`//select[@formcontrolname="select2"]/option[@value="1: 'saab'"]`)).click();
        await driver.findElement(By.xpath('//nb-select[@formcontrolname="select3"]/button')).click();
        await driver.findElement(By.xpath('//*[@id="cdk-overlay-1"]/nb-card/nb-card-body/nb-option[@value="2"]')).click();
        await driver.findElement(By.xpath('//select[@formcontrolname="select4"]')).click();
        await driver.findElement(By.xpath('//select[@formcontrolname="select4"]/option[@value="volvo"]')).click();
        await driver.findElement(By.xpath('//select[@formcontrolname="select4"]')).click();
        await driver.findElement(By.css('#submit')).click()

        // and then we run the index file with node
    } catch (error) {
        console.log("error here", error)
    }
}

dropdownMenuForm()