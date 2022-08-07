// Search Data;

var arr = [63, 5, 9632, 59, 85, 32, 51, 47, 52, 23, 84, 32, 1, 635, 55, 3, 62, 10];

var find = 10;
var isFound = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log("Data Found" + " " + i);
    isFound = true;
    break;
  }
}
if (!isFound) {
  console.log("Data Not Found");
}
