//Spread : is used to spread the elements of any object or array to be used one by one

let arrayOFCities = ["Rome", "New York", "New Delhi", "London"];

// console.log(arrayOFCities[0]);
// console.log(arrayOFCities[1]);

// console.log(...arrayOFCities); //spread the array to return values 

//spread operator is used to combine two objects and preserve the immutability of each object
let User = { name : "Jason", age : 25 }
let Address = {home : "Somewhere in US", office : "Virtual"}

//let Student = {User, Address}

// let Student = {};
// Object.assign(Student, User, Address)
// console.log(Student);
let Student = {...User, ...Address}
Address.newValue = "Some value"
console.log(Student);

//using spread to pass parameters

function Sum(a = 0, b = 0, c = 0) {
    return a+b+c;
}

let arr = [20,21,22,23]
console.log(Sum(arr[0],arr[1],arr[2]))
console.log(Sum(...arr))

console.log("using apply " + Sum.apply(null, arr))//apply allows to pass the array in parameter

// let Accounts ={
//     accountHolderName : "Tohney",
//     balance : "$6000",
//     address : {
//         address1 : "address1",
//         address2 : "address2"
//     }
// }

// //let PurhaseOrder = {Accounts,  DeliveryAddress : "address3"};
// let PurhaseOrder = {...Accounts,  deliveryAddress : "address3"};
// //console.log(PurhaseOrder)

// Accounts.accountHolderName = "Toan";
// //console.log(PurhaseOrder)



//Rest Parameter :  this denotes rest of the values with ...valueArr

function LargeParams(a, b, ...restParams) {//...restParams : can be any number of parameters and would always be last param
    
}

let arr100 = [1,2,3,4,5,6,7]
console.log(LargeParams(0,0, ...arr100))

//reduce : iterator is used to look upon the previous returned value

function LargeSum(...arr) { //receiving as rest param
    let sum = 0;

    sum = arr.reduce((prevVal, currVal, currIndex, arr)=>{
        console.log("prevVal ", prevVal)
        console.log("currVal ", currVal)
        console.log("currIndex ", currIndex)

        return prevVal + currVal; //0+1, 1+2, 3+3, 6+4.... 
    }, 0)

    return sum;
}

console.log(LargeSum(...arr100)) //passing as a spread 

//Questions :
//Spread Operator - 
//create a list of vaccines and print
let vaccineNames = ["flu", "covid", "chickenpox", "diptheria", "hepatitis A & B", "HPV"]
console.log(...vaccineNames)

//create doctor object and print his qualifications and other details using spread
let Staff = {name: "John Doe", age: 65, location: "CA"}
let Education = {degree: "M.D. Dental", graduation: 1969, schoolname: "UCSF"}
let Doctor = {...Staff, ...Education}
console.log(Doctor)

let Doctor2 = {
    name: 'John Doe',
    age: 35,
    qualifications: ['MBBS', 'MD', 'DNB'],
    speciality: 'General Medicine',
    clinic: 'Kaiser',
    location: 'New York'
}

console.log({...Doctor2})

//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread
let vaccine1 = {
    name: "Flu",
    no_doses: 1,
    price: 55.5
}
let vaccineObj = {...vaccine1, ...Doctor}
console.log(vaccineObj)

//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
function generateArray(start, end) {
    return Array.from({length: end - start + 1}, (_,i) => start + i)
}
console.log(generateArray(100, 150))

//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
let arrayOfNums = generateArray(100, 150)
console.log(arrayOfNums)
console.log(LargeSum(...arrayOfNums))
