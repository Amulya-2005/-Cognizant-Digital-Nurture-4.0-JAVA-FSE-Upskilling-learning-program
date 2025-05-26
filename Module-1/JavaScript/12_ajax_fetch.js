function submitRegistration(data) {
  fetch("https://mockapi.io/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => {
      setTimeout(() => alert("Registration successful!"), 1000);
    })
    .catch(() => alert("Registration failed"));
}