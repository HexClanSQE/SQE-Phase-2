Feature: Clear Functionality
  In order to to select required product
  I will go on to the website @https://demo.reactstorefront.io/
  
   Scenario: Selection and clear all
   Given I am on the subcategory1
   When I Select the option colour,size and type And click clear all
   Then All the selected items should be cleared
