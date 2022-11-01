const { I,And } = inject();
// Add in your custom step files

Given('I have products in my cart', (table) => { // eslint-disable-line
  for (const id in table.rows) {
    if (id == 0) {
      const cells = table.rows[id].cells;
      const link = cells[0].value;

      I.amOnPage(link)
      I.click('//*[@id="options"]/div/div[4]/button') //Clicking add to cart
      I.click('//*[@id="__next"]/header/div/div/a[2]') //Going to cart page
      I.see('Product 3');
      //I.click('//*[@id="__next"]/main/div/div[2]/div/div[1]/div[1]/div/div[2]/a/h6')//Clicking top element
      //pause();
      //I.click('//*[@id="__next"]/main/div/div[2]/div/div[1]/div[1]/button') //Deleting top element
    }

    if (id == 1){
      const cells = table.rows[id].cells;
      const link = cells[0].value;

      //I.amOnPage('https://demo.reactstorefront.io')
      I.amOnPage(link)
      I.click('//*[@id="options"]/div/div[4]/button') //Clicking add to cart
      I.click('//*[@id="__next"]/header/div/div/a[2]') //Going to cart page
      //I.waitForClickable;
      //I.see('My Cart');
      //pause();
      //I.see('Product 7');
    }

  }
});

When('I click cart logo',()=>{
  I.seeElement('//*[@id="__next"]/header/div/div/a[2]')
  I.click('//*[@id="__next"]/header/div/div/a[2]')
  //pause()
  //*[@id="__next"]/header/div/div/a[2]
});

Then('I should see added products',()=>{
  //I.see('My Cart');
  
  I.see('Product 3');
  I.see('Product 7');
  
});
