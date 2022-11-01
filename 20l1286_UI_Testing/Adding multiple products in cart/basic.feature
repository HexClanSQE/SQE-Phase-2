Feature: Adding multiple products in cart
  I will go on to the product page
  On the product page when I click "Add to cart"
  Repeat the same step for another product
  Go to cart page to verify that the products are added

  Scenario: Adding multiple products and verifing
    Given I have products in my cart
      | https://demo.reactstorefront.io/p/3     |
      | https://demo.reactstorefront.io/p/7     |
    When I click cart logo
    Then I should see added products
    