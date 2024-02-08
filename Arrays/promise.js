let setPromise = new Promise(function(myResolve, myReject){
  let x = 0;
  //producing code
  if(x > 0){
    myResolve("ok");
  } else {
    myReject("error");
  }
});

function display(something){
console.log(something);
}
//use of promise
setPromise.then(
  function(value){display(value);},
  function(error){display(error);}
)

// callback examples 
//waiting for a timeout
//example using callback
setTimeout(function(){exampleFunct("Hello!")}, 3000);

function exampleFunct(val){
  console.log(val);
}

//promise example
let examplePromise = new Promise (function(exampleSuccess, exampleError){
  setTimeout(function(){
    exampleSuccess("This is called success!!!")
  }, 5000)
});

examplePromise.then(function(message){
  console.log(message);
})

//waiting for a file
