App.Order = DS.Model.extend({
  cart: DS.belongsTo("cart"),
  customerName: DS.attr("string"),
  email: DS.attr("string"),
  total: DS.attr("number"),
  status: DS.attr("string"),
  cc_info: DS.attr("string"),
  cc_cvv: DS.attr("string"),
  cc_exp: DS.attr("string"),
  zip_code: DS.attr("string"),
  transaction: DS.attr("string")
})

// App.Order.FIXTURES = [
//   {
//     id: 1,
//     cart: 1,
//     customerName: "asha",
//     email: "ag@gmail.com",
//     total: 100,
//     status: "closed",
//     cc_info: "298374972394729387498234",
//     cc_zip: "98102",
//     transaction: "912837"
//   }
// ]