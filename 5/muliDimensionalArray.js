var arr = [
  [78, 90, 80],
  [78, 90, 75],
  [79, 95, 70],
];

/* console.log(arr[0][0]);
console.log(arr[1][1]);
console.log(arr[2][2]); */

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log("Element:" + i +   ' ' + arr[i][j]);
    
  }
}
