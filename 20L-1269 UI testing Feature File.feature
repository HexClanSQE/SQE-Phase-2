Feature: Searching Product Results
  In order to Find product's Results
  I will visit the website @https://demo.reactstorefront.io/
  And I will search product by it's name
  and I will navigate to the particular product page

  Scenario Outline: Searching products by providing name
  Given I am on Home Page
  When I type "<text>" for the product
  Then I am on the url of "<Producttext>" 
   Examples:
      | text | Producttext |
      | Junaid | https://demo.reactstorefront.io/search?q=Junaid | 
      | Ali  | https://demo.reactstorefront.io/search?q=Ali | 
      | Lux   | https://demo.reactstorefront.io/search?q=Lux | 
      | Olpers   | https://demo.reactstorefront.io/search?q=Olpers | 
      | Headphones | https://demo.reactstorefront.io/search?q=Headphones |




