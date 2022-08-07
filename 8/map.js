var arr = [1, 2, 3];

/* var sqrArr = arr.map((value) => {
  //   return Math.floor(Math.random() * 100);
  return value * value;
});
console.log(arr);
console.log(sqrArr);
 */

var arr2 = [1, 2, 3, 4, 5];

function myMap(arr, cb) {
  var store = [];
  for (let i = 0; i < arr.length; i++) {
    var sqr = cb(arr[i], i, arr);
    store.push(sqr);
  }
  return store;
}

var qb = myMap(arr2, function (value) {
  return value * value * value;
});
console.log(qb);
console.log(arr2);
