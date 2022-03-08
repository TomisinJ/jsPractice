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
    console.log(`${stocks.Fruits[Fruit_name]} was selected`)
  }, 2000);
  
  call_production();
};

let production = () => {

};

order(0, production);

