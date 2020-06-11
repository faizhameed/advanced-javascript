// function currying

function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(6));

let multiplyByTen = multiply.bind(this, 10);

console.log(multiplyByTen(6));

/* 
here we where able to resuse the code 
*/
