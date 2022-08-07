var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* var filteredArr = arr.filter(function (value) {
  return value > 4;
});

console.log(filteredArr); */

function myFilter(arr, cb) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  myFilter(arr, (value) => {
    return value % 2 === 0;
  })
);
console.log(
  myFilter(arr, (value) => {
    return value % 2 === 1;
  })
);
console.log(
  myFilter(arr, (value) => {
    return value > 4 && value % 2 === 0;
  })
);
