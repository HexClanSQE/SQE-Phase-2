Feature: Cart Popup
  I will go on to the product page
  On the product page when I click "Add to cart"
  A popup should appear for caet

  Scenario: Cart popup appears on adding product to cart
    Given I am on the cart page
    When There are no products
    Then I should not see checkout button
    