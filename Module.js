var FirstUser = {
    fName : "First User",
    lName : "First User Last",
    getUserDetail: function() {
        return {Name: this.fName + " - " + this.lName}
    }
}

var SecondUser = {
    fName : "Second User",
    lName : "Second User Last",
    getUserDetail: function() {
        return {Name: this.fName + " - " + this.lName}
    }
}

//console.log(FirstUser.getUserDetail())
//console.log(SecondUser.getUserDetail())

module.exports = { FirstUser, SecondUser }