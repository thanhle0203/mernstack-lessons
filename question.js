//create an account object with details like account number, amount, getBalance as a function
var Account = {
    name: "Thanh",
    account_number: 100,
    amount: 1000,
    getBalance: function () {
        return {
            name: this.name,
            account_number: this.account_number,
            amount: this.amount
        }
    }
}
//using account object create new object with name loan account, add new properties loantype and loanamount, getloanDetails
var Customer = Object.create(Account);
Customer.loan_account = 110
Customer.loan_type = "Auto"
Customer.loan_amount = 5000

Customer.getLoanDetails = function () {
    return {
        loan_account: this.loan_account,
        loan_type: this.loan_type,
        loan_amount: this.loan_amount, 
    }
}



//create three different addresses of a user in threee different objects, merge them into one object
Customer.address_home = "123 Hollyhood Blvd"
Customer.address_bussiness = "456 ABC St"
Customer.address_home2 = "789 Washington Blvd"

var cus1 = {name: "Alex", account_number: 1234, amount: 1000, loan_account: 101, loan_type: "Morgage", loan_amount: 600000, address_home: "123 Hollyhood Blvd"}
var cus2 = {name: "Alex", account_number: 1234, amount: 1000, loan_account: 101, loan_type: "Morgage", loan_amount: 600000, address_bussiness: "456 ABC St"}
var cus3 = {name: "Alex", account_number: 1234, amount: 1000, loan_account: 101, loan_type: "Morgage", loan_amount: 600000, address_home2: "789 Washington Blvd"}

Object.assign(cus1, cus2, cus3)

//create a null prototype object
var Customer = {}