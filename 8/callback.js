function sample(a, b, cb) {
  var c = a + b;
  var d = a - b;
  var result = cb(c, d);
  return result;
}

function sum(a, b) {
  return a + b;
}

var result = sample(5, 8, sum);
console.log(result);

var result2 = sample(5, 8, function (c, d) {
  return c - d;
});

console.log(result2);

var result3 = sample(5, 8, function (c, d) {
  return c * d;
});
console.log(result3);

// higher Order Functions and Callback functions
function sqr(n) {
  console.log(`sqr ${n}: ${n * n}`);
}

/* var y = sqr;
y(5) */

function higherOrderFunction(num, callback) {
  return callback(num);
}

higherOrderFunction(6, sqr);

// callback function
function taskOne(callback) {
  console.log("Task1");
  callback();
}
function taskTwo(callback) {
  setTimeout(() => {
    console.log("Task2");
    callback();
  }, 3000);
}
function taskThree(callback) {
  console.log("Task3");
  callback();
}
function taskFour(callback) {
  console.log("Task4");
  callback();
}
function taskFive() {
  console.log("Task5");
}

taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      taskFour(() => {
        taskFive();
      });
    });
  });
});
