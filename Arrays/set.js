const nameSet = new Set(["Pinaki", "Babul", "Mina", "Babul"]);
console.log(nameSet);
nameSet.forEach(function(value,value1){
  console.log(value,value1)
})

//use of values method
//nameSet.values();
console.log(nameSet.values());
for(const iterableObject of nameSet.values()){
  console.log("Iterable " + iterableObject)
}

if(true){
  //variable = 10 // if anhy variable is not defined by keyword var, 
                          //let or const then default declaration keyword is var
  let variable = 10;
}
console.log(variable); //gives ReferenceError: variable is not defined
