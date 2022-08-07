var arr = [5, 9, 8, 2, 4, 1];
/* arr[0];
arr[1];
arr[3];
arr[arr.length - 1]; */

/* for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] + 2;
}

console.log(arr); */
var sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

// even number sum
var arr = [5, 9, 8, 2, 4, 1];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sum += arr[i];
  }
}
console.log(sum);

// Odd number sum
var arr = [5, 9, 8, 2, 4, 1];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    sum += arr[i];
  }
}
console.log(sum);

// Odd Number found from array
var arr = [5, 9, 8, 2, 4, 1];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    console.log(arr[i]);
  }
}
