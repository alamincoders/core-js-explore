// First Look at Closure

var b = 10;

function a() {
  var x = 5;
  return function () {
    console.log(x);
  };
}
var abc = a();
console.dir(abc);

function getCapital(taka) {
  return function (interest) {
    return (taka * interest) / 100;
  };
}

const get = getCapital(100000);
const profits = get;
console.log(profits(25));
