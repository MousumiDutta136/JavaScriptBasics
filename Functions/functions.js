//show first character of text using charAt
let text = "Exercise is good for health";
let character = text.charAt(0);
console.log(character);

//show first character of text using index
let text1 = "Exercise is good for health";
let character1 = text1[0];
console.log(character1);

//show last character of text using charAt
let text2 = "Exercise is good for health";
let character2 = text2.charAt(text2.length-1);
let character3 = text2[text2.length-1];
console.log(character2,character2);

//get the Unicode of the first character in a string
let text3 = "Exercise is good for health";
let character4 = text3.charCodeAt(0);
console.log(character4);

//use of substring
let text4 = "Exercise is good for health";
let character5 = text3.substring(5, 10);
let character6 = text3.substring(10);
console.log("first substring is " + character5 + "second substring is " + character6);

let x=123;
x.toString();
console.log(x);
(123).toString;



