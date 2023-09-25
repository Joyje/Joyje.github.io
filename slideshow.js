let slideShow = document.currentScript.parentElement;
let slideIndex = 0;
let slides;
 
window.onload = function() {
  slides = document.getElementsByClassName(slideShow.classList[0] + 'Slide');
}

function changeSlide(direction) {
  slides[slideIndex].style.display = 'none';
  switch(direction) {
    case 'left':
      if (slideIndex == 0) slideIndex = slides.length;
      slides[--slideIndex].style.display = 'block';
      break;
    case 'right':
      if (slideIndex == slides.length-1) slideIndex = -1;
      slides[++slideIndex].style.display = 'block';
      break;
  }
}
