const studentArray = ["Evan", "Manali", "Tapati", "Peter"];
let text = "<ul>";
for (let i = 0; i<studentArray.length; i++){
//console.log(studentArray[i]);
text += "<li>" + studentArray[i] + "</li>";
}
text += "</ul>"
console.log(text);
