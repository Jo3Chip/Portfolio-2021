//burger menu functionality

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll('.nav-links li');
const landing = document.querySelector('.landing-page');

burger.addEventListener('click', () => {
  navLinks.classList.toggle("open");
  landing.classList.toggle("open");
  links.forEach( link => {
    link.classList.toggle('fade')
  });
});

const petText = document.getElementById("pet-text");
const petInfoButton = document.getElementById("pet-info");

petInfoButton.addEventListener('click', () => {
  petText.classList.toggle("open");
});

const photoText = document.getElementById("photo-text");
const photoInfoButton = document.getElementById("photo-info");

photoInfoButton.addEventListener('click', () => {
  photoText.classList.toggle("open");
});