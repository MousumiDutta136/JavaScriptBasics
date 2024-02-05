const points = [40, 100, 1, 5, 25, 10];
//sort the array ascending
points.sort(function(a,b){
return a-b
})
console.log(points);


//sort the array descending
points.sort(function(a,b){
  return b-a
  })
  console.log(points);
//to check min value
let arrayLength = points.length;
console.log(arrayLength)
let min = points[0];

while(arrayLength > 0){
if(points[arrayLength] < min){
 min = points[arrayLength];
}
arrayLength--;
}
console.log(min)

//to check max value
let max = points[0];

while(arrayLength > 0){
  if(points[arrayLength] > max){
   max = points[arrayLength];
  }
  arrayLength--;
  }
  console.log(max)