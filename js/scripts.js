function Pizza(size, cheese, toppings, extra) {
  this.size = size;
  this.cheese = cheese;
  this.toppings = toppings;
  this.extra = extra;
  this.currentPrice = 10;
}

Pizza.prototype.toppingsPrice = function() {
  for (let i = 1; i <= this.toppings; i++) {
    this.currentPrice = this.currentPrice + .25
  };
  return this.currentPrice;
}

Pizza.prototype.extrasPrice = function() {
  for (let i = 1; i <= this.extra; i++) {
    this.currentPrice = this.currentPrice + 1;

  };
  return this.currentPrice;
}

function finalCost(pizza) {
  pizza.prototype.toppingsPrice();
  pizza.prototype.extrasPrice();
  return pizza.currentPrice;
}

// USER INTERFACE CODE 


$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    const sizeInput = $("#size").val();
    const cheeseInput = $("#cheese").val();
    const toppingInput = $("input:checkbox[name=toppings]:checked").each(function() {
      const toppingInput = $(this).val();
      $('#pizza-toppings').append(toppingInput + ", ");
    });
    const extraInput = $("input:checkbox[name=extra]:checked").each(function() {
      const extraInput = $(this).val();
      $('#pizza-extras').append(extraInput + ", ");
    });
    const toppingNum = ($("input#numToppings").val());
    const extrasNum = ($("input#numExtras").val());

    let pizza = new Pizza(sizeInput, cheeseInput, toppingNum, extrasNum);

    pizza.toppingsPrice();
    pizza.extrasPrice();

    $("#result").show();
    $("#pizza-size").text(pizza.size);
    $("#pizza-cheese").text(pizza.cheese);
    $("#pizza-price").text(pizza.currentPrice);
  });
});