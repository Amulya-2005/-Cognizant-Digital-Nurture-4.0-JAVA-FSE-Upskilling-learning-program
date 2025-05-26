const event = { name: "Book Club", date: "2025-09-15", seats: 10 };

function displayEvent({ name, date }) {
  console.log(`${name} on ${date}`);
}

const updatedEvents = [...events]; // Cloning before filtering