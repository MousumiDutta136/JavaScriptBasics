const studentArray = ["Evan", "Manali", "Tapati", "Peter"];
studentArray.push("Mira");
let text = "<ul>";
for (let i = 0; i<studentArray.length; i++){
//console.log(studentArray[i]);
text += "<li>" + studentArray[i] + "</li>";
}
text += "</ul>"
console.log(text);

//Sorting an array
const numberArray = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5];
// sort by Ascending order
numberArray.sort();
console.log(numberArray); /*result is [ 
                                        10, 2, 21, 3, 3,
                                        4, 5,  5, 5, 6,
                                        9
                                        ]*/
//using compare function
numberArray.sort((a,b)=>a-b);
console.log(numberArray); /* result is [
                            2, 3, 3, 4,  5,
                            5, 5, 6, 9, 10,
                          21
                          ] */
let stringsArr = ["a", "A", "b"];
stringsArr.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? 1 : -1);
console.log(stringsArr);

const points = [40, 100, 1, 5, 25, 10];

for(let i=points.length -1; i>0;i--){
  let j= Math.floor(Math.random() * (i+1));
  let k=points[i];
  points[i] = points[j];
  points[j] = k;
  console.log(points[i]);
}

