App.Cart = DS.Model.extend({
  item: DS.hasMany("item", { async: true } ),
  order: DS.belongsTo("order")
})

App.Cart.FIXTURES = [
  {
    id: 1

  }
]