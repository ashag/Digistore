App.ProductRoute = Ember.Route.extend({
  actions: {
    addToCart: function (product) {
      this.store.createRecord("item", {
        product: product, 
        quantity: 1
      });
      this.transitionTo("cart")
    }
  },
  model: function (params) {
    return this.store.find("product", params.product_id)
  }
})