const { Builder, By, Key } = require('selenium-webdriver')

const driver = new Builder()
    .forBrowser('firefox')
    .build()

async function radioButtonForm() {
    // it is better to use try catch when using async function
    try {
        //  in this lesson we're still gonna use css selector
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form')
        await driver.findElement(By.css('#title')).sendKeys('This is title for title field');
        await driver.findElement(By.css('#description')).sendKeys('This is description for description field')
        await driver.findElement(By.css('div.form-check:nth-child(1) > label:nth-child(1) > span:nth-child(2)')).click();
        await driver.findElement(By.css('#submit')).click()

        // and then we run the index file with node
    } catch (error) {
        console.log("error here", error)
    }
}

radioButtonForm()