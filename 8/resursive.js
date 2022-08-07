function sayHi(n) {
  if (n === 0) {
    return;
  }
    console.log("Hi, I am Calling");
  sayHi(n - 1);
}
sayHi(10);

// recursive sum
function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}

// console.log(sum(10));

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(4));

var arr = [1, 2, 3, 4, 5];

function sumOfArr(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }
  return arr[lastIndex] + sumOfArr(arr, lastIndex - 1);
}

console.log(sumOfArr(arr, arr.length - 1));
