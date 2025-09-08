function Ride_Function () {
    var Age, Can_ride;
    Age = document.getElementById("Age").value;
    Can_ride = (Age<18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}
//Constructor function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//Create a new Vehicle object using "new" keyword
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Erick drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model + " manufactured in " + Erick.Vehicle_Year;
}
//create a object type person
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eye;
}
var Soli = new Person("Soli", "Amiri", 40, "brown");
var Cyrus = new Person("Cyrus", "Amiri", 45, "hazel");
function myTest() {
    document.getElementById("New_Person").innerHTML= "I am " + Soli.firstName +" " + Soli.lastName + " " + Soli.age + " years old" + " with " + Soli.eyecolor + "-colored";
}
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count () {
        var Starting_Point = 9;
        function Plus_one() {Starting_Point += 1;}
        Plus_one();
        return Starting_Point;
    }
}
