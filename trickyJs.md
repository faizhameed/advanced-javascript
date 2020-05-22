1. What's the output?
   ```function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```

Answer: undefined and ReferenceError

Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.

Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.

2. What is the Output?
```
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

```
Answer : 20 and NaN

Since the permiter is an arrow function the this value is its current surrounding object


3. Which one is true?
```
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
A: mouse.bird.size is not valid
B: mouse[bird.size] is not valid
C: mouse[bird["size"]] is not valid
D: All of them are valid


Answer: A
In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.

JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement.

mouse[bird.size]: First it evaluates bird.size, which is "small". mouse["small"] returns true

However, with dot notation, this doesn't happen. mouse does not have a key called bird, which means that mouse.bird is undefined. Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we're actually asking undefined.size. This isn't valid, and will throw an error similar to Cannot read property "size" of undefined.

4. Predict the output
``` 
const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};
```
const data = JSON.stringify(settings, ['level', 'health']);
console.log(data);

Answer:`"{"level":19, "health":90}`

The second argument of JSON.stringify is the replacer. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.

If the replacer is an array, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names "level" and "health" are included, "username" is excluded. data is now equal to "{"level":19, "health":90}".

If the replacer is a function, this function gets called on every property in the object you're stringifying. The value returned from this function will be the value of the property when it's added to the JSON string. If the value is undefined, this property is excluded from the JSON string.

5. What's the output?
```let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```

A: 10, 10
B: 10, 11
C: 11, 11
D: 11, 12
Answer: A
The unary operator ++ first returns the value of the operand, then increments the value of the operand. The value of num1 is 10, since the increaseNumber function first returns the value of num, which is 10, and only increments the value of num afterwards.

num2 is 10, since we passed num1 to the increasePassedNumber. number is equal to 10(the value of num1. Again, the unary operator ++ first returns the value of the operand, then increments the value of the operand. The value of number is 10, so num2 is equal to 10.


