App.CartNewRoute = Ember.Route.extend({
  actions: {
   createOrder: function (attributes) {
      var order = this.store.createRecord("order", attributes)
      var self = this.store;
      this.store.find("cart", localStorage.cartId).then(function(cart){
        order.set("cart", cart)
        order.save().then(function(order) {
          self.transitionTo("confirmation").then(function() {
            localStorage.removeItem("cartId");
            var cart = self.store.createRecord("cart");
            cart.save().then(function(cart) {
              localStorage.cartId = cart.id;
            })
          })
        })
      })
    }
  },
  model: function () {
    return {};
  }
});