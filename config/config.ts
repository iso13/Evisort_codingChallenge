import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

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
        browser.ignoreSynchronization = true;
        browser.driver.manage().timeouts().setScriptTimeout(60000);
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};