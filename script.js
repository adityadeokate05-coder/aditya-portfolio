
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const typedText = document.getElementById("typedText");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// Mobile navigation menu
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after selecting a section
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Rotating hero text
const roles = [
  "Cybersecurity",
  "Web Development",
  "Digital Safety"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function animateText() {
  const currentRole = roles[roleIndex];

  if (deleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedText.textContent = currentRole.substring(0, charIndex);

  let delay = deleting ? 45 : 90;

  if (!deleting && charIndex === currentRole.length) {
    deleting = true;
    delay = 1200;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 350;
  }

  window.setTimeout(animateText, delay);
}

animateText();
