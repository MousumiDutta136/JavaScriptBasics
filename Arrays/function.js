let result = false && myFunction();
console.log(result);
let myFunction = function(){return "hello"};
let result1 = true && myFunction();
//let myFunction = function(){};
console.log(result1);

let result2 = true || myFunction();
//let myFunction = function(){};
console.log(result2);

//How to use apply, call bind methods with functions
function sayHello(message){
console.log(`${message}, ${this.name}`)
}
person = {
  name:'Mithila'
}
sayHello.call(person,"Hello");