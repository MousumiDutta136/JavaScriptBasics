let person = {};
person.name = 'Mohita';
person.name='Pya';
person.age = 30;
//delete person.name

console.log(person);

//use dot notation vs. [] notation
console.log(person.name);
let propName = "name";
console.log(person.propName);
console.log(person[propName]);

//ways to get the properties of an object
//1. for..in loop
for(let element in person){
  console.log(element + ' : ' +  person[element]);
}
//2.Object.keys() & forEach()
Object.keys(person).forEach((key)=>{
  console.log(key + ' : ' +  person[key]);
//console.log(person[key]);
})

//3.Object.values() & forEach()
Object.values(person).forEach((val)=>{
console.log(val);
})