//Global variable
var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();


//Local variable
function Add_numbers_3() {
    var Y = 20;
    document.write(40 + Y + "<br>");
}
try {
function Add_numbers_4() {
    document.write(Y + 150 + "<br>");
}
Add_numbers_3();
Add_numbers_4();
} catch (err) {
    console.error("error in Add_number_4", err.message);
}

//console Local variable
function Add_numbers_5() {
    var Z = 26;
    console.log(24 + Z);
}
try {
function Add_numbers_6() {
    console.log(Z + 120);
}
Add_numbers_5();
Add_numbers_6();
} catch (err) { 
    console.error("error in Add_number_6:", err.messagr);
}
//if statement
if (1<2) {
    document.write("The left number is smaller than the number on the right." + "<br>")
}
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//else statemente
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else { 
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
 //else if statement
 function Time_function () {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >=12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
 }