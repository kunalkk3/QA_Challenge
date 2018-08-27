*/let {defineSupportCode} = require('cucumber');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
let webdriver = require("selenium-webdriver");
var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

defineSupportCode(function({Given, When, Then}) {

    Given(/^I go to "([^"]*)?"$/, (ur) => {
      browser.url(ur)
    });
   	When(/^I click sign in button and enter email as "([^"]*)?"$/, (email)=> {
    	console.log(email);
    	driver.findElement(webdriver.By.id('gb_70')).click().then(()=>{
		driver.findElement(webdriver.By.name('identifier')).sendKeys(email).then(()=>{
		driver.findElement(webdriver.By.id('identifierNext')).click();
		})
    	})
    });
    Then(/^I expect to display "([^"]*)?"$/, (message)=> {
    	console.log(message);
    	//expect(browser.isExisting(`#${id}`)).to.be.true;
    });

 });*/