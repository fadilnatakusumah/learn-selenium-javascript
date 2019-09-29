
const { Builder, By, Key } = require('selenium-webdriver')

const driver = new Builder()
    .forBrowser('firefox')
    .build()

async function datepickerForm() {
    // it is better to use try catch when using async function
    try {
        //  in this lesson we're using xpath selector for selecting datepicker
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form')
        // xpath always use "//" in the begining
        await driver.findElement(By.xpath('//input[@formcontrolname="dateOne"]')).sendKeys('Sep 2, 2019');
        await driver.findElement(By.xpath('//input[@formcontrolname="dateTwo"]')).sendKeys('Sep 17, 2019 - Sep 28, 2019');
        await driver.findElement(By.css('#submit')).click()

        // and then we run the index file with node
    } catch (error) {
        console.log("error here", error)
    }
}

datepickerForm()