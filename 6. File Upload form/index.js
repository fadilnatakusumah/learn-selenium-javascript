
const { Builder, By, Key } = require('selenium-webdriver')

const driver = new Builder()
    .forBrowser('firefox')
    .build()

async function fileUploadForm() {
    // it is better to use try catch when using async function
    try {
        //  in this lesson we're using xpath selector for selecting input type file
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/file-form')
        // xpath always use "//" in the begining
        await driver.findElement(By.xpath('//input[@formcontrolname="file"]')).sendKeys(__dirname + '\\{your name file in this folder}');
        await driver.findElement(By.css('#submit')).click()

        // and then we run the index file with node
    } catch (error) {
        console.log("error here", error)
    }
}

fileUploadForm()