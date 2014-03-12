App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product) {
      var store = this.store;
      this.store.find("cart", 1).then( function (cart){
        var item = store.createRecord("item", {
          cart: cart,
          product: product, 
          quantity: 1,
          price: product.get("price")
        })
        cart.get("items").then( function(items) {
          items.pushObject(item)
        })
        item.save();
      });
      this.transitionTo("cart")
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id)
  }
})