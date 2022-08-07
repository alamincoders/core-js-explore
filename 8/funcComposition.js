// akta function er vitore jodi arekta function er output pawa jai tahole atake bola hoi function composition.

function print(inp) {
  console.log(inp);
}

function multiplyByFive(n) {
  return n * 5;
}

function add(a, b) {
  return a + b;
}

print(multiplyByFive(add(3, 5)));
