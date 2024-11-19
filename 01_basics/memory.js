// Stack(primitive)           Heap(non-primitive)
// In stack it is type of call by value and in heap it is call by reference
// thus when we change some value in primitive data the copied value vary and not the original one , whereas in heap the original value is updated due to its reference
/*
let myName = "Shruti"
let herName = myName
console.log(myName)
console.log(herName)
herName = "Shivani"
console.log(myName)
console.log(herName)
*/

let myDOB = {
    year: 2004,
    month: 'november',
    date: 18
}
let herDOB = myDOB
console.log(myDOB);
console.log(herDOB);
herDOB.month = 'january'
herDOB.date =12
console.log(myDOB);
console.log(herDOB);