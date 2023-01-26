
//Q1. Create a file with name basics and show all the features that you know about javascript

console.log(name) // gets hoisted with undefined value
var name = "Thanh Le"
var name = "Le Thanh" // allow redeclare and reassign var name 

let name2 = "Thanh Le"
name2 = "Le Thanh" // not allow redeclare but allow reassign var name2

const name3 = "Thanh Le" // not allow redeclare and reassign var name3

console.log(funcUser)  // get hoisted function with undefined value
var funcUser = function () {
    console.log("Print user")
}

// Callback 
function Shape(callBack, x, y){
    return callBack(x, y)
}

function SquareShape(x, y){
    return x*y
}

function RectangleShape(x, y){
    return x*y
}

function CircleShape(x, y){
    return 3.15*x*y
}

console.log(Shape(callBack, x, y))

// print name of function PrintName
var name = "Thanh Le"

function PrintName(name) {
    console.log("My Name " + name)
}

PrintName("Thanh Le")

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
let variable = "Robert"
console.log(variable + " is of type " + typeof variable) // print string type

variable = 0.0266
console.log(variable + " is of type " + typeof variable) // print number type

variable = false
console.log(variable + " is of type " + typeof variable) // print boolean type

variable = {myname : "TestMe"}
console.log(variable + " is of type " + typeof variable) // print object type

variable = 25166665
console.log(variable + " is of type " + typeof variable) // print number type

variable = undefined
console.log(variable + " is of type " + typeof variable) // print undefined type

variable = true
console.log(variable + " is of type " + typeof variable) // print boolean type

variable = "Robert Jr."
console.log(variable + " is of type " + typeof variable) // print String type

variable = null
console.log(variable + " is of type " + typeof variable) // print object type

variable = {}
console.log(variable + " is of type " + typeof variable) // print object type

variable = -32767
console.log(variable + " is of type " + typeof variable) // print number type

//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function
function UserInfo (f_name, l_name, age) {
    this.f_name = f_name,
    this.l_name = l_name,
    this.age = age,

    this.getUserFName = function() {
        return this.f_name;
    },
    this.getUserLName = function() {
        return this.l_name;
    },
    this.getUserAge = function() {
        return this.age;
    }
}
var printUser = new UserInfo("Thanh", "Le", "32");
console.log(printUser.getUserFName());
console.log(printUser.getUserLName());
console.log(printUser.getUserAge());


//Q4. Create a function with name add pass three parameters and return the sum of all the three numbers
// below out puts needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind
 var addFunction = function add(a, b, c){
    return a + b + c
}
console.log(addFunction(2,3,4)) // return 9 as sum of 3 params
console.log(addFunction(2))     // return NaN bc in js 2 + NaN + NaN = NaN
console.log(addFunction(2.3,3)) // return NaN bc in js 2.3 + 3 + NaN = NaN
console.log(addFunction("first", 2, "three")) // return first2three as the result is the concat of 3 string

//Q5. A detailed example implementation of event loop using multiple settimeouts
console.log('Start')
setTimeout(() => {
    console.log('Timeout 1')
    setTimeout(() => {
        console.log('Timeout 2')
        setTimeout(() => {
            console.log('Timeout 3');
        }, 1000);
    }, 2000)
}, 3000);
console.log('End')


//Q6. Print the topics you remember so far exporting it from one file an printing in another
// exportedmodule.js
export const studentName = "Thanh Le" // export name
export const phoneNumber = 123456789            // export phonenumber
export const address = "ABC Columbus, CA"       // export address

export default student = {sid: 123, name:"Thanh Le", age: 32} // allow only one export default per file

// shape.js
export const radius = 2.5
export const x = 1
export const y = 2
export const z = 3


// importedmodule.js
import { studentName, phoneNumber, address } from "./exportedmodule"
import student from "./exportedmodule" // default import 
