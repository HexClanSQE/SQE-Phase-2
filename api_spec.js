
const frisby = require('frisby');

it ('Remove from the cart', function () {
  return frisby
  .setup({
    request: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }, true)
    .post('https://demo.reactstorefront.io/api/cart/remove', {
      item: {
        id:2,
        url: "/p/1", 
        name: "Product 2",
         price: 20.99,
         priceText: "$20.99", 
         rating: 4
      }
     
    })
    .expect('status', 200)
    .expect('jsonTypes', '*', {})
    
      
    });
    
      
