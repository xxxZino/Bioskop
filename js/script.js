// toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di click
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click di luar side bar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.getElementById('home').addEventListener('click', function() {
  window.location.href = 'home.html';
});
document.getElementById('hl').addEventListener('click', function() {
  window.location.href = 'home.html';
});