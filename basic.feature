Feature: Clear Functionality
  In order to to select required product
  I will go on to the website @https://demo.reactstorefront.io/
  
   Scenario: clear all
   Given I have selected Colour,Size and Type
   When I clicked on clear all button
   Then All the selected items should be cleared
