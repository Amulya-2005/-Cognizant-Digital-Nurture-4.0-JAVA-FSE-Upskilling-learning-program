document.querySelector("#registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const { name, email, event: selectedEvent } = e.target.elements;

  if (!name.value || !email.value) {
    alert("Please fill in all fields.");
    return;
  }

  console.log("Registered:", name.value, email.value, selectedEvent.value);
});