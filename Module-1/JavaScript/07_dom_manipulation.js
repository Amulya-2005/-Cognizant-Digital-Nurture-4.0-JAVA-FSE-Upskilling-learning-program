const eventContainer = document.querySelector("#events");

const newEventCard = document.createElement("div");
newEventCard.textContent = "New Event: Dance Night";
eventContainer.appendChild(newEventCard);

function updateUIAfterRegistration() {
  newEventCard.textContent += " - Registered!";
}