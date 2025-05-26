document.querySelector("#registerBtn").onclick = () => alert("Registered!");
document.querySelector("#categoryFilter").onchange = (e) => {
  console.log("Selected category:", e.target.value);
};
document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});