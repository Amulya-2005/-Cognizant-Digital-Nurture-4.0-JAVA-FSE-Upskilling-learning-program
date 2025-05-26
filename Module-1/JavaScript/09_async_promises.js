// Using then/catch
fetch("https://mockapi.io/events")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Using async/await
async function loadEvents() {
  const loading = document.querySelector("#loading");
  loading.style.display = "block";
  try {
    const res = await fetch("https://mockapi.io/events");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    loading.style.display = "none";
  }
}