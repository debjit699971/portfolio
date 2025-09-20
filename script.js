// ----------------------
// Typing Effect
// ----------------------
const texts = [
  "Aspiring Frontend Developer",
  "MERN Stack Enthusiast",
  "Java & OOP Programmer",
  "Problem Solver"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
}
type();

// ----------------------
// Dark Mode Toggle
// ----------------------
const toggleBtn = document.getElementById("dark-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ----------------------
// GSAP Hero Animation
// ----------------------
gsap.from("#hero h2", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
gsap.from("#hero p", { opacity: 0, y: 20, duration: 1, delay: 0.5, ease: "power3.out" });
gsap.from(".hero-buttons", { opacity: 0, scale: 0.8, duration: 1, delay: 1, ease: "back.out(1.7)" });

// ----------------------
// ScrollMagic Scenes
// ----------------------
window.addEventListener("load", () => {
  const controller = new ScrollMagic.Controller();

  const sections = ["#about", "#skills", "#projects", "#experience", "#education", "#certificates", "#contact"];

  // Fade in each section
  sections.forEach((section) => {
    new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 0.8,
      reverse: false
    })
      .setTween(gsap.from(section, { opacity: 0, y: 50, duration: 1, ease: "power2.out" }))
      .addTo(controller);
  });

  // Skills stagger
new ScrollMagic.Scene({
  triggerElement: "#skills",
  triggerHook: 0.7,
  reverse: false
})
  .setTween(gsap.fromTo(".skill",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
  ))
  .addTo(controller);

// Projects stagger
new ScrollMagic.Scene({
  triggerElement: "#projects",
  triggerHook: 0.7,
  reverse: false
})
  .setTween(gsap.fromTo(".project-card",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }
  ))
  .addTo(controller);

});

// ----------------------
// Scroll Progress Bar
// ----------------------
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});

// ----------------------
// GSAP Floating Shapes
// ----------------------
gsap.to(".bg-shape", {
  x: "random(-300, 300)",
  y: "random(-300, 300)",
  duration: 12,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  stagger: 1
});

// GSAP Hero Animation (run after DOM is loaded)
window.addEventListener("DOMContentLoaded", () => {
  gsap.from("#hero h2", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
  gsap.from("#hero p", { opacity: 0, y: 20, duration: 1, delay: 0.5, ease: "power3.out" });
  gsap.from(".hero-buttons", { opacity: 0, scale: 0.8, duration: 1, delay: 1, ease: "back.out(1.7)" });
});

// Skills bounce-in
new ScrollMagic.Scene({
  triggerElement: "#skills",
  triggerHook: 0.7,
  reverse: false
})
.setTween(gsap.from(".skill", {
  opacity: 0,
  y: 30,
  scale: 0.8,
  duration: 0.6,
  stagger: 0.1,
  ease: "back.out(1.7)"
}))
.addTo(controller);

// Skill Rating Popup
const skills = document.querySelectorAll(".skill");
const popup = document.getElementById("skill-rating-popup");
const overlay = document.getElementById("popup-overlay");
const skillName = document.getElementById("skill-name");
const ratingText = document.getElementById("rating-text");
const ratingFill = document.getElementById("rating-fill");
const closeBtn = document.getElementById("close-rating");

skills.forEach(skill => {
  skill.addEventListener("click", () => {
    const name = skill.getAttribute("data-skill");
    const rating = skill.getAttribute("data-rating");

    skillName.textContent = name;
    ratingText.textContent = `Rating: ${rating}/10`;
    ratingFill.style.width = `${rating * 10}%`;

    overlay.style.display = "block";
    popup.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  popup.classList.remove("show");
  overlay.style.display = "none";
});

// ----------------------
// Simple GSAP animation for flip cards
// ----------------------
gsap.from(".skill-card", {
  opacity: 0,
  y: 30,
  scale: 0.8,
  duration: 0.6,
  stagger: 0.1,
  ease: "back.out(1.7)",
  delay: 0.5
});

// 🌙 Floating Moon Animation
gsap.to("#moon", {
  y: 20,
  duration: 4,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});

