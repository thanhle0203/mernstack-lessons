// A function can be passed as parameter with its scope to another function and executed 
// their is termed as callback function 

function Behaviour(callBack, isGreater, name) {
    isGreater ? 
        callBack(name) : 
    console.log("No Name Present!!!")

}

function func(name) {
console.log(name);
}
Behaviour(func, true, "Alexandar")
Behaviour(func, true, "Pavani")

function Add(p1, p2) {
return p1 + p2;
}

function Multiply(p1, p2) {
return p1 * p2;
}


function ArithmaticOperations(callBack, p1, p2) {
return callBack(p1,p2)
}

console.log(ArithmaticOperations(Add, 5, 6))
console.log(ArithmaticOperations(Multiply, 5, 6))


//setTimeout(setimeoutCb, 2000);

function setimeoutCb() {
//will have the context of settime out
console.log("this - ", this)
console.log("Call back function in set timeout")
}


// nested functions do hold the scope of outerfunctions variables or properties 
//javascript currying
var e = 15; //global scope 

function sum1(a){

return function sum2(b){

return function sum3(c){
  // outer functions scope
  return function sum4(d){
    // local scope
    return a + b + c + d + e;
  }
}
}
}

var totalSum = sum1(2)(3)(4) //chain execution
console.log(totalSum(5))


//function to generate different details of an account using callback function
//like - account balance and account details
function Account(callBack, acc_balance, acc_detail, amount, name) {
    callBack(amount)
}
function acc_balance(amount) {
    return amount
}

function acc_detail(name, amount) {
    return {
        name: this.name,
        amount: this.amount
    }
}

// call and apply are the functions present in any function which will help us to decide the run time context of 
// executing function, this way we can associate any object as the run time context (this)

// call - whenever we need to pass parameter we pass it one by one after the object
// apply - we can pass all the parameters as an array after the object

name = "Nhi"

var user = {name : "Test", interest : "Functional Programming"}
var user2 = {name : "Test Second", interest : "Core Programming"}

function GetDetails(type, session) {
    // console.log(this.name)
    // console.log(this.interest)
    // console.log(type)
    // console.log(session)

    console.log(`
        Name is ${this.name}
        Interest is ${this.interest}
        Type is ${type}
        Session is ${session}
    `)
}

//GetDetails(); // every function by default executes on global object

GetDetails.call(user, "Training", "MERNStack","asdsad")
GetDetails.call(user2, "Programming", "Architect","asdsadsa")


// call and apply are the functions present in any function which will help us to decide the run time context of 
// executing function, this way we can associate any object as the run time context (this)

// call - whenever we need to pass parameter we pass it one by one after the object
// apply - we can pass all the parameters as an array after the object

name = "Nhi"

var user = {name : "Test", interest : "Functional Programming"}
var user2 = {name : "Test Second", interest : "Core Programming"}

function GetDetails(type, session) {
    // console.log(this.name)
    // console.log(this.interest)
    // console.log(type)
    // console.log(session)

    console.log(`
        Name is ${this.name}
        Interest is ${this.interest}
        Type is ${type}
        Session is ${session}
    `)
}

//GetDetails(); // every function by default executes on global object

GetDetails.call(user, "Training", "MERNStack","asdsad")
GetDetails.call(user2, "Programming", "Architect","asdsadsa")

//if we have large number of params we can get them like array and pass array as parameters
GetDetails.apply(user2, ["Programming", "Architect","asdsadsa"])


// Apply : is used the same way call is used but, we can pass the parameters in the form of array
// Apply : is the inbuilt method used to change the context of a function at runtime, but it accepts function parameters in array format

var BMW = {name : "BMW", hatchback : "Yes", price : "2000", openRoof : "Yes"}
var SomeCar = {name : "Toyota", hatchback : "No", price : "1000", openRoof : "No"}

function GetVehicleInfo(authorised, noOfWheels, crashTest, highSpeed, countryMake) {
    console.log(`
        Vehicle Name ${this.name}
        Vehicle hatchback ${this.hatchback} 
        Vehicle price ${this.price}
        Vehicle openRoof ${this.openRoof}
    `)

    console.log(`
        Vehicle authorised ${authorised}
        Vehicle noOfWheels ${noOfWheels}
        Vehicle crashTest ${crashTest}
        Vehicle highSpeed ${highSpeed}
        Vehicle countryMake ${countryMake}
    `)
}

GetVehicleInfo.apply(BMW, ["Yes","5","4","Yes","US"])
GetVehicleInfo.apply(SomeCar, ["No","3","4","Yes","Unknown"])

//Print student information using call and apply and try to see how we get these functions executed immediatly
var Student1 = {name : "Alex", id : 101}
var Student2 = {name : "Elisa", id: 102}

function GetStudentDetail(session, degree) {
    console.log(`
        Student Name is - ${this.name}
        Student ID is - ${this.id}
        Session Name ${this.session}
        Degree Name ${this.degree}
    `)
}

GetStudentDetail.apply(Student1, [1011, "CS"])
GetStudentDetail.apply(Student2, [1022, "Business"])