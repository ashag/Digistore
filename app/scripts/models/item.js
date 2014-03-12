App.Item = DS.Model.extend({
  product: DS.belongsTo("product",  { async: true }),
  // async allows method item.product
  cart: DS.belongsTo("cart"),
  quantity: DS.attr("number"),
  price: DS.attr("number")
})

App.Item.FIXTURES = [
  {
    id: 1,
    product: 1,
    cart: 1,
    quantity: 1,
    price: 10
  }, {
    id: 2,
    product: 2,
    cart: 1,
    quantity: 1,
    price: 10
  }
  
]