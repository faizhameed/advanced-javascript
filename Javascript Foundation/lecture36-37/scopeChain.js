// Scope:
function sayMyName() {
  var a = "a";
  return function findName() {
    var b = "b";
    return function printName() {
      var c = "c";
      console.log(c);
      return "Andrei Neagoie";
    };
  };
}

sayMyName()()();
/* 
function findName() {
  var b = "b";
  return printName();
}

function printName() {
  var c = "c";
  return "Andrei Neagoie";
}

function sayMyName() {
  var a = "a";
  return findName();
}

sayMyName();
 */
