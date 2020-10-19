import { Given } from "cucumber";
import { browser, protractor, element, by, $ } from "protractor";
import { utility } from "../stepdefinitions/utility";
import { actionClass } from "../support/actions";
var testData = require("../../data/testData.json");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const assert = chai.assert;
const { When, Then } = require("cucumber");

const action: actionClass = new actionClass();
const utils: utility = new utility();

Given(/^Open AngularJS web page "(.+)"$/, { timeout: 120 * 1000 }, async (url) => {
    await browser.get(testData[url]);
});

When(/^user clicks on "(.+)" in "(.+)" page$/, { timeout: 120 * 1000 }, async (elementName, pageName) => {
    await utils.getPageElement(elementName, pageName)
    await action.clickOnItem(utils.element);
});

When(/^Enter Personal Information in Form Fields$/, { timeout: 120 * 1000 }, async (dataTable) => {
    var rows = dataTable.hashes();


    if (typeof rows[0].FirstName != "undefined") {
        await utils.getPageElement("txtBoxFirstName", "DashBoard")
        await action.enterText(utils.element, rows[0].FirstName);
    }
    else {
        assert.fail("Data table input values are in correct");
    }

    if (typeof rows[0].LastName != "undefined") {
        await utils.getPageElement("txtBoxLastName", "DashBoard")
        await action.enterText(utils.element, rows[0].LastName);
    }
    else {
        assert.fail("Data table input values are in correct");
    }

    if (typeof rows[0].UserName != "undefined") {
        await utils.getPageElement("txtBoxUserName", "DashBoard")
        await action.enterText(utils.element, rows[0].UserName);
    }
    else {
        assert.fail("Data table input values are in correct");
    }

    if (typeof rows[0].Password != "undefined") {
        await utils.getPageElement("txtBoxPassword", "DashBoard")
        await action.enterText(utils.element, rows[0].Password);
    }
    else {
        assert.fail("Data table input values are in correct");
    }

    if (typeof rows[0].Customer != "undefined") {
        await utils.getPageElement("rbtnCustomer", "DashBoard")
        await action.clickOnItem(utils.element);
    }
    else {
        assert.fail("Data table input values are in correct");
    }

    if (typeof rows[0].Role != "undefined") {
        await utils.getPageElement("ddRole", "DashBoard")
        await action.clickOnItem(utils.element);
        let ddOption = element(by.xpath("//option[contains(text(),'" + rows[0].Role + "')]"));
        await action.clickOnItem(ddOption);
    }
    else {
        assert.fail("Data table input values are in correct");
    }

    if (typeof rows[0].Email != "undefined") {
        await utils.getPageElement("txtBoxEmail", "DashBoard")
        await action.enterText(utils.element, rows[0].Email);
    }
    else {
        assert.fail("Data table input values are in correct");
    }

    if (typeof rows[0].CellPhone != "undefined") {
        await utils.getPageElement("txtBoxCellPhone", "DashBoard")
        await action.enterText(utils.element, rows[0].CellPhone);
    }
    else {
        assert.fail("Data table input values are in correct");
    }


});

Given(/^user should see "(.+)" in "(.+)" page$/, { timeout: 120 * 1000 }, async (elementName, pageName) => {
    await utils.getPageElement(elementName, pageName)
    await action.displayed(utils.element);

});

Then(/^User Details Should be added to the Table$/, { timeout: 120 * 1000 }, async (dataTable) => {
    var rows = dataTable.hashes();

    if (typeof rows[0].FirstName != "undefined") {        
        let firstName=element(by.xpath("//tr[@ng-repeat='dataRow in displayedCollection']//td[1][contains(text(),'"+rows[0].FirstName+"')]"))
        await action.displayed(firstName);
    }
    else {
        assert.fail("First Name is not displayed");
    }
    if (typeof rows[0].UserName != "undefined") {        
        let userName=element(by.xpath("//tr[@ng-repeat='dataRow in displayedCollection']//td[3][contains(text(),'"+rows[0].UserName+"')]"))
        await action.displayed(userName);
    }
    else {
        assert.fail("First Name is not displayed");
    }
    if (typeof rows[0].Email != "undefined") {        
        let email=element(by.xpath("//tr[@ng-repeat='dataRow in displayedCollection']//td[7][contains(text(),'"+rows[0].Email+"')]"))
        await action.displayed(email);
    }
    else {
        assert.fail("Email is not displayed");
    }
});

Given(/^User able to delete$/, { timeout: 120 * 1000 }, async (dataTable) => {
    var rows = dataTable.hashes();

    if (typeof rows[0].UserName != "undefined") {                
        let userName=element(by.xpath("//tr[@ng-repeat='dataRow in displayedCollection']//td[3][contains(text(),'"+ rows[0].UserName +"')]"))
        await action.displayed(userName);
        let deleteIcon=element(by.xpath("//tr[@ng-repeat='dataRow in displayedCollection']//td[3][contains(text(),'"+ rows[0].UserName +"')]/ancestor::tr//td[11]//button"))
        await action.clickOnItem(deleteIcon);
        await utils.getPageElement("btnOK", "DashBoard")
        await action.clickOnItem(utils.element);
    }
    else {
        assert.fail("Data table input values are incorrect");
    }
});

Then(/^User should be deleted$/, { timeout: 120 * 1000 }, async (dataTable) => {
    var rows = dataTable.hashes();

    if (typeof rows[0].UserName != "undefined") {        
        let userName=element(by.xpath("//tr[@ng-repeat='dataRow in displayedCollection']//td[3][contains(text(),'"+rows[0].UserName+"')]"))
        await action.isNotDisplayed(userName);       
    }
    else {
        assert.fail("Data table input ssvalues are in correct");
    }
});

