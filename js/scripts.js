// business logic -------------------------

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.modifyPrice = function() {
  let price = 10
  if (this.size === "small") {
    price += 0;
  } else if (this.size === "medium") {
    price += 2;
  } else if (this.size === "large") {
    price += 5;
  } else {};

  if(this.toppings === "pepperoni") {
    price += 1;
  } else {
  };
  if(this.toppings === "canadian-bacon") {
    price += 1;
  } else {
  };
  if(this.toppings === "olives") {
    price += 1;
  } else {
  };
  if(this.toppings === "mushrooms") {
    price += 1;
  } else {
  };
  if(this.toppings === "extra-cheese") {
    price += 1;
  } else {
  };
  return price;
};

// Pizza.prototype.addToppings = function(topping) {
//   this.toppings.push(topping);
// }

// user interface logic ---------------------
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    let inputSize = $("input:radio[name=size]:checked").val();
    let inputToppings = $("input:checkbox[name=toppings]:checked").val();
    let newPizza = new Pizza(inputSize, inputToppings);
    let finalPrice = newPizza.modifyPrice();
    $(".pizza-price").text(finalPrice);
    $("#output").show()
  });
});