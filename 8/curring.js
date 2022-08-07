function add(a, b, c) {
  return a + b + c;
}

// add(42, 85, 63);

function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

var result = currying(5)(10)(15);
console.log(result);
