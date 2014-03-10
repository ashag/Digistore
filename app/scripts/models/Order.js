App.Order = DS.Model.extend({
  cart_id: DS.attr("number"),
  name: DS.attr("string"),
  email: DS.attr("string"),
  total: DS.attr("number"),
  status: DS.attr("string")
  cc_info: DS.attr("string")
  cc_css: DS.attr("string"),
  cc_zip: DS.attr("string"),
  transaction: DS.attr("string")
})