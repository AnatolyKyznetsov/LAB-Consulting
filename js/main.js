$(function () {

// ==================== Preloader ====================

	var $preloader = $('#page-preloader'),
	    $spinner   = $preloader.find('.cssload-weird');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');

// ==================== Burger menu ====================

	$('.burger').click(function (event){
		event.preventDefault();
		$('.burgerLine').toggleClass('burgerLine_active');
	});
	$('.burger').click(function() {
		$('.header-nav').slideToggle(300, function(){
			if( $(this).css('display') === 'none'){
	    		$(this).removeAttr('style');
			}
		});
	});
	
// ==================== Lightbox gallery ====================

	 lightbox.option({
      'disableScrolling': true,
      'alwaysShowNavOnTouchDevices': true,
      'showImageNumberLabel': false,
      'Wraparound': true
    })

// ==================== Services slider ====================

	$('.services-slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left comments__switch comments__switch_back"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right comments__switch comments__switch_forward"></button>',
		autoplay: true,
  		autoplaySpeed: 3000
	});

// ==================== Transition to the section ====================

	$('.go-to').click( function(){ 
	  var scroll_el = $(this).attr('href'); 
	        if ($(scroll_el).length != 0) { 
	      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
	        }
	      return false;
	    });

// ==================== Bacground paralax ====================
	
	if ($(window).width() > 960) { 
		// Кешируем объект окна
			$window = $(window);
		   $('[data-type="background"]').each(function(){
		     var $bgobj = $(this); // Назначаем объект
		      $(window).scroll(function() {
				// Прокручиваем фон со скоростью var.
				// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
				var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
				// Размещаем все вместе в конечной точке
				var coords = '50% '+ yPos + 'px';
				// Смещаем фон
				$bgobj.css({ backgroundPosition: coords });
			}); 
		 });	
    }

// ==================== Animation ====================

    $(window).scroll(function() {
        $('.benefits__icon, .service__icon').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+450) {
                $(this).addClass('rotateIn');
            }
        });
        $('.mission__btn, .consultation').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                $(this).addClass('fadeInLeft');
            }
        });
         $('.privilege-list__icon, .requisites').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                $(this).addClass('zoomIn');
            }
        });
    });

    if($('#page-preloader').hide()) {
    	$('.serv-head__img').addClass('zoomIn');
    	$('.offer__title').addClass('fadeInLeft');
    };

} )

