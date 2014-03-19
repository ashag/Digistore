App.ProductRoute = Ember.Route.extend({
  actions: {
    // findOrCreate: function (product) {
    //   this.store.find("cart", localStorage.cartId).then( function (cart){
    //     if(cart.get("items") == product)
          
    //     })
    //   })
    // },

    addToCart: function (product) {
      var store = this.store;
      // localStorage.cartId = 1
      this.store.find("cart", localStorage.cartId).then( function (cart){
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