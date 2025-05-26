console.log("Form submitted");

function debugRegistration(data) {
  console.log("Sending data:", data);
  fetch("https://mockapi.io/register", {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(json => console.log("Success:", json))
    .catch(err => console.error("Error:", err));
}