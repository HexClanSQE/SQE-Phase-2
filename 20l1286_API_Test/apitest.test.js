const frisby = require('frisby');

it ('Add to Cart Test', function () {
  return frisby
  .setup({
    request: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }, true)
    .post('https://demo.reactstorefront.io/api/cart/add', {
      product: {
        id:1,
        url: "/p/1", 
        name: "Product 1",
         price: 10.99,
         priceText: "$10.99", 
         rating: 4.5
      },
      quantity: 1
    })
    .expect('status', 200)
    .expect('jsonTypes', 'cart.items.*', { // Assert *each* object in 'items' array
      'id': 1,
      'url':"/p/1",
      'name':"Product 1",
      'price':10.99,
      'rating':4.5
    });  
});