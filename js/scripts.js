// business logic -------------------------

function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.pizzaPrice = function(size) {
  if (this.size === "small") {
    this.price = 10
  } else if (this.size === "medium") {
    this.price = 12
  } else {
    this.price = 15;
  }
}