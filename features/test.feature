Feature: First test


Scenario: Check for the logo
	Given I navigate to "http://google.com"
	Then I expect that the logo element with id "hplogo" exist
Scenario: Check for the search entry
	Then I expect that the page has search entry field with id "gs_lc0"
Scenario: Check for sign in button
	Then I expect that the page has sign in button with id "gb_70"
Scenario: Check for the I'm Feeling Lucky button
	Then I expect that the page has I'm Feeling Lucky button with id "gbqfbb"
Scenario: Check for invalid credential
	Given I navigate to "http://google.com"
	When I click sign in button and enter email as "ksk@gmail.com"
	Then I expect to ask "Email or phone" again
Scenario: Search for fullscreen on google
	Given I navigate to "http://google.com"
	When I enter "fullscreen" and search
	Then I expect to display more than "5" results
Scenario: Verify first url
	Then I first url is "https://fullscreenmedia.co/"
Scenario: verify first click website to fullscreen
	Then I verify that first click url has title "Fullscreen | CREATE DIFFERENTLY"

