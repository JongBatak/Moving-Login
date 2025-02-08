const loginButton = document.getElementById("loginButton");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const message = document.getElementById("message");

let canClick = false;

// Store the original button position
let originalPosition = { x: 0, y: 0 };

// Event: Hover over the button
loginButton.addEventListener("mouseenter", () => {
  if (!canClick) {
    const { x, y } = getRandomPositionWithinRange();
    loginButton.style.transform = `translate(${x}px, ${y}px)`;
    message.style.color = "red";
    message.textContent = "You need to fill in your credentials!";
  }
});

// Event: Button clicked
loginButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  if (canClick) {
    alert("Logged in successfully!");
  } else {
    message.style.color = "red";
    message.textContent = "Fill in your credentials!";
  }
});

// Validate credentials
usernameField.addEventListener("input", validateCredentials);
passwordField.addEventListener("input", validateCredentials);

function validateCredentials() {
  if (usernameField.value && passwordField.value) {
    message.style.color = "green";
    message.textContent = "You may proceed!";
    canClick = true;

    // Return button to original position with animation
    loginButton.classList.add("return");
    setTimeout(() => {
      loginButton.style.transform = `translate(0, 0)`;
      loginButton.classList.remove("return");
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Fill in your credentials!";
    canClick = false;
  }
}

// Generate a random position within a 200px by 200px range
function getRandomPositionWithinRange() {
  const offsetX = Math.random() * 400 - 100; // Range: -100 to 100
  const offsetY = Math.random() * 400 - 100; // Range: -100 to 100
  return { x: offsetX, y: offsetY };
}
