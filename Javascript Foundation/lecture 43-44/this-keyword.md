## **This Keyword**


this-> refers to window object in global context in browser, if its inside a function it refers to the context it is a part of
```
window.a()

function b(){
    'use strict'
    console.log(this)
}

b()// gives undefined

```


why this was added to javascript

Simple example would be
1. Gives methods to access their objects
```
const obj={
    name:'Billy',
    sing(){
        return 'lalal '+this.name
    }
}

obj.sing()// lalal Billy


const obj1={
    name:'Billy',
    sing(){
        return 'lalal '+this.name
    },
    singAgain(){
        return this.sing()+'!'
    }
}

```
2. execute same code for multiple obj

```
function importantPerson(){
    console.log(this.name)
}

const name='Sunny'
const obj1={
    name:'Cassy',
    importantPerson:importantPerson
}

const obj1={
    name:'Jacob',
    importantPerson:importantPerson
}

importantPerson()//Sunny
obj1.importantPerson()//Cassy
obj2.importantPerson()//Jacob

```

```
const a = function() {
  console.log(this)
  const b = function() {
    console.log(this)
    const c = {
      hi: function() {
     console.log(this)
    }}
    c.hi()
  }
  b()
}

a()

//JS is weird:
const obj = {
  name: 'Billy',
  sing: function() {
    console.log(this) // in this case, it's a method on an object.
    var anotherFunc = function() {
      console.log(this)// this points to windows!
    }
    anotherFunc()
  }
}

// to solve this we can use arrow functions
const obj = {
  name: 'Billy',
  sing: function() {
    console.log(this) // in this case, it's a method on an object.
    var anotherFunc = () =>{
      console.log(this)// this points to windows!
    }
    anotherFunc()// now it points to the object
  }
}
```
Arrow functions are lexically bound

or else you can use call, apply or bind depending on use cases

refer online for examples

