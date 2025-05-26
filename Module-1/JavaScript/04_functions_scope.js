function addEvent(name, date, category, seats) {
  return { name, date, category, seats };
}

function registerUser(event) {
  if (event.seats > 0) {
    event.seats--;
    console.log("User registered for", event.name);
  }
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

function createCategoryTracker() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const musicTracker = createCategoryTracker();
console.log("Music registrations:", musicTracker());