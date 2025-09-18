 //Concat Method
 function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = " made this ";
    var part_3 = " into a complete ";
    var part_4 = " sentence. ";
    var whole_Sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_Sentence;
 }

 //Slice Method
 function Slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
 }

 //toUpperCase Method
 var text = "hello world";
 var result = text.toUpperCase();
 document.write("<br>" + result)

 //Search Method
 var word = "JavaScript string method";
 var position = word.search("method");
 document.write("<br>" + position)

 //Number Methods
 function string_Method() {
   var X = 182;
   document.getElementById("Numbers_to_string").innerHTML = X.toString();
 } 

 //toPrecision() Method
 function precision_Method() {
   var Y = 12939.3012987376112;
   document.getElementById("Precision").innerHTML = Y.toPrecision(10);
 }

 //toFixed Method
 var num = 12.34567;
 var result = num.toFixed(6);
 document.write("<br>" + result)


 //valueOf Method
 var math = 182.4;
 var result = math.valueOf();
 document.write("<br>" + result)