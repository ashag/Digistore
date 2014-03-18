App.CartRoute = Ember.Route.extend({
  actions: {
    more: function (item) {
      item.incrementProperty("quantity");
    },
    less: function (item) {
      var q = item.get("quantity")
      if(q > 0)
        item.decrementProperty("quantity")
      end
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