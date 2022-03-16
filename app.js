
//////// Alert /////////

alert("Thanks For Input");

///////// console.log ///////

var num = 1
var num2 = 2
var num3 = 3
var result = num + num2 + num3;
console.log(result);


// ////////// Prompt////////////

var name = prompt("firstName" , "write name")
var age = prompt("Age" , "how old are you")
console.log(name + " " + age)

//////// Math Expresion///////////

var num = 2
num = 8
console.log(num + 2)

var num1 = 12
var num2 = 13
var num3 = 14
var result = num1 + num2 - num3;
console.log(result);



///////concatenation////////

var userName = "susan"
console.log("Thanks, " + userName + "!");

 var message = "Thanks, ";
 var userName = "Susan";
 var banger = "!";
 var customMess = message + userName + banger;
 console.log(customMess);

var question = "Your species?";
var defaultAnswer = "humans";
var spec = prompt(question , defaultAnswer);
console.log(spec);

///////// post decrement ////////////

var num = 2
var result = num + num++ + ++num + num ;
console.log(result)

var num = 6
var result = num + ++num - num + num++ - ++num;
console.log(result);