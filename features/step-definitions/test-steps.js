let {defineSupportCode} = require('cucumber');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

defineSupportCode(function({Given, When, Then}) {
    Given(/^I navigate to "([^"]*)?"$/, (ur) => {
      browser.url(ur)
    });

    Then(/^I expect that the logo element with id "([^"]*)?" exist$/, (id) => {
    	expect(browser.isExisting(`#${id}`)).to.be.true;
    });

    Then(/^I expect that the page has search entry field with id "([^"]*)?"$/, (id)=> {
    	expect(browser.isExisting(`#${id}`)).to.be.true;
    });

    Then(/^I expect that the page has sign in button with id "([^"]*)?"$/, (id)=> {
    	expect(browser.isExisting(`#${id}`)).to.be.true;
    });

    Then(/^I expect that the page has I'm Feeling Lucky button with id "([^"]*)?"$/, (id)=> {
    	expect(browser.isExisting(`#${id}`)).to.be.true;
    });
    When(/^I click sign in button and enter email as "([^"]*)?"$/, async (email)=> {
    	await browser.click("#gb_70");
    	await browser.setValue("#identifierId",email);
    });
    Then(/^I expect to ask "([^"]*)?" again$/, async (message)=> {
    	await browser.click("#identifierNext");
    	var text = await $('.WEQkZc').getText();
    	expect(text).to.include(message);
    });
    When(/^I enter "([^"]*)?" and search$/, async (keyword)=> {
    	await browser.setValue("#lst-ib",keyword);
    	await browser.keys("\uE007");
    });
    Then(/^I expect to display more than "([^"]*)?" results$/, async (num)=> {
    	const results_length=$('#rso').$$('h3').length;
    	expect(results_length).to.be.above(5);
    });
    Then(/^I first url is "([^"]*)?"$/, async (url)=> {
    	const text = $('#rso').$$('h3')[0].$('a').getText();
    	const first_url = browser.getAttribute(`=${text}`, 'href');
    	assert.equal(first_url,url);
    });
    Then(/^I verify that first click url has title "([^"]*)?"$/, async (title)=> {
    	const text = $('#rso').$$('h3')[0].$('a').getText();
    	await browser.url(browser.getAttribute(`=${text}`, 'href'));
    	const site_title = await browser.getTitle();
    	assert.equal(title,site_title);
    });
});