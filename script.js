// This is the script file

AOS.init();

const toggleBtn = document.getElementById("modeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});



const roles = ["Software Engineer.", "Java Developer.", "Software Developer."];
let index = 0;
let charIndex = 0;
let isDeleting = false;

const roleEl = document.querySelector(".role-text");

function typeRole() {
  const currentRole = roles[index];
  if (isDeleting) {
    charIndex--;
    roleEl.textContent = currentRole.substring(0, charIndex);
  } else {
    charIndex++;
    roleEl.textContent = currentRole.substring(0, charIndex);
  }

  let delay = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = 2000; // Pause before deleting
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
    delay = 500; // Pause before typing next
  }

  setTimeout(typeRole, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  typeRole();
});

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const statusMsg = document.getElementById("formStatus");

    if (!name || !email || !message) {
      statusMsg.textContent = "Please fill all fields.";
      statusMsg.style.color = "red";
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        statusMsg.textContent = "Message sent successfully!";
        statusMsg.style.color = "green";
        document.getElementById("contactForm").reset();
      } else {
        statusMsg.textContent = "Failed to send message.";
        statusMsg.style.color = "red";
      }
    } catch (error) {
      statusMsg.textContent = "An error occurred.";
      statusMsg.style.color = "red";
      console.error("Error:", error);
    }
  });

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSdA8svxXBYAwD0gZlH99TFeiNvl6o_VB5YRNGwuT8-UTlnJ8w/viewform",
    "_blank"
  );
});




  AOS.init({
    duration: 1000,
    once: true,
  });

