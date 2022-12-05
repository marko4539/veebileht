// KOmmenteeritud failis tattoo.js
function function1() {
  const EFFECT = document.querySelector('#effect');

  window.addEventListener('scroll', scrollEffect);

  function scrollEffect() {
      if(window.scrollY>=500) {
          EFFECT.style.opacity = '1';
          EFFECT.style.transform = 'translateX(0px)';
          EFFECT.style.transition = '1s ease-in-out';
      }
      else {
          EFFECT.style.opacity = '0'
          EFFECT.style.transform = 'translateX(-50px)'
      }
  }
  scrollEffect();
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
} 

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}