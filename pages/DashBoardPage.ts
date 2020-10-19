import { $, ElementFinder, element, by } from "protractor";

export class DashBoardPage {
    public elementIdentifier: any;

    constructor(elementName) {
        switch (elementName) {

            case "btnAddUser":
                this.elementIdentifier = element(by.xpath("//button[contains(@type,'add')]"));
                break;
            case "txtBoxFirstName":
                this.elementIdentifier = element(by.name("FirstName"));
                break;
            case "txtBoxLastName":
                this.elementIdentifier = element(by.name("LastName"));
                break;
            case "txtBoxUserName":
                this.elementIdentifier = element(by.name("UserName"));
                break;
            case "txtBoxPassword":
                this.elementIdentifier = element(by.name("Password"));
                break;
            case "rbtnCustomer":
                this.elementIdentifier = element(by.xpath("//input[@value='15']"));
                break;
            case "ddRole":
                this.elementIdentifier = element(by.name("RoleId"));
                break;
            case "txtBoxEmail":
                this.elementIdentifier = element(by.name("Email"));
                break;
            case "txtBoxCellPhone":
                this.elementIdentifier = element(by.name("Mobilephone"));
                break;
            case "btnSave":
                this.elementIdentifier = element(by.xpath("//button[contains(text(),'Save')]"));
                break;
            case "btnOK":
                this.elementIdentifier = element(by.xpath("//button[contains(text(),'OK')]"));
                break;
            default:
                console.log(elementName + "element not found");
                break;
        }
    }
}


