//using for...of loop
let arr = [1,2,3]
for(let val of arr){
  console.log(val);
}


//using for...in loop
let obj = {
  name:'Evan',
  age:'23'
} 
for(let key in obj){
  console.log(obj[key]);
}

for(let key in obj){
  if(obj["name"] === "Evan"){
    obj["name"] = "Mousumi"
  }
  console.log(obj[key]);
}

//using forEach loop
arr.forEach(e=>console.log(e))
Object.values(obj).forEach(e=>console.log(e))
