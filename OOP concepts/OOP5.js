function Person(name, age) {
  this.name = name;
  this.age = age;
}

// implicit binding
const person = {
  name: "Karen",
  age: 49,
  hi() {
    console.log("hi " + this.name);
  },
};

//explicit binding

const person3 = {
  name: "karen",
  age: "49",
  hi: function () {
    console.log("hi " + this.setTimeout);
  }.bind(window),
};

person.hi();

//arrow functions
