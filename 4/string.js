var str = "Something"; // string literal

var str2 = String("Something"); // string constructor
// console.log(str2);

var n = 10;
var str3 = n.toString();
console.log(str3);

// Escape Notation -
var text = 'Something went "Wrong"';

var text = `This is a \n"String"`; // new line
console.log(text);

var text = `This is a \t"String"`; //tab
console.log(text);

//concat
var a = "I am";
var b = " Al Amin";
var c = a.concat(b);
var d = c.substr(4);

console.log(c.startsWith("I am"));
console.log(c.endsWith("amin"));

console.log("abc".toUpperCase());
console.log(b.toLowerCase());

console.log("            fakldfja;dflk          ".trim());

var d = "alamin is the most powerful alternative";
console.log(d.split(" "));
console.log(d.slice(0, 10));

// find the length of the string


// find the length of string
var str = "Al Amin";

var length = 0;

while (true) {
  if (str.charAt(length) === "") {
    break;
  } else {
    length++;
  }
}

console.log(length);
console.log(str.length);
console.log(";lkasdfjm;lakdfjoiur".length);
