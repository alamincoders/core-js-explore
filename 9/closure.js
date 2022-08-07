// Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope

// able to remember and access it's lexical scope

function text() {
  var msg = "I am learning lexical scope and closure";

  function child() {
    console.log(msg);
  }
  child();
}
text();

// when that function executing outside it's lexical scope

function text() {
  var msg = "I am learning lexical scope and closure";

  return function () {
    console.log(msg);
  };
}
var sayMsg = text();

sayMsg();

// if e
for (var i = 1; i <= 5; i++) {
  (function (n) {
    setTimeout(() => {
      console.log(n);
    }, 1000 * n);
  })(i);
}
