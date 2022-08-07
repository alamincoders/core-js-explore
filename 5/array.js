// Array is a Data Structure where we can organize multiple data under a single variable

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr[5]);
arr[2] = 22; // update existing data
console.log(arr);
arr[15] = 15;
console.log(arr.length);
// length check two methods
var length = 0;
while (true) {
  if (arr[length] === undefined) {
    break;
  } else {
    length++;
  }
}
console.log(length);

//
var arr2 = Array(1, 2);
console.log(arr2);
