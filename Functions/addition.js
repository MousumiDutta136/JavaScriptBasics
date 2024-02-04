let x = 5;
function add(a, b){
  //local scope - because declared inside of the block
  let x = 1;
  console.log(x);
  return a * b;
  
}

let add_numbers = add(6,7);

console.log(add_numbers);
console.log(x);
//method is defined in object
const person = {
  firstName:"Steven",
  lastName:"Miller",
  age:"30",
  fullname:function(){
    return `first name is ${this.firstName} and last name is  ${this.lastName}`;
  }
}
console.log(person.fullname());
