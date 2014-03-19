App.Router.map(function(){
  this.route("products", { path: "/" })
  this.resource("products", function () {
    this.resource("product", { path: ":product_id" })
  })
  this.resource("cart", function () {
    this.route("new")
  })
  this.resource("order", function () {
    this.resource("order", { path: ":order_id" });
  })
  this.resource("admin")
});