var addition = function (a, b) {
  return a + b;
};


setTimeout(function () {
  console.log("I will call after 5 seconds");
}, 5000);


var another = addition;
console.log(another(7,8));