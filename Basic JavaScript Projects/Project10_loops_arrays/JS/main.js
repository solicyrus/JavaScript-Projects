//Count
function Call_Loop() {
    var Digit = "";
    var X = 10;
    while (X > 0) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//Length Property 
function showLength() {
    var text = "Hello JavaScript!";
    var lengthOfText = text.length;
    document.getElementById("demo").innerHTML = "length: " + lengthOfText;
}

//For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array and Object
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

//Const
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price ="$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//Let keyword
var X = 82;
let result = X;
{
    let X = 33;
    result +="<br>" + X;
}
result += "<br>" + X;
document.getElementById("output_1").innerHTML = result;

//Return
function addNumbers(a, b) {
    return a + b;
}
let sum = addNumbers(5, 3);
document.getElementById("output_2").innerHTML = sum;

//objects
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("car_Object").innerHTML = car.description();


    //Break
    function breakLoop() {
        let output_3 = "";
        for (let i = 1; i <=10; i++) {
            if (i===6) {
                break;
            }
            output_3 += i + "<br>";
        }
        document.getElementById("break_example").innerHTML = output_3;
    }

    //Continue
    function continueLoop() {
        let output_4 = "";
        for (let i = 1; i <= 10; i++) {
            if (i === 6) {
                continue;
            }
            output_4 += i + "<br>";
        }
        document.getElementById("continue_example").innerHTML = output_4;
    }


