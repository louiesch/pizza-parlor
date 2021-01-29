// business logic -------------------------

function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.modifyPrice = function() {
  let price = 0;
  if (this.size === "small") {
    price += 10;
  } else if (this.size === "medium") {
    price += 12;
  } else if (this.size === "large") {
    price += 15;
  } else {}

  return price;
}