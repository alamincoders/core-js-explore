// 1. We can pass function as an arguments
// 2. We can return function as an arguments

function add(a, b) {
  return a + b;
}

function manipulate(a, b, func) {
  var c = a + b;
  var d = a - b;

  return function () {
    var m = func(a, b);
    return c * d * m;
  };
}

var multiply = manipulate(5, 3, add);
console.log(multiply());
