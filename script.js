//burger menu functionality

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  navLinks.classList.toggle("open");
  links.forEach( link => {
    link.classList.toggle('fade')
  });
});

const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".landing-page");
const burgerLine = document.querySelectorAll(".burger-line");

const sectionOneOptions = {
  rootMargin: "-50px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
  entries, 
  sectionOneObserver
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      document.getElementById("logo").src = "img/logo-light-bg copy.png";
      nav.classList.add("nav-scrolled");
      burgerLine[0].classList.add("burger-line-scrolled");
      burgerLine[1].classList.add("burger-line-scrolled");
      burgerLine[2].classList.add("burger-line-scrolled");
    } else{
      document.getElementById("logo").src = "img/logo-drk-bg copy.png";
      nav.classList.remove("nav-scrolled");
      burgerLine[0].classList.remove("burger-line-scrolled");
      burgerLine[1].classList.remove("burger-line-scrolled");
      burgerLine[2].classList.remove("burger-line-scrolled");
    }
  })
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
