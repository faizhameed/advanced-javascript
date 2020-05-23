const human = {
  name: "faiz",
  last: "hameed",
};

human = 5;
// now human object that we created in still there
// in the momory

//now create a memory leak

let array = [];
for (let i = 5; i > 1; i++) {
  array.push(i - 1);
}

// here we filling the array with more and more data

var a = 1;
var b = 2;
var c = 4;

// event listeners
var element = document.getElementById("btn");
element.addEventListener("click", onClick);

setInterval(() => 1, 2000);
