App.Item = DS.Model.extend({
  product: DS.belongsTo("product",  { async: true }),
  cart: DS.belongsTo("cart"),
  quantity: DS.attr("number"),
  price: DS.attr("number"),
  itemTotal: function () {
    return this.get("quantity") * this.get("price")
  }.property("quantity", "price"),
  taxTotal: function() {
    return this.get("itemTotal") * 1.887
  }.property("itemTotal", "taxTotal")
})

// App.Item.FIXTURES = [
//   {
//     id: 1,
//     product: 1,
//     cart: 1,
//     quantity: 1,
//     price: 10
//   }, {
//     id: 2,
//     product: 2,
//     cart: 1,
//     quantity: 1,
//     price: 10
//   }
  
// ]