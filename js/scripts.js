function Pizza(size, cheese, toppings, extra) {
  this.size = size;
  this.cheese = cheese;
  this.toppings = toppings;
  this.extra = extra;
  this.currentPrice = 10;
}

Pizza.prototype.toppingsPrice = function(toppings){
  for(let i=1; i <=this.toppings; i ++){
    this.currentPrice = this.currentPrice+.25
    console.log(this.currentPrice);
  };
  return this.currentPrice;
}

Pizza.prototype.extrasPrice = function(extra){
  for(let i=1; i <=this.extra; i ++){
    this.currentPrice = this.currentPrice+1
    console.log(this.currentPrice);
  };
  return this.currentPrice;
}

const pizzaSize = {
  "1" : "Small",
  "2" : "Medium",
  "3" : "Large",
  "4" : "Giant",
}


// USER INTERFACE CODE 


$(document).ready(function() {
  $("form#pizza").submit(function(event){
    event.preventDefault();
    const sizeInput = $("#size").val();
    const cheeseInput = $("#cheese").val();
    const toppingInput = $("input:checkbox[name=toppings]:checked").each(function(){
      const toppingInput= $(this).val();
      $('#pizza').append(toppingInput);
    });
    
    let pizza = new Pizza(sizeInput, cheeseInput,toppingInput,"null");

console.log(pizza);

$("#result").show();
$("pizza-size").text(pizza.size);
$("pizza-cheese").text(pizza.cheese);
// $("pizza-toppings").text(pizza.toppings);
$("pizza-extras").text(pizza.extra);
$("pizza-price").text(pizza.currentPrice);
  });
});

