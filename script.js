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
//one feature that i built was a p tag that was made under the button for rsvp. this was done instead of an alert tag because an alert tag would go away and you wouldnt know if you had rsvped or not, but a p tag will stay on the website.
//when the user clicks a button, first it sees that it needs to active the function assosiated with the button. then it first check if the p tag has been created, if so it does nothing, otherwise it will createa p tag with an id and the text in it.
// then it styles the text and puts it after the button. the event attribute is the part of the button used to denouce when it is pressed. the funciton keeps all of the actions the button causes in one area and in order. the dom method i used involved creating a p tag and making a variable for the button so i can place the p tag after it.
//two crap elements i used on the button were first the contrast section, this was done by making it purple to match the website. I also used allignment to make sure the button didnt feel out of place, putting it to the side of the page and spacing it out from other objects.
// if i hadnt done that, it would have made the object look like it was just ploped straight onto the page. it also would have looked really out of place being grey compared to the purple and white.