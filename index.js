const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 2000,
    direction: 'horizontal',
    loop: true,
  

    autoplay: {
    delay: 2000,
    },

    fadeEffect: {
    crossFade: true
    },  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  $(function() {
 
    $(window).scroll(function() {
     
    if($(this).scrollTop() != 0) {
     
    $('#toTop').fadeIn();
     
    } else {
     
    $('#toTop').fadeOut();
     
    }
     
    });
     
    $('#toTop').click(function() {
     
    $('body,html').animate({scrollTop:0},800);
     
    });
     
    });

var delay_popup = 10;
    setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);


$(document).ready(function() {

      // Функция открытия модального окна
    
      $(".modal-link").on("click", function() {
    
        $('.modal-overlay[data-modal-id="'+$(this).data('modal-id')+'"]').addClass("modal-overlay_visible");
    
      });
    
      // Функция закрытия модального окна нажатием на кнопку
    
      $(".modal__close").on("click", function() {
    
        $(".modal-overlay").removeClass("modal-overlay_visible");
    
      });
    
      // Функция закрытия модального окна нажатием вне окна
    
      
    

    
});

