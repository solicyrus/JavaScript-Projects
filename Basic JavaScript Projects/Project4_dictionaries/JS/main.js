function my_Dictionary() {
    var Car = {
        Brand:"Tesla",
        Model:"Model Y",
        Color:"Red",
        Year:2025,
        Speed:"250 km/h"
    };
    document.getElementById("Dictionary").innerHTML= "The car brand is: " + Car.Brand + " and its color is " + Car.Color;
}
function Dictionary() {
    var Animal = {
        Species:"Cat",
        Species: "Dog",
        Color:"white",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("Wight").innerHTML = "The animal Species is: " + Animal.Species + " and its breed is " + Animal.Breed;
     delete Animal.Age;
    document.getElementById("Dog").innerHTML = Animal.Age;
}
