// inline caching
function findUser(){
    return `found ${userData.firstName} ${userData.lastName}`
}

const userData ={
    firstName:'Johnson',
    lastName:'Junior'
}


findUser()

// another method of optimisation is called Hidden classes

function animal(x,y){
    this.x =x;
    this.y=y;
}

const obj1=new animal(1,2)
const obj2 = new animal(3,4)
 

// if we re going to write the following

obj1.a=30
obj2.b=100
obj1.b=20
obj2.a=256

// this unordered way of assigning variables can affect compiler performace.
// because of the hidden classes behind the scene

// also there is performance issue with the delete keyword used

delete obj1.x 

