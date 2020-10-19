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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const utility_1 = require("../stepdefinitions/utility");
const actions_1 = require("../support/actions");
var testData = require("../../data/testData.json");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const assert = chai.assert;
const { When, Then } = require("cucumber");
const action = new actions_1.actionClass();
const utils = new utility_1.utility();
cucumber_1.Given(/^Open AngularJS web page "(.+)"$/, { timeout: 120 * 1000 }, (url) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(testData[url]);
}));
When(/^user clicks on "(.+)" in "(.+)" page$/, { timeout: 120 * 1000 }, (elementName, pageName) => __awaiter(void 0, void 0, void 0, function* () {
    yield utils.getPageElement(elementName, pageName);
    yield action.clickOnItem(utils.element);
}));
When(/^Enter Personal Information in Form Fields$/, { timeout: 120 * 1000 }, (dataTable) => __awaiter(void 0, void 0, void 0, function* () {
    var rows = dataTable.hashes();
    if (typeof rows[0].FirstName != "undefined") {
        yield utils.getPageElement("txtBoxFirstName", "DashBoard");
        yield action.enterText(utils.element, rows[0].FirstName);
    }
    else {
        assert.fail("Data table input values are in correct");
    }
    if (typeof rows[0].LastName != "undefined") {
        yield utils.getPageElement("txtBoxLastName", "DashBoard");
        yield action.enterText(utils.element, rows[0].LastName);
    }
    else {
        assert.fail("Data table input values are in correct");
    }
    if (typeof rows[0].UserName != "undefined") {
        yield utils.getPageElement("txtBoxUserName", "DashBoard");
        yield action.enterText(utils.element, rows[0].UserName);
    }
    else {
        assert.fail("Data table input values are in correct");
    }
    if (typeof rows[0].Password != "undefined") {
        yield utils.getPageElement("txtBoxPassword", "DashBoard");
        yield action.enterText(utils.element, rows[0].Password);
    }
    else {
        assert.fail("Data table input values are in correct");
    }
    if (typeof rows[0].Customer != "undefined") {
        yield utils.getPageElement("rbtnCustomer", "DashBoard");
        yield action.clickOnItem(utils.element);
    }
    else {
        assert.fail("Data table input values are in correct");
    }
    if (typeof rows[0].Role != "undefined") {
        yield utils.getPageElement("ddRole", "DashBoard");
        yield action.clickOnItem(utils.element);
        let ddOption = protractor_1.element(protractor_1.by.xpath("//option[contains(text(),'" + rows[0].Role + "')]"));
        yield action.clickOnItem(ddOption);
    }
    else {
        assert.fail("Data table input values are in correct");
    }
    if (typeof rows[0].Email != "undefined") {
        yield utils.getPageElement("txtBoxEmail", "DashBoard");
        yield action.enterText(utils.element, rows[0].Email);
    }
    else {
        assert.fail("Data table input values are in correct");
    }
    if (typeof rows[0].CellPhone != "undefined") {
        yield utils.getPageElement("txtBoxCellPhone", "DashBoard");
        yield action.enterText(utils.element, rows[0].CellPhone);
    }
    else {
        assert.fail("Data table input values are in correct");
    }
}));
cucumber_1.Given(/^user should see "(.+)" in "(.+)" page$/, { timeout: 120 * 1000 }, (elementName, pageName) => __awaiter(void 0, void 0, void 0, function* () {
    yield utils.getPageElement(elementName, pageName);
    yield action.displayed(utils.element);
}));
Then(/^User Details Should be added to the Table$/, { timeout: 120 * 1000 }, (dataTable) => __awaiter(void 0, void 0, void 0, function* () {
    var rows = dataTable.hashes();
    if (typeof rows[0].FirstName != "undefined") {
        let firstName = protractor_1.element(protractor_1.by.xpath("//tr[@ng-repeat='dataRow in displayedCollection']//td[1][contains(text(),'" + rows[0].FirstName + "')]"));
        yield action.displayed(firstName);
    }
    else {
        assert.fail("First Name is not displayed");
    }
    if (typeof rows[0].UserName != "undefined") {
        let userName = protractor_1.element(protractor_1.by.xpath("//tr[@ng-repeat='dataRow in displayedCollection']//td[3][contains(text(),'" + rows[0].UserName + "')]"));
        yield action.displayed(userName);
    }
    else {
        assert.fail("First Name is not displayed");
    }
    if (typeof rows[0].Email != "undefined") {
        let email = protractor_1.element(protractor_1.by.xpath("//tr[@ng-repeat='dataRow in displayedCollection']//td[7][contains(text(),'" + rows[0].Email + "')]"));
        yield action.displayed(email);
    }
    else {
        assert.fail("Email is not displayed");
    }
}));
cucumber_1.Given(/^User able to delete$/, { timeout: 120 * 1000 }, (dataTable) => __awaiter(void 0, void 0, void 0, function* () {
    var rows = dataTable.hashes();
    if (typeof rows[0].UserName != "undefined") {
        let userName = protractor_1.element(protractor_1.by.xpath("//tr[@ng-repeat='dataRow in displayedCollection']//td[3][contains(text(),'" + rows[0].UserName + "')]"));
        yield action.displayed(userName);
        let deleteIcon = protractor_1.element(protractor_1.by.xpath("//tr[@ng-repeat='dataRow in displayedCollection']//td[3][contains(text(),'" + rows[0].UserName + "')]/ancestor::tr//td[11]//button"));
        yield action.clickOnItem(deleteIcon);
        yield utils.getPageElement("btnOK", "DashBoard");
        yield action.clickOnItem(utils.element);
    }
    else {
        assert.fail("Data table input values are incorrect");
    }
}));
Then(/^User should be deleted$/, { timeout: 120 * 1000 }, (dataTable) => __awaiter(void 0, void 0, void 0, function* () {
    var rows = dataTable.hashes();
    if (typeof rows[0].UserName != "undefined") {
        let userName = protractor_1.element(protractor_1.by.xpath("//tr[@ng-repeat='dataRow in displayedCollection']//td[3][contains(text(),'" + rows[0].UserName + "')]"));
        yield action.isNotDisplayed(userName);
    }
    else {
        assert.fail("Data table input ssvalues are in correct");
    }
}));
