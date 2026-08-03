// ===== Balaji Interior Website =====

// Current Year
const footer = document.querySelector("footer");

if (footer) {
  footer.innerHTML =
    "© " +
    new Date().getFullYear() +
    " Balaji Interior & Designers Hyderabad. All Rights Reserved.";
}

// Header Background on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.style.background = "#000";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
  } else {
    header.style.background = "rgba(0,0,0,.85)";
    header.style.boxShadow = "none";
  }
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section,.card,.box").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.7s";
  observer.observe(el);
});



console.log("Balaji Interior Website Loaded Successfully.");
