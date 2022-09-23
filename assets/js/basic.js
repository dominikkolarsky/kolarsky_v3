// Hamburger menu selections
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu functionality
hamburger.addEventListener("click", openMenu);

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  header.classList.toggle("active");
}

// Close menu on nav menu clicks
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  header.classList.remove("active");
}

// swicher skills
function switchTab() {
  const skillsCheck = document.querySelector('#skillsCheck');
  const favourites = document.querySelector('#favourites');
  const others = document.querySelector('#others');

  if (skillsCheck.checked == true) {
    others.style.display = 'flex';
    favourites.style.display = 'none';
  } else {
    others.style.display = 'none';
    favourites.style.display = 'flex';
  }
}

//Get the button
const mybutton = document.querySelector("#scrollUp");
const header = document.querySelector('#header');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
    header.classList.add("activeScroll");

  } else {
    mybutton.style.display = 'none';
    header.classList.remove("activeScroll");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
