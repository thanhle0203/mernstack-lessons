var { FirstUser, SecondUser } = require("./Module");

FirstUser.fName = "Bill"
FirstUser.lName = "Clinton"

SecondUser.fName = "Thanh Le"
SecondUser.lName = "Le"

console.log(FirstUser.getUserDetail())
console.log(SecondUser.getUserDetail())

