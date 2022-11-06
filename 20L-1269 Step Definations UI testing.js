const { I,And } = inject();
// Add in your custom step files

Given('I am on Home Page', () => {
  // TODO: replace with your own step
  I.amOnPage('https://demo.reactstorefront.io/')
});

When('I type {string} for the product',(text)=>{

  I.seeElement('//*[@id="search-desktop"]/form/div[1]/div/input')
  I.fillField('//*[@id="search-desktop"]/form/div[1]/div/input', text)
});

Then('I am on the url of {string}',(Producttext)=>{
  I.amOnPage(Producttext)
});
