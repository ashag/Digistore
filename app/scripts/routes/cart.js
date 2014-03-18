App.CartRoute = Ember.Route.extend({
  actions: {
    more: function (item) {
      item.incrementProperty("quantity");
    },
    less: function (item) {
      item.decrementProperty("quantity");
    },
    deleteItem: function (item) {
      this.store.find("cart", localStorage.cartId).then( function (cart){
        cart.get("items").then( function(items){
          items.removeObject(item)
          item.deleteRecord()
        })
      });
    }  
  },
  model: function () {
    return this.modelFor("application")
  }
})