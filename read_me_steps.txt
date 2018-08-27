In the root directory
Step 1: npm install
Step 2: cd node_modules/.bin
Step 3: wdio config
Step 4:
	Ans as below:
Where do you want to execute your tests? On my local machine
Which framework do you want to use? cucumber
Shall I install the framework adapter for you? Yes
Where are your feature files located? ../../features/**/*.feature
Where are your step definitions located? ../../features/step-definitions/test-steps.js
Which reporter do you want to use?  spec - https://github.com/webdriverio/wdio-spec-reporter
Shall I install the reporter library for you? Yes
Do you want to add a service to your test setup?  selenium-standalone - https://github.com/webdriverio/wdio-selenium-standalone-service
Shall I install the services for you? Yes
Level of logging verbosity silent
In which directory should screenshots gets saved if a command fails? ./errorShots/
What is the base url? http://localhost
after this step a file named "wdio.conf.js" will be creted in .bin directory
Step 5: Please make a change in "wdio.conf.js" file under .bin directory
	Change the browser name to "chrome" as it is "firefox" by default 
Step 6: wdio wdio.conf.js  to run the tests, this step will take a while to run