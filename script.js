document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Redirect to Google.com after successful login.
    window.location.href = "new.html";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const lo = document.getElementById("search-button");

  lo.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Redirect to Google.com after successful login.
    window.location.href = "no.html";
  });
});
const typedTextElement = document.getElementById('typed-text');

// Text for the typing animation
const textToType = "GET YOUR CLOTHES WASHED AND IRONED";
let currentCharacter = 0;

// Function for the typing animation
function typeText() {
  typedTextElement.textContent = textToType.slice(0, currentCharacter);
  currentCharacter++;
  if (currentCharacter <= textToType.length) {
    setTimeout(typeText, 100); // Adjust typing speed here (milliseconds)
  }
}

// Start the typing animation
typeText();
