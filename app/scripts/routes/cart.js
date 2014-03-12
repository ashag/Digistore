App.CartRoute = Ember.Route.extend({
  actions: {
    more: function (item) {
      item.incrementProperty("quantity");
    },
    less: function (item) {
      item.decrementProperty("quantity");
    },
    deleteItem: function (item) {
      
    }
  },
  model: function () {
    return this.store.find("cart", 1)
  }
})