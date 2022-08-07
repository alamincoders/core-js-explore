/* *******Number*********/

var n = 1455;

var f = 465.85;

var nn = Number("45.98");
/* console.log(nn);
console.log(Number.parseInt(nn));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(1 / 0);
console.log("abc" * 10); */

/* ***********String****************/

var str = "String";
var str2 = "String";
var str3 = `String`;

var str4 = String("String");
var str5 = String(123);
var str6 = String(3.5456213);

/******Boolean*******/

var b1 = true;
var b2 = false;

/* ************************
Null vs Undefined
************************* */

var abc;
var xyz = null;

console.log(abc, xyz);

/* ********************************
type conversions
******************************** */

var str = "1000";
var n = 10;

console.log(parseInt(str) + n);

// Falsy Values
("");
0;
null;
undefined;
NaN;

console.log(Boolean(0));
console.log(Boolean(5641));

// hexadecimal & octal conversions
const hex = 0xfef;

const oct = 0754;

console.log(hex, oct);
