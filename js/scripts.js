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



  if(this.toppings.includes("pepperoni")) { //includes
    price += 1;
  } else {
  };
  if(this.toppings.includes("canadian-bacon")) {
    price += 1;
  } else {
  };
  if(this.toppings.includes("olives")) {
    price += 1;
  } else {
  };
  if(this.toppings.includes("mushrooms")) {
    price += 1;
  } else {
  };
  if(this.toppings.includes("extra-cheese")) {
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
    $(".pizza-price").text(newPizza.modifyPrice());
    $("#output").show()
  });
});