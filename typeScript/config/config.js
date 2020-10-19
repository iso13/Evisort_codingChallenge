"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
const reporter_1 = require("../support/reporter");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: "chrome",
        'chromeOptions': {
            useAutomationExtension: false,
            args: ['disable-infobars=true']
        }
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "../../features/dashboard.feature"
    ],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.driver.manage().timeouts().setScriptTimeout(60000);
        protractor_1.browser.manage().window().maximize();
        reporter_1.Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
    },
    onComplete: () => {
        reporter_1.Reporter.createHTMLReport();
    },
};
