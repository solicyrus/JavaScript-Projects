    //Swich Statement
    function Color_Function() {
        var Color_Output;
        var Colors = document.getElementById("Color_Input").value;
        var Color_String = " is a great color!";
        switch(Colors) {
            case "Red":
                Color_Output = "Red" + Color_String;
                break;
                case "Yellow":
                    Color_Output = "Yellow" + Color_String;
                break;
                case "Green":
                    Color_Output = "Green" + Color_String;
                break;
                case "Blue":
                    Color_Output = "Blue" + Color_String;
                break;
                case "Pink":
                    Color_Output = "Pink" + Color_String;
                break;
                case "Purple":
                    Color_Output = "Purple" + Color_String;
                break;
                default:
                Color_Output = "Please enter a color exactly as written on the above list.";
        }
        document.getElementById("output_5").innerHTML = Color_Output
    }

    //getElementsByClassName
    function Hello_World_Function() {
        var A = document.getElementsByClassName("click");
        A[0].innerHTML = "The text has changed!";
    }

    //canvas
    var canvas = document.getElementById("myCanvas");

    //Context
    var ctx = canvas.getContext("2d");


    //Gradient Color
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "yellow");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height)

        //red rectangle
    ctx.fillStyle = "gray";
    ctx.fillRect(50, 30, 100, 50)

    //blue circle
    ctx.beginPath();
    ctx.arc(200, 100, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.strokestyle = "black";
    ctx.stroke();