// Function Expression
var canada = () => console.log("cold");
// this function is defined at runtime that is when we call the function

// Function Declaration
// this function is defined at parse time that is initial compiler looks to the code

function india() {
  console.log("warm");
}

// Function Invocation, Calling, Execution
canada();
india();

function india(name) {
  console.log(arguments);
  console.log("warm1", name);
}

india();

//arguments
/* 
arguments looks like an array but actually its not an array

*/
function marry(person1, person2) {
  console.log(arguments);
  console.log(Array.from(arguments)); // we will get this in array form
  return `${person1} is now married to ${person2}`;
}

function marry2(...args) {
  console.log(args); // we have it as arrays
  console.log(Array.from(arguments)); //its better to avaoid arguments keyword
  return `${person1} is now married to ${person2}`;
}

marry("Tim", "Tina");
