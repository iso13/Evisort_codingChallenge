Feature: Validate User Data for Angular Web table

    Background: common steps for way2Automation page
        Given Open AngularJS web page "way2AutomationUrl"

    Scenario:  Add a user and validate the user has been added to the table
        Given user should see "btnAddUser" in "DashBoard" page
        When user clicks on "btnAddUser" in "DashBoard" page
        And Enter Personal Information in Form Fields
            | FirstName | LastName | UserName | Password | Customer | Role       | Email          | CellPhone  |
            | keerthy   | Bandi    | kbandi   | password | 1        | Sales Team | test@gmail.com | 9999999999 |
        When user clicks on "btnSave" in "DashBoard" page
        Then User Details Should be added to the Table
            | FirstName | UserName | Email          |
            | keerthy   | kbandi   | test@gmail.com |

    Scenario: Delete user User Name: novak and validate user has been deleted
        Given user should see "btnAddUser" in "DashBoard" page
        And User able to delete
            | UserName |
            | novak    |
        Then User should be deleted
            | UserName |
            | novak    |

