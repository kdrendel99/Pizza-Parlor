function Pizza(size, cheese, toppings, extra) {
  this.size = size;
  this.cheese = cheese;
  this.toppings = toppings;
  this.extra = extra;
  this.currentPrice = 10;
}

Pizza.prototype.toppingsPrice = function(){
  for(let i=1; i <=10; i ++){
    this.currentPrice = this.currentPrice+.25
  };
  console.log(this.currentPrice);
}


let karlspizza = new Pizza(0,0,0,0);