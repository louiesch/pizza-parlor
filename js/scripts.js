// business logic -------------------------

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
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

// user interface logic ---------------------
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
  })
})