const navbar = document.getElementById("navBar");
const darkModeButton = document.getElementById("dark-mode");
const body = document.body;
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const img = document.getElementsByClassName("logo-blanc");

// Change navbar color on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar?.classList.add("nav-bar-visible");
  } else {
    navbar?.classList.remove("nav-bar-visible");
  }
});

// Dark mode toggle
darkModeButton.addEventListener("click", () => {
  const isDark = body.classList.toggle("light");
  moon.classList.toggle("light");
  sun.classList.toggle("light");
  console.log("click");

  const images = document.querySelectorAll(".logo");
  images.forEach((img) => {
    img.src = isDark ? img.dataset.dark : img.dataset.light;
  });
});

// Change images in black mode
