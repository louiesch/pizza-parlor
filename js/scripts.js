// business logic -------------------------

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.modifyPrice = function() {
  if (this.size === "small") {
    this.price += 10;
  } else if (this.size === "medium") {
    this.price += 12;
  } else if (this.size === "large") {
    this.price += 15;
  } else {};

  if(this.toppings.includes("pepperoni")) {
    this.price += 1;
  };
  if(this.toppings.includes("canadian-bacon")) {
    this.price += 1;
  };
  if(this.toppings.includes("olives")) {
    this.price += 1;
  };
  if(this.toppings.includes("mushrooms")) {
    this.price += 1;
  };
  if(this.toppings.includes("extra-cheese")) {
    this.price += 1;
  };
  return this.price;
};

// user interface logic ---------------------
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
  })
})