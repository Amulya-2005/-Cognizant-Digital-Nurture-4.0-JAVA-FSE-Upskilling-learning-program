let events = [
  { name: "Guitar Workshop", category: "music" },
  { name: "Painting Class", category: "art" }
];

events.push({ name: "Jazz Night", category: "music" });

const musicEvents = events.filter(e => e.category === "music");

const displayCards = events.map(e => `Event: ${e.name}`);
console.log(displayCards);