App.Cart = DS.Model.extend({
  items: DS.hasMany("item", { async: true } ),
  order: DS.belongsTo("order"),
  total: function() {
    var items = this.get("items");
    var taxTotal = items.map(function(item) {
      return item.get("taxTotal");
    });
    var total = taxTotal.reduce(function(previousValue, currentValue){
      return previousValue + currentValue;
    },0);
    return total;
  }.property("items.@each.taxTotal")
});

// App.Cart.FIXTURES = [
//   {
//     id: "fixture-0"
//   }
// ]