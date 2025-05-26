const eventName = "Community Music Fest";
const eventDate = "2025-06-10";
let availableSeats = 50;

console.log(`${eventName} on ${eventDate} - Seats available: ${availableSeats}`);

function register() {
  if (availableSeats > 0) {
    availableSeats--;
    console.log("Registered! Seats left:", availableSeats);
  }
}