Feature: Finding Product's Description
  In order to Find a product's Description
  I will visit the website @https://demo.reactstorefront.io/

  Scenario: Search for Product Description
    Given I am on CATEGORY 1 Page
    When I click on Product 1
    Then I should see Product 1 Description

  Scenario: Test whether the Product 1 is Available
    Given I am on CATEGORY 1 Page
    Then I should see Product 1
