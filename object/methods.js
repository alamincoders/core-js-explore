var obj = {
  x: 40,
  y: 60,
  z: 75,
};

// basic methods for objects
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


// object clone or copy from another object
var obj2 = Object.assign({}, obj);
obj2.x = 50;
console.log(obj2);
console.log(obj);
