function showMessage() {
    var messages = [
        "Hello",
        "I am learning JavaScript right now",
        "I love JavaScript",
        "You can change the font and color, by clicking on button"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var selectedMessage = messages[randomIndex];
    var colors = ["red", "blue", "green", "purple", "orange"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var messageElement = document.getElementById("message");
    messageElement.innerHTML = selectedMessage;
    messageElement.style.color = randomColor;
    messageElement.style.fontWeight = "bold";
    messageElement.style.fontSize = "20px";

}
function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}