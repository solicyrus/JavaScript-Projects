
//Display the type of different values
document.write(typeof 5 + "<br>"); //number
document.write(typeof "Hello" + "<br>");//string

//combine string and number
document.write("10" + 5 + "<br>");//result it "105"

//Function to return NaN (Not a number)
function my_Function() {
    document.getElementById("Test").innerHTML=0/0;
}

//check if value is NaN
document.getElementById("Test 1").innerHTML = isNaN("This is a string"); //true
document.getElementById("Test 2").innerHTML = isNaN("007");//false

//Display Infinity and -Infinity
document.write(2E310 + "<br>");//Infinity
document.write(-3E310 + "<br>");//-Infinity

//Greater than operator
document.write("<h3>Operator1</h3>");
document.write(10>2);//true

//Less than operator
document.write("<h3>Operator2</h3>");
document.write(10<2);//false

//Console log examples
console.log(5+2);//7
console.log(5>3);//true
console.log(7<3);//false

//Double equals (==) comparison
document.write("<h3>Operator3</h3>");
document.write(10==10);//true


document.write("<h3>Operator4</h3>");
document.write(3==10);//false

//Triple equals (===) comparison
document.write("<h3>Operator5</h3>");

X=10;
Y=10;
document.write(X===Y);//true (same type and value)

document.write("<h3>Operator6</h3>");

A=82;
B="82";
document.write(A===B);//false (different type)

//More triple equals examples
console.log(10===10);//true
console.log(50==="20");//false
console.log(20==="20");//false
console.log("20"==="40");//false

document.write("<h3>Operator7</h3>");
document.write(10===10);//true

document.write("<h3>Operator8</h3>");
document.write(50==="20");//false

document.write("<h3>Operator9</h3>");
document.write(20==="20");//false

document.write("<h3>Operator10</h3>");
document.write("20"==="40");//false

//AND operator (&&)
document.write("<h3>Operator11</h3>");
document.write(5>2 && 10>4);//true

document.write("<h3>Operator12</h3>");
document.write(5>10 && 10>4);//false

//OR operator (||)
document.write("<h3>Operator13</h3>");
document.write(5>10 || 10>4);//true

document.write("<h3>Operator14</h3>");
document.write(5>10 || 10>20);//false

//NOT operator (!)
function not_Function() {
    document.getElementById("Not").innerHTML=!(20>10);
}

//Double NOT operator (||)
function Not_Function() {
    document.getElementById("not").innerHTML=!(5>10);//true
}