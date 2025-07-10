Feature: SwagLabs E2E Tests

    Feature covering the SwagLabs homepages functionality
    Background:  
    Given user is on the SwagLabs login page
   When user inputs username - "standard_user"
   And user inputs password - "secret_sauce"
   And user clicks on the login button
   Then user sees Products page
    # Scenario: User succesfully logs in SwagLabs profile
    #     Given user is on the SwagLabs login page
    #     When user inputs username - "standard_user"
    #     And user inputs password - "secret_sauce"
    #     And user clicks on the login button
    #     Then user sees Products page

    # Scenario: User succesfully logs in SwagLabs profile
    #     Given user is on the SwagLabs login page
    #     When user inputs username - "problem_user"
    #     And user inputs password - "secret_sauce"
    #     And user clicks on the login button
    #     Then user sees Products page

    # Scenario Outline: User handles SwagLabs profile authorization
    #     Given user is on the SwagLabs login page
    #     When user inputs username - "<username>"
    #     And user inputs password - "<password>"
    #     And user clicks on the login button
    #     Then user sees Products page
       

    #     Examples:
    #         | username         | password     | 
    #         | standard_user    | secret_sauce | 

Scenario: SORT PRODUCTS BY NAME (Z-A)
#    Given user is on the SwagLabs login page
#    When user inputs username - "<username>"
#    And user inputs password - "<password>"
#    And user clicks on the login button
#    Then user sees Products page
   Then user clicks on the Sorting button
   When user chooses to sort by "<sorting>"
   Then user sees product "<productName>"

    Examples:
            | sorting       | productName                          | 
            | Name (Z to A) | Test.allTheThings() T-Shirt (Red)|


@WIP @JIRA-6377 @REGRESSION
Scenario: Validate Selected Product Item Details
    When user selects product item - "Sauce Labs Bolt T-Shirt"
    Then user sees correct product details
    
# @DATA_TABLE
# Scenario: Checking data tables
#     When user selects product item - "Sauce Labs Bolt T-Shirt"
    # Then user checks data table
    #  | test1 | test2 |
    #  | test3 | test4 |
    #/////////////////////////////////
    #  Then user checks data table
    #     | Vegetable | Price |
    #     | Apple     | 1.30$ |
    #     | Orange    | 2.50$ |
    #/////////////////////////////////
    # Then user checks data table
    #     | Apple     | 1.30$ |
    #     | Orange    | 2.50$ |
    #/////////////////////////////////
    #  Then user checks data table
    #     | Fruit     | Price |
    #     | Apple     | 1.30$ |
    #     | Orange    | 2.50$ |