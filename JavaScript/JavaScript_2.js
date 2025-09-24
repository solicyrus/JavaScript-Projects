var form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var errorMsg = "";

    if (name === "") {
        errorMsg += "Name is required.\n";
    }

    if (email === "") {
        errorMsg += "Email is required.\n";
    } else {
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            errorMsg += "Email is invalid.\n";
        }
    }

    if (message === "") {
        errorMsg += "Message is required.\n";
    }

    if (errorMsg !== "") {
        alert(errorMsg);
        event.preventDefault(); 
    }
});

function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert (characterType + " is in the " + character.innerHTML + " universe!")
}