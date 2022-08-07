var arr = [7, 8, 6, 1, 9, 3, 1, 85, 4];

/* var result = arr.find(function (value) {
  return value === 8;
});

console.log(result); */

/* var result = arr.findIndex(function (value) {
  return value === 9;
});
console.log(result);
 */

function myFind(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      //   return arr[i];
      return i;
    }
  }
}

var result = myFind(arr, function (value) {
  return value === 9;
});

console.log(result);
