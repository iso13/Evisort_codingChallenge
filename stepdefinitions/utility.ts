import { $, ElementFinder, element, by } from "protractor";
import { DashBoardPage } from "../pages/DashBoardPage";


export class utility {
    public elementIdentifier: any;
    public element: any;

    constructor() {
    }

    async getPageElement(elementName, pageName) {
        switch (pageName) {
            case "DashBoard":
                const DashBoard: DashBoardPage = new DashBoardPage(elementName);
                this.element = DashBoard.elementIdentifier;
                break;
           
            default:
                console.log(pageName + "page not found");
                break;
        }
    }
}



