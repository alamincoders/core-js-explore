// Chapter Seven: Objects in JavaScript

// Object literals
var identity = {
  id: 001,
  name: "Al Amin",
  email: "alamons@gmail.com",
  roll: "Web Developer",
  salary: 100,
};
// identity.name= "Moriom";
identity.wife = "Moriom";
// console.log(identity);

// Object constructor
var obj = Object();
obj.id = 1;
// console.log(obj);

var obj2 = new Object();
obj2.id = 2;
// console.log(obj2);

var point = {
  x: 10,
  y: 20,
  z: 30,
};
point.x = 50;
/* console.log(point.x);
console.log(point.y);
console.log(point.z + point.y);

console.log(point["x"]);
console.log(point["z"]); */

var show = "x";
// console.log(point[show]);

// point.z = undefined;



// remove properties from Object
delete point.z;



console.log(point);
