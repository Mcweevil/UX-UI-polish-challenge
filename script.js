console.log("script.js is connected");
function handleRSVP() {
    const exist = document.querySelector(".feedback-message");
    if (exist) {
        return;
    }
    const message = document.createElement("p");
    message.textContent = "You're on the list — see you there!";
    message.classList.add("feedback-message");
    message.style.color = "#0c0b0b";
    const rsvpButton = document.getElementById("rsvpBtn");
    rsvpButton.after(message);
}