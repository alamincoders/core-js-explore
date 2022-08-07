var obj = {
  x: 40,
  y: 60,
  z: 75,
};

/* console.log("z" in obj); // true
console.log("s" in obj); // false */

for (var i in obj) {
  // console.log(i);
  console.log(`${i}: ${obj[i]}`);
}
