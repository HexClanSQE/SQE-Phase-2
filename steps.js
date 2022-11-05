const { I,And } = inject();
// Add in your custom step files

Given('I am on the category page', () => {
  // TODO: replace with your own step
  
  I.amOnPage('https://demo.reactstorefront.io/s/1?color=red&size=sm&type=new&sort=price_asc')
  I.seeInTitle('Subcategory 1');
});

When('I click clear all',()=>{
  I.seeElement('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[2]/div[1]/div[2]/div/div/div/div/div/div[1]/button')
  I.click('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[2]/div[1]/div[2]/div/div/div/div/div/div[1]/button')
  I.seeElement('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[2]/div[2]/div[2]/div/div/div/div/div/button[1]')
  I.click('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[2]/div[2]/div[2]/div/div/div/div/div/button[1]')
  I.seeElement('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[2]/div[3]/div[2]/div/div/div/div/div/label[1]/span[1]/span[1]/input')
  I.click('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[2]/div[3]/div[2]/div/div/div/div/div/label[1]/span[1]/span[1]/input')
  I.seeElement('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[1]/button')
  I.click('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[1]/button')
});

Then('I should see the unselect Items',()=>{
  I.amOnPage('https://demo.reactstorefront.io/s/1?sort=price_asc')
  I.seeElement('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[2]/div[1]/div[2]/div/div/div/div/div/div[1]/button')
 //I.click('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[2]/div[1]/div[2]/div/div/div/div/div/div[1]/button')
 I.seeElement('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[2]/div[2]/div[2]/div/div/div/div/div/button[1]')
 //I.click('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[2]/div[2]/div[2]/div/div/div/div/div/button[1]')
 I.seeElement('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[2]/div[3]/div[2]/div/div/div/div/div/label[1]/span[1]/span[1]/input')
 //I.click('//*[@id="__next"]/main/div/div[2]/div[1]/div/div/div[2]/div[3]/div[2]/div/div/div/div/div/label[1]/span[1]/span[1]/input')
});