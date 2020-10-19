"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashBoardPage = void 0;
const protractor_1 = require("protractor");
class DashBoardPage {
    constructor(elementName) {
        switch (elementName) {
            case "btnAddUser":
                this.elementIdentifier = protractor_1.element(protractor_1.by.xpath("//button[contains(@type,'add')]"));
                break;
            case "txtBoxFirstName":
                this.elementIdentifier = protractor_1.element(protractor_1.by.name("FirstName"));
                break;
            case "txtBoxLastName":
                this.elementIdentifier = protractor_1.element(protractor_1.by.name("LastName"));
                break;
            case "txtBoxUserName":
                this.elementIdentifier = protractor_1.element(protractor_1.by.name("UserName"));
                break;
            case "txtBoxPassword":
                this.elementIdentifier = protractor_1.element(protractor_1.by.name("Password"));
                break;
            case "rbtnCustomer":
                this.elementIdentifier = protractor_1.element(protractor_1.by.xpath("//input[@value='15']"));
                break;
            case "ddRole":
                this.elementIdentifier = protractor_1.element(protractor_1.by.name("RoleId"));
                break;
            case "txtBoxEmail":
                this.elementIdentifier = protractor_1.element(protractor_1.by.name("Email"));
                break;
            case "txtBoxCellPhone":
                this.elementIdentifier = protractor_1.element(protractor_1.by.name("Mobilephone"));
                break;
            case "btnSave":
                this.elementIdentifier = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Save')]"));
                break;
            case "btnOK":
                this.elementIdentifier = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'OK')]"));
                break;
            default:
                console.log(elementName + "element not found");
                break;
        }
    }
}
exports.DashBoardPage = DashBoardPage;
