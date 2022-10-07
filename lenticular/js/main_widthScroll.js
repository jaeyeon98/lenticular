$(document).ready(function() {
    var $slider = $('.slider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      
      $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
      
      $progressBarLabel.text( calc + '% completed' );
    });
    
    $slider.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 400,
      dots: true
    });  

    $slider.on('wheel', (function(e) {
        e.preventDefault();
      
        if (e.originalEvent.deltaY < 0) {
          $(this).slick('slickNext');
        } else {
          $(this).slick('slickPrev');
        }
      }));
    
  });
  