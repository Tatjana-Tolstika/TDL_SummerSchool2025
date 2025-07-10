Feature: SwagLabs checkout Tests
    Feature covering the SwagLabs homepages functionality

    Background:  
        Given user is on the SwagLabs login page
        When user inputs username - "standard_user"
        And user inputs password - "secret_sauce"
        And user clicks on the login button
        Then user sees Products page


    @FINAL_TASK
    Scenario:  Add Products Items To Cart
        Then user selects product item - "<productName>"
        When user clicks on the add to cart button
        And user clicks on the cart button
        Then user sees his chosen item
        When user clicks on checkout button
        Then user is on the checkout page
        When user inputs first name - "<firstName>"
        And user inputs last name - "<lastName>"
        And user inputs postal code - "<postalCode>"
        And user clicks on continue button
        Then user sees checkout information
        When user clicks on the button finish
        Then user sees succesfull order


    Examples:
        |productName          | firstName | lastName | postalCode|
        |Sauce Labs Backpack  | Name      | Surname  | LV-3601   |