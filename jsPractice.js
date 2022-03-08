// Asynchronous - does not log in the order it is read by js

console.log(" I ")

console.log(" eat ")

setTimeout(()=>{
  console.log(" ice cream ")
},4000)

console.log(" with a ")

console.log(" spoon ")


// works in miliseconds