const events = [
  { name: "Yoga Class", date: "2025-05-28", seats: 5 },
  { name: "Tech Talk", date: "2025-04-01", seats: 0 }
];

events.forEach(event => {
  const today = new Date();
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming: ${event.name}`);
  }
});

function registerEvent(event) {
  try {
    if (event.seats > 0) {
      event.seats--;
      console.log("Successfully registered.");
    } else {
      throw new Error("No seats available.");
    }
  } catch (err) {
    console.error("Registration failed:", err.message);
  }
}