// calling a function inside another function is called a callback

function one (call_two) {
  call_two();
  
  console.log(" step 1 complete. please call step 2 ");

}

function two () {
  console.log(" step 2 ");
}

one(two);