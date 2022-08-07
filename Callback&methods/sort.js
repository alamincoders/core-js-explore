var persons = [
  { name: "A", age: 23 },
  { name: "B", age: 18 },
  { name: "C", age: 35 },
  { name: "D", age: 22 },
];

var arr = [8, 3, 4, 8, 6, 3, 4, 2, 1, -4];

/* arr.sort();
console.log(arr); */

// ascending order
arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
// console.log(arr);

// descending order
arr.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
// console.log(arr);

// ascending order from array of objects
persons.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(persons);
/* 
var res1 = arr.every(function (value) {
  return value % 2 === 0;
});

var res2 = arr.every(function (value) {
  return value >= 0;
});
console.log(res1, res2);

var res3 = arr.some(function (value) {
  return value % 2 === 1;
});

var res4 = arr.some(function (value) {
  return value < 0;
});
console.log(res3, res4);
 */