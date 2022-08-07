var arr = [1, 2, 3, 4, 5];

/* var sum = 0;
arr.forEach((num) => {
  sum += num;
});
console.log(sum);
 */
/* 
function forEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
var sum = 0;
forEach(arr, function (value, i, arr) {
  console.log(value, i, arr);
  sum += value;
});
console.log(sum);

forEach(arr, function (value, i, arr) {
  arr[i] = value + 5;
});
console.log(arr); */

// practice
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

var sum = 0;

forEach(arr2, function (value, i, arr) {
  sum += value;
});
console.log(sum);

forEach(arr2, function (value, i, arr) {
  arr[i] = value + 10;
});
console.log(arr2);
