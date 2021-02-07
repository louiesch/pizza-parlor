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


  //toppings.length for loop
//if (this.toppings.length > 0)
// for (i;)

  if(this.toppings === "pepperoni") { //includes
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

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

// user interface logic ---------------------
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    let inputSize = $("input:radio[name=size]:checked").val();
    let inputToppings = [];
    let newPizza = new Pizza(inputSize, inputToppings);
    $("input:checkbox[name=toppings]:checked").each(function() {
      let toppingsPicked = $(this).val();
      newPizza.addTopping(toppingsPicked);
    });
    //let finalPrice = newPizza.modifyPrice();
    $(".pizza-price").text(newPizza.modifyPrice());
    $("#output").show()
  });
});