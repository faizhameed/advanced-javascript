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
