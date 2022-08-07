function add(a, b) {
  var result = a + b;
  console.log(result);
}

function sub(a, b) {
  var result = a - b;
  console.log(result);
}

/* add(7, 10);
sub(88, 8); */

var arr1 = [1, 2, 3];
var arr2 = [5, 7, 9, 5, 8, 9];
var arr3 = [9, 7, 1];

/* var sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}
console.log(sum1); */

function sumOfArray(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumOfArray(arr1);
sumOfArray(arr2);
sumOfArray(arr3);

function test(a, b, c) {
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

test(2, 4, 5);

//
function addAll() {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
addAll(1, 2, 3);
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
