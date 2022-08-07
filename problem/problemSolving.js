// লুডু খেলায় আমরা কিভাবে 1 থেকে 6 পর্যন্ত সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি?

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumber(1, 6));

// কিভাবে আমারা আমাদের সকলের নাম alphabetically সাজাতে পারি?
var arr = ["Hussain", "AlAmin", "Moriom", "Tobibur", "Razu", "Hosneyara"];
console.log(arr.sort());

// কিভাবে আমারা আমাদের সকলের নাম roll number ক্রমানুযায়ী প্রথম থেকে সাজাতে পারি?

var rollNumber = [5, 3, 8, 4, 6, 1, 9, 45];
console.log(
  rollNumber.sort(function (a, b) {
    return a - b;
  })
);

// কিভাবে আমারা আমাদের সকলের নাম roll number ক্রমানুযায়ী শেষ থেকে সাজাতে পারি?
var rollNumber = [5, 3, 8, 4, 6, 1, 9, 45];
console.log(
  rollNumber.sort(function (a, b) {
    return b - a;
  })
);

// কোনো একটা সাল leap year কি না সেটা কিভাবে বের করতে পারি?

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is not leap year`);
  }
}

isLeapYear(2028);

// কোনো sentence এ কত গুলো vowel আছে তা কিভাবে নির্নয় করা যায়?
const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function countVowel(sentence) {
  let count = 0;
  let letters = Array.from(sentence);
  letters.forEach((v) => {
    if (vowel.includes(v)) {
      count++;
    }
  });
  return count;
}
console.log(countVowel("I love coding"));

// কোনো array থেকে duplicate নাম্বার গুলো কিভাবে  বের করে আনতে পারি ?

// var names = ["Al Amin", "Aladdin", "Aladdin", "Moriom"];
var numbers = [1, 2, 3, 5, 1, 8, 9, 6, 4, 5, 6, 9];
var duplicates = numbers.filter((value, i, arr) => {
  return arr.indexOf(value) !== i;
});
console.log(duplicates);

// কোনো array থেকে unique নাম্বার গুলো কিভাবে  বের করে আনতে পারি ?
// var numbers = [1, 2, 3, 5, 1, 8, 9, 6, 4, 5, 6, 9];
var names = ["Al Amin", "Aladdin", "Aladdin", "Moriom"];
var unique = names.filter((value, i, arr) => {
  return arr.indexOf(value) === i;
});
console.log(unique);
