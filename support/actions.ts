import { $, ElementFinder, protractor, browser, element, by } from "protractor";
import * as assert from 'assert';

var EC = protractor.ExpectedConditions;
export class actionClass {

    async clickOnItem(elementName) {
        await browser.wait(EC.elementToBeClickable(elementName), 15000).then(async function (isClickable) {
            if (isClickable) {
                await elementName.click();
            } else {

                assert.fail("element: " + elementName + " is not clickable");
            }
        }).catch(async err => {
            assert.fail("element: " + elementName + " is not clickable", err);
        });
    }
    async enterText(elementName, textToEnter) {
        await browser.wait(EC.visibilityOf(elementName), 30000).then(async function (isVisible) {
            if (isVisible) {
                await elementName.clear();
                await elementName.sendKeys(textToEnter);
            } else {
                assert.fail("element: " + elementName + " is not visible");
            }
        }).catch(async err => {
            assert.fail("Not able to enter the values in  " + elementName + "  ", err);
        });
    }

    async displayed(elementName) {
        await browser.wait(EC.visibilityOf(elementName), 15000).then(async function (isVisible) {
            if (isVisible) {
                assert.ok(elementName + " displayed");
            } else {
                assert.fail("element: " + elementName + " is not visible");
            }
        }).catch(async err => {
            assert.fail("Expected element not displayed " + elementName + "  ", err);
        });
    }

    async isNotDisplayed(elementName) {
        await browser.wait(EC.visibilityOf(elementName), 5000).then(async function (isVisible) {
            if (isVisible) {
                assert.fail(elementName + " displayed");
            } else {
                assert.ok("element: " + elementName + " is not visible");
            }
        }).catch(async () => {
            assert.ok("Expected element not displayed " + elementName + "  ");
        });
    }

}