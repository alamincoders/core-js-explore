var a = 100;
// newPrint(a);

print(45);

var newPrint = print;
newPrint(25);

function print(a) {
  console.log(a);
}

print(a);


// Creational Phase
// a = undefined,
// newPrint = undefined,
// print = ref


// Executional Phase
// a = 100;
// newPrint = ref;

