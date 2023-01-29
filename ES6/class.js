//classes :  classes with syntax similar to java, .net 
//  -- are special type of functions in javascript that give us desired behaviour

// class MyClass{ //uses class keyword
//     constructor(){}//initializa the class object
//     method(){}//functions to provide behaviour that we expect from the class
// }


class Vaccination {

    constructor(name, releaseDate, price ){
        this.VaccineName = name
        this.ReleaseDate = releaseDate
        this.VaccinePrice = price
        this.Place = "Some Place on Earth!!"
    }

    getVaccineDetails = function (availability) {
        return {
            Name : this.VaccineName,
            ReleaseDate : this.ReleaseDate,
            Price : this.VaccinePrice,
            Available : availability ? "Yes" : "No"
        }
    }

    getSchedule () {
        return {
            name : this.VaccineName,
            place : this.Place
        }
    }

    getScheduleArwFunc = ()=>`Name : ${this.VaccineName} 
Place : ${this.Place}`

    //calculateArea = (a,b)=>a*b
}


let myVaccine = new Vaccination("pFizer", "01/08/2021", "$100")

console.log(myVaccine.getVaccineDetails())
console.log(myVaccine.getVaccineDetails(true))

console.log(myVaccine.getSchedule())
console.log(myVaccine.getScheduleArwFunc())


//Question : create a class to calculate area of anything - rectangle, circle, one object of your choice
 class Shape {
    // this is the constructor for Shape
    constructor(width, height, radius){
        this.width = width
        this.height = height
        this.radius = radius
    }

    getShapeDetails = function () {
        return {
            Width: this.width,
            Height: this.height,
            Radius: this.radius
        }
    }


    // compute and return volume
    getRectangleAreaArw = () => `Area of Rectangle: ${this.width * this.height}`
    getRectangleArea () {
        return {
            Area: this.width*this.height
        }
    }

    getCircleAreaArw = () => `Area of Circle: ${3.15*this.radius*this.radius}`
    getCircleArea () {
        return {
            Area: 3.14*this.radius*this.radius
        }
    }
 }

 let shape = new Shape(2, 10, 5)
 console.log(shape.getShapeDetails())
 console.log(shape.getRectangleAreaArw())
 console.log(shape.getRectangleArea())
 console.log(shape.getCircleAreaArw())
 console.log(shape.getCircleArea())