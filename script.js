//Function for extra text to be displayed on the client portfolio sections.

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

//Smooth scroll navigation for the homepage buttons to allow quick navigation.

function smoothScroll(target, duration){
  var target=document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime){
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0,run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var portfolioScroll = document.getElementById('portfolio-nav');
var contactScroll = document.getElementById('contact-nav');
var backToTop = document.getElementById('back-top');

portfolioScroll.addEventListener('click', function(){
smoothScroll('.portfolio', 1000);
})
contactScroll.addEventListener('click', function(){
smoothScroll('.overall-contact-container', 1000);
})
backToTop.addEventListener('click', function(){
smoothScroll('.landing-page', 1000);
})