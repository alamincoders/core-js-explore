// For Loops
for (var i = 0; i < 20; i++) {
  console.log(i + 1 + " Al-Amin");
}

var b = "ALAmin";
for (let i = 0; i < b.length; i++) {
  console.log(b[i]);
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
// even number sum
var evenNumber = 0;
for (let i = 1; i <= 6; i++) {
  if (i % 2 === 0) {
    evenNumber += i;
  }
}
console.log(evenNumber);

// sum
var sum = 0;
for (var i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum);
