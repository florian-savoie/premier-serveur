function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  var quiSuisJE = document.querySelectorAll('.quiSuisJE');
  
  function onScroll() {
    for (var i = 0; i < quiSuisJE.length; i++) {
      if (isElementInViewport(quiSuisJE[i])) {
        quiSuisJE[i].classList.add('animate');
      }
    }
  }
  
  window.addEventListener('scroll', onScroll);


$(document).ready(function() {
    $('#carouselExample').carousel({
      interval: 5000,
      wrap: true,
      pause: 'hover'
    });
  
    $('.carousel-control-prev').click(function() {
      $('#carouselExample').carousel('prev');
    });
  
    $('.carousel-control-next').click(function() {
      $('#carouselExample').carousel('next');
    });
  });

