const { Builder, By, Key } = require('selenium-webdriver')

const driver = new Builder()
    .forBrowser('firefox')
    .build()

async function simpleRegistration() {
    // it is better to use try catch when using async function
    try {
        //  in this lesson we first use css selector by id
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration')
        await driver.findElement(By.css('#email')).sendKeys('fadil.ntksmh@gmail.com')
        await driver.findElement(By.css('#password')).sendKeys('123456')
        await driver.findElement(By.css('#submit')).click()

        // and then we run the index file with node
    } catch (error) {
        console.log("error here", error)
    }
}

simpleRegistration()