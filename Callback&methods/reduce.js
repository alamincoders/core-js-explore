var arr = [30,1, 2, 3, 4, 5, 67, 8, 9, 10];

/* var sum = arr.reduce((pre, cur) => {
  return pre + cur;
}, 0);

var max = arr.reduce((pre, cur) => {
  return Math.max(pre , cur);
},0);
var min = arr.reduce((pre, cur) => {
  return Math.min(pre , cur);
},arr[0]);

console.log(sum);
console.log(max);
console.log(min);
 */

function myReduce(arr, cb, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

var sum = myReduce(
  arr,
  function (prev, cur) {
    return prev + cur;
  },
  0
);
var max = myReduce(
  arr,
  function (prev, cur) {
    return Math.max(prev, cur);
  },
  0
);
var min = myReduce(
  arr,
  function (prev, cur) {
    return Math.min(prev, cur);
  },
  arr[0]
);

console.log(sum);
console.log(max);
console.log(min);
