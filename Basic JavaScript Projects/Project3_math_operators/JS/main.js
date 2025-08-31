function addition(){  //Defining and naming the addition function
    var addition = 1364 + 40;
    document.getElementById("Math").innerHTML ="1364 + 40 = " + addition;   //Print the result in Html
}
function subtraction() {   function addition(){  //Defining and naming the subtraction function
    var subtraction = 2025-1985;
    document.getElementById("Mathematic").innerHTML = "2025 - 1985 = " + subtraction;  //Print the result in Html
}
function multiplication () {    //Defining and naming the multiplication function
    var simple_Math = 6 * 8 ;
    document.getElementById("Zarb").innerHTML = " 6 * 8 = " + simple_Math;   //Print the result in Html
}
function division () {    //Defining and naming the division function
    var simple_Math = 48/6;
    document.getElementById("Taghsim").innerHTML = "48 / 6 = " + simple_Math;  //Print the result in Html
}
function more_math () {   //Defining and naming the multiplied function
    var simple_Math = (1+2)*10/2-5;
    document.getElementById("Multiple").innerHTML= "1 plus 2, multiplied by 10,divided in half and then subtracted by 5 equals: " + simple_Math;   //Print the result in Html
}
function modulus_Operator () {   //Defining and naming the modulus function
    var simple_Math = 25 % 6 ;
    document.getElementById("Modulus").innerHTML=" When you divide 25 by 6 you have a remainder of: " + simple_Math;   //Print the result in Html
}
function negation_Operator() {    //Defining and naming the negation function
    var x = -10;
    document.getElementById("negation").innerHTML=" -x "   //Print the result in Html
}
var x=10;    //show increment
x++;
document.write(x + "&nbsp;&nbsp;"+"___");  //Print the result 

var x=10;    //show decrement
x--;
document.write(x);   //Print the result

window.alert(Math.random());  //show random between 0-10
window.alert(Math.random()*100);  //show random between 0-100