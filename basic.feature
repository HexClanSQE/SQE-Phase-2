Feature: Going to cart page
  In order to Visit cart's page
  I will go on to the website @https://demo.reactstorefront.io/
  
   Scenario: Going to cart page from category page2
    Given I am on the category page
    When I click clear all
    Then I should see the unselect Items