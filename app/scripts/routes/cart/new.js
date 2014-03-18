App.CartNewRoute = Ember.Route.extend({
  actions: {
    create: function (attributes) {
      var order = this.store.createRecord("order", attributes)
      order.save();
      this.transitionTo("confirmation")
    }
  },
  model: function () {
    return {};
  }
});