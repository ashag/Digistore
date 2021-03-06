App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product) {
      var store = this.store;
      var cart = this.modelFor("application");
      cart.get("items").then( function(items){
        return  items.find( function(item) {
          return item.get("product").get("id") == product.get("id")
        })
      }).then(function (item) {
        if(item) {
         item.incrementProperty("quantity")
         item.save();
        } else {
          var item = store.createRecord("item", {
            cart: cart,
            product: product,
            quantity: 1, 
            price: product.get("price")
          });
          cart.get("items").pushObject(item);
          item.save();
        }
      });
      this.transitionTo("cart")
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id)
  }
})