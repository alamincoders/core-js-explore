var x = 55;

function test() {
//   var x = 45;
//   console.log(x);

  function nested() {
    console.log(x);
  }
  return nested();
}
test();

