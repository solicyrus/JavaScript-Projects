var slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    //hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1;}

    //reset active dot
    for (var i = 0; i <dots.length; i++) {
        dots[i].classList.remove("active");
    }

    //show current slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    
    setTimeout(showSlides, 3000);//slide changes every second
}


//==== countdown Timer =====
function countdown() {
    var seconds = document.getElementById("seconds").value;
    var timer = document.getElementById("timer");

    
    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert ("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}