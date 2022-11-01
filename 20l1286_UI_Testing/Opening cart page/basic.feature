Feature: Going to cart page
  In order to Visit cart's page
  I will go on to the website @https://demo.reactstorefront.io/

  Scenario: Going to cart page from home page
    Given I am on the home page
    When I click cart logo
    Then I should see the cart page

  Scenario: Going to cart page from category page
    Given I am on the category page
    When I click cart logo
    Then I should see the cart page

