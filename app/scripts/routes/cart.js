App.CartRoute = Ember.Route.extend({
  actions: {
    more: function (item) {
      item.incrementProperty("quantity");
      item.save();
    },
    less: function (item) {
      var q = item.get("quantity")
      if(q > 0)
        item.decrementProperty("quantity")
        item.save();
    },
    deleteItem: function (item) {
      this.store.find("cart", localStorage.cartId).then( function (cart){
        cart.get("items").then( function(items){
          items.removeObject(item)
          item.deleteRecord()
          item.save();
        })
      });
    }  
  },
  model: function () {
    return this.modelFor("application")
  }
})