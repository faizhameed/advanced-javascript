//function scope
// vs
// block scope

/* WITH es6 they allow us to us block scope */

if (5 > 4) {
  let secret = 1234;
}

console.log(secret); // cannot be acessed
