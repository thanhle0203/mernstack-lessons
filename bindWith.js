//html example
<button id="newBtnBin">Practice Div</button>
var btn = document.getElementById("newBtnBind")
var onclick = function(){alert("The name is "+ this.name)}

btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
btn.addEventListener("click", this.onclick, false) //without bind context remains global

var user1 = {
     name : "Mueen"
 }

 btn.removeEventListener("click",this.onclick)

 // User
 var btn2 = document.getElementById("newBtnBin")
 var user = {
    name: "Thanh",
    id: 1011,
    session: 101,
    phone: 11242345
 }
 var onclick = function() {alert("The name is " + this.user)}
 btn2.addEventListener("click", this.onclick.bind(user), false)

 //second example
//<button id="newBtnBind">Practice Div</button> 
 //var selectBtn = document.getElementById("newBtnBind")
 //var info = {"Event" : "Click", "Topic" : "Bind"}

 //var clickFunc = function(){alert(`The Event is ${this.Event} and topic is  ${this.Topic}`)}
 //selectBtn.addEventListener("click", clickFunc.bind(info), false)

 //var info2 = {"Event" : "Multiple Click", "Topic" : "UnderStood Bind Purpose"}

