const { I,And } = inject();
// Add in your custom step files

Given('I am on the cart page', () => {
  // TODO: replace with your own step
  //I.amOnPage('https://demo.reactstorefront.io/p/3')
  //I.click('//*[@id="options"]/div/div[4]/button') //Clicking add to cart
  //I.amOnPage('https://demo.reactstorefront.io/p/7')
  //I.click('//*[@id="options"]/div/div[4]/button') //Clicking add to cart
  //I.click('//*[@id="__next"]/header/div/div/a[2]') //Going to cart page
  I.amOnPage('https://demo.reactstorefront.io/cart')
  //I.see('React Storefront');
  //pause();
});

When('There are no products',()=>{

  //pause()
  //I.click('//*[@id="__next"]/main/div/div[2]/div/div[1]/div[1]/div/div[2]/a/h6')
  I.see('My Cart (0 items)');
  //pause()

});

Then('I should not see checkout button',()=>{
  //I.seeElement('//*[@id="info"]/div[1]/div/div[2]/span')
  //I.waitForElement('//*[@id="__next"]/main/div/div[1]/h6', 30);
  //I.seeInCurrentUrl('https://demo.reactstorefront.io/cart');
  //pause()
  I.dontSeeElement('//*[@id="__next"]/main/div/div[2]/div/div[2]/div/a/span[1]'); // checkout button
  //I.see('My Cart', '//*[@id="__next"]/main/div/div[1]/h6');
});
