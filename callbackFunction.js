// stock is back-end
// kitchen is front-end

let stocks = {
  Fruits : ["strawberry", "grapes", "banana", "apple"],
  liquid : ["water", "ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["chocolate", "peanuts"]
};

// console.log(stocks.Fruits[2]);

let order = (Fruit_name, call_production) => {
  
  setTimeout(() => {
    
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);

    call_production();

  }, 2000);

};

let production = () => {
  
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("the food has been chopped");
    }, 2000);
  
  }, 0000);

};

order(0, production);

