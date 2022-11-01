const { I,And } = inject();
// Add in your custom step files

Given('I am on the home page', () => {
  // TODO: replace with your own step
  I.amOnPage('https://demo.reactstorefront.io/')
  I.see('React Storefront');
  //pause();
});

When('I click cart logo',()=>{
  I.seeElement('//*[@id="__next"]/header/div/div/a[2]')
  I.click('//*[@id="__next"]/header/div/div/a[2]')
  //pause()
  //*[@id="__next"]/header/div/div/a[2]
});

Then('I should see the cart page',()=>{
  //I.amOnPage('https://demo.reactstorefront.io/cart')
  //I.seeElement('//*[@id="info"]/div[1]/div/div[2]/span')
  I.waitForElement('//*[@id="__next"]/main/div/div[1]/h6', 30);
  //I.seeInCurrentUrl('https://demo.reactstorefront.io/cart');
  I.see('My Cart');
  //I.see('My Cart', '//*[@id="__next"]/main/div/div[1]/h6');
  //I.seeElement('//*[@id="__next"]/main/div/div[1]/h6')
  //I.seeInTitle('https://demo.reactstorefront.io/cart');
  
});


Given('I am on the category page', () => {
  // TODO: replace with your own step
  I.amOnPage('https://demo.reactstorefront.io/s/2')
  I.seeInTitle('Subcategory 2');
});

When('I click cart logo',()=>{
  I.seeElement('//*[@id="__next"]/header/div/div/a[2]')
  I.click('//*[@id="__next"]/header/div/div/a[2]')
});

Then('I should see the cart page',()=>{
  //I.amOnPage('https://demo.reactstorefront.io/cart')
  I.waitForElement('//*[@id="__next"]/main/div/div[1]/h6', 30);
  I.see('My Cart');
});


//Given('I am on Category 1 Page',()=> {
//  I.amOnPage('https://demo.reactstorefront.io/s/1')
//})

//Then('I should see Product 1',()=>{
//  I.seeElement('//*[@id="item-0"]/div/div[1]/a/div')
//})





// use I and productPage via inject() function
//const { I, productPage } = inject();

// you can provide RegEx to match corresponding steps
//Given(/I have product with \$(\d+) price/, (price) => {
//  I.amOnPage('/products');
//  productPage.create({ price });
//  I.click('Add to cart');
//});

// or a simple string
//When('I go to checkout process', () => {
//  I.click('Checkout');
//});

// parameters are passed in via Cucumber expressions
//Then('I should see that total number of products is {int}', (num) => {
//  I.see(num, '.cart');
//});
//Then('my order amount is ${int}', (sum) => { // eslint-disable-line
//  I.see('Total: ' + sum);
//});