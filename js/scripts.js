function Pizza(size, cheese, toppings, extra) {
  this.size = size;
  this.cheese = cheese;
  this.toppings = toppings;
  this.extra = extra;
  this.currentPrice = 10;
}

Pizza.prototype.toppingsPrice = function(){
  for(let i=1; i <=this.toppings; i ++){
    this.currentPrice = this.currentPrice+.25
    return this.currentPrice;
  };
  console.log(this.currentPrice);
}

Pizza.prototype.extrasPrice = function(){
  for(let i=1; i <=10; i ++){
    this.currentPrice = this.currentPrice+1
    return this.currentPrice;
  };
  console.log(this.currentPrice);
}

const pizzaSize = {
  "1" : ["Small"],
  "2" : ["Medium"],
  "3" : ["Large"],
  "4" : ["Giant"],
}


// USER INTERFACE CODE 


// $(document).ready(function() {
//   $("form#pizza").submit(function(event){
//     event.preventDefault();
//     const pizzaSizeInput = $("#size").val();
//     const pizzaCheeseInput = $("#cheese").val();
//     console.log(pizzaSizeInput,pizzaCheeseInput);
//     $('input[name="toppings"]:checked').val();

//     let pizza = new Pizza(pizzaSize[pizzaSizeInput][0], pizzaCheeseInput,"toppings", "extras");

// $("#result").show();
// $("pizza-size").text(pizza.size);
// $("pizza-cheese").text(pizza.cheese);
// $("pizza-toppings").text(pizza.toppings);
// $("pizza-extras").text(pizza.extra);
// $("pizza-price").text(pizza.currentPrice);
//   });
// });




let karlspizza = new Pizza(0,0,0,0);