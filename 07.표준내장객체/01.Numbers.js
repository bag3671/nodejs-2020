let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);

console.log(numberFromLiteral, numberFromConstructor);

let number = 273.12345;
console.log(number.toExponential());
console.log(number.toFixed(2));
console.log(number.toPrecision(5));

console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE.toPrecision(6));
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);     //2의 53승 -1
console.log(Number.MAX_SAFE_INTEGER.toPrecision(6));
console.log(Number.MIN_SAFE_INTEGER);     //-2의 53

console.log(Math.pow(2, 53)-1);