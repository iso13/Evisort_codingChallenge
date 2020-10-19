"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionClass = void 0;
const protractor_1 = require("protractor");
const assert = require("assert");
var EC = protractor_1.protractor.ExpectedConditions;
class actionClass {
    clickOnItem(elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.elementToBeClickable(elementName), 15000).then(function (isClickable) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (isClickable) {
                        yield elementName.click();
                    }
                    else {
                        assert.fail("element: " + elementName + " is not clickable");
                    }
                });
            }).catch((err) => __awaiter(this, void 0, void 0, function* () {
                assert.fail("element: " + elementName + " is not clickable", err);
            }));
        });
    }
    enterText(elementName, textToEnter) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(elementName), 30000).then(function (isVisible) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (isVisible) {
                        yield elementName.clear();
                        yield elementName.sendKeys(textToEnter);
                    }
                    else {
                        assert.fail("element: " + elementName + " is not visible");
                    }
                });
            }).catch((err) => __awaiter(this, void 0, void 0, function* () {
                assert.fail("Not able to enter the values in  " + elementName + "  ", err);
            }));
        });
    }
    displayed(elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(elementName), 15000).then(function (isVisible) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (isVisible) {
                        assert.ok(elementName + " displayed");
                    }
                    else {
                        assert.fail("element: " + elementName + " is not visible");
                    }
                });
            }).catch((err) => __awaiter(this, void 0, void 0, function* () {
                assert.fail("Expected element not displayed " + elementName + "  ", err);
            }));
        });
    }
    isNotDisplayed(elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(elementName), 5000).then(function (isVisible) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (isVisible) {
                        assert.fail(elementName + " displayed");
                    }
                    else {
                        assert.ok("element: " + elementName + " is not visible");
                    }
                });
            }).catch(() => __awaiter(this, void 0, void 0, function* () {
                assert.ok("Expected element not displayed " + elementName + "  ");
            }));
        });
    }
}
exports.actionClass = actionClass;
