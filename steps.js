const { I,And } = inject();
// Add in your custom step files

Given('I am on CATEGORY 1 Page', () => {
  // TODO: replace with your own step
  I.amOnPage('https://demo.reactstorefront.io/s/1')
});

When('I click on Product 1',()=>{
  I.seeElement('//*[@id="item-0"]/div/div[1]/a/div')
  I.click('//*[@id="item-0"]/div/div[1]/a/div')
});

Then('I should see Product 1 Description',()=>{
  I.seeElement('//*[@id="info"]/div[1]/div/div[2]/span')
});


Given('I am on Category 1 Page',()=> {
  I.amOnPage('https://demo.reactstorefront.io/s/1')
})

Then('I should see Product 1',()=>{
  I.seeElement('//*[@id="item-0"]/div/div[1]/a/div')
})