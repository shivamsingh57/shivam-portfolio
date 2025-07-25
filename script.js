// script.js



AOS.init();

const toggleBtn = document.getElementById("modeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

// // Typing Animation for Hero Roles
// const roles = ["Java Backend Developer", "Software Engineer", "Software Developer"];
// let currentRole = 0;
// let charIndex= 0;
// let typingDiv = document.createElement("div");
// typingDiv.className = "animated-roles";
// document.querySelector(".hero-text").insertBefore(typingDiv, document.querySelector(".hero-text p").nextSibling);

// function typeRole() {
//   if (charIndex < roles[currentRole].length) {
//     typingDiv.textContent += roles[currentRole].charAt(charIndex);
//     charIndex++;
//     setTimeout(typeRole, 100);
//   } else {
//     setTimeout(eraseRole, 2000);
//   }
// }

// function eraseRole() {
//   if (charIndex > 0) {
//     typingDiv.textContent = roles[currentRole].substring(0, charIndex - 1);
//     charIndex--;
//     setTimeout(eraseRole, 50);
//   } else {
//     currentRole = (currentRole + 1) % roles.length;
//     setTimeout(typeRole, 500);
//   }
// }

// typeRole();



// const roles = ["Java Developer", "Software Engineer", "Software Developer"];
// let index = 0;
// const roleEl = document.querySelector(".role-text");

// function animateRoles() {
//   roleEl.textContent = roles[index];
//   index = (index + 1) % roles.length;
//   setTimeout(animateRoles, 2500);
// }

// document.addEventListener("DOMContentLoaded", animateRoles);







const roles = ["Java Developer.", "Software Engineer.", "Software Developer."];
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


document.getElementById("contactForm").addEventListener("submit", async function (e) {
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
      body: JSON.stringify({ name, email, message })
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














