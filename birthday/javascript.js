// Floating balloons
function createBalloon() {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");

    // Random position & color
    balloon.style.left = Math.random() * window.innerWidth + "px";
    balloon.style.background = `hsl(${Math.random() * 360}, 80%, 70%)`;

    balloon.style.animationDuration = (6 + Math.random() * 5) + "s";

    document.body.appendChild(balloon);

    setTimeout(() => balloon.remove(), 11000);
}

setInterval(createBalloon, 500);

// Surprise message
function showMessage() {
    document.getElementById("messageBox").style.display = "block";
}
