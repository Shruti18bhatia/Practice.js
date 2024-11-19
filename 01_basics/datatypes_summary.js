//Primitive Datatypes 
/*
    String, Boolean, Numbers, null, undefined, Symbol(unique), BigInt
*/
//symbol eg: 
// const id1 = Symbol('123')
// const id2 = Symbol('123')

// console.log(id1);
// console.log(id2);
// console.log(id1 == id2);

//Reference Types(Non-Primitive)
/*
    Array, Objects, Functions
*/

const x = ["a","b"] // array

const y = {
    a : "ggg",
    b : 22
} // object

const myfun = function() {
    console.log('455');
    return 1
}
console.log(typeof myfun()) //function-object
console.log(typeof x)
console.log(typeof y)