function greet(msg) {
  return function greeting(name) {
    return `${msg}! ${name}`;
  };
}

var gm = greet("Good Morning");
console.log(gm("Al Amin"));

// find power of numbers
function base(b) {
  return function power(n) {
    var result = 1;
    for (let i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}

var base5 = base(5);
var base3 = base(3);
var base10 = base(10);
var base7 = base(7);

console.log(base5(2));
console.log(base3(2));
console.log(base10(2));
console.log(base7(2));
