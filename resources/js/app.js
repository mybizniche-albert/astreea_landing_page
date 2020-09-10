(function($){

    var app = {
        onReady: function(){
            app.onResize();
        },	
        onLoad: function(){
            //$(document).foundation();
            
            app.sliderFunctions();
            app.fancyBoxFunction();
            app.formFunction();
            app.smoothscroll();
        },
        onResize: function(){
            if (window.screen.width < 1024) {
                $('.js-hero-banner-nav').detach().appendTo('.js-medium-size-controller');
                $('.js-product-slider-nav').detach().appendTo('.js-product-slider-nav--mobile');
            }else{
                $('.js-hero-banner-nav').detach().appendTo('.js-hero-quote-banner-nav');
                $('.js-product-slider-nav').detach().appendTo('.js-product-slider-nav--desktop');
            }
            if (window.screen.width < 640) {
                if (!$('.js-hero-banner-mobile').hasClass('slick-initialized')){
                    $('.js-hero-banner-mobile').slick({
                        dots: true,
                        infinite: true,
                        autoplay: true,
                        autoplaySpeed: 5000,
                        speed: 1000,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        appendDots: $('.js-hero-banner-nav--mobile'),
                        draggable: false,
                        pauseOnDotsHover: true,
                        easing: 'linear',
                        fade:true
                    });
                }
            }
        },
		utils: function(){
        },
        smoothscroll: function(){

			$('.smoothscrolling').on('click', function(){

				var headerH	= $('.header').height();



				$('html, body').animate({

					scrollTop: $(this.hash || $('a', this)[0].hash).offset().top - headerH/2

				}, { duration: 1000 });

				return false;

			});

		},
        sliderFunctions: function(){
            $('.js-hero-banner').slick({
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                appendDots: $('.js-hero-banner-nav'),
                draggable: false,
                pauseOnDotsHover: true,
                easing: 'linear',
                fade:true
            });

            $('.js-venues-banner').slick({
                autoplay: false,
                appendArrows:$('.js-venues-button'),
                arrows: true,
                dots: false,
                draggable: true,
                easing: 'linear',
                lazyLoad: 'progressive',
                infinite: true,
                prevArrow:'<button type="button" class="slick-prev slick-arrow"><i class="icn icn-slider-arrow-left"></i></button>',
                nextArrow:'<button type="button" class="slick-next slick-arrow"><i class="icn icn-slider-arrow-right"></i></button>',
                speed: 1000,
                slidesToShow: 4,
                slidesToScroll: 1,
                variableWidth: true,
            });

            $('.js-product-slider').slick({
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                appendDots: $('.js-product-slider-nav'),
                draggable: false,
                pauseOnDotsHover: true,
                easing: 'linear',
                fade:true
            });
        },
        fancyBoxFunction: function(){
            $('[data-fancybox="venues"]').fancybox({
                buttons: ['close'],
                infobar : false,
                image: {preload: true},
                btnTpl: {
                    // Arrows
                    arrowLeft:
                    '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
                    '<div><img src="assets/img/icn-arrow-white.png" style="transform:rotate(180deg);"/></div>' +
                    "</button>",

                    arrowRight:
                    '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
                    '<div><img src="assets/img/icn-arrow-white.png"/></div>' +
                    "</button>",
                }
            });
        },
        formFunction: function(){
			var formGrp = $('.form-field__wrap');
			if (formGrp){
                var formGrpText = formGrp.find('input[type="text"], input[type="tel"], input[type="email"], textarea');
                
                formGrpText.on('focusin focusout', function(e){
                    
                    if (e.type === "focusin" && !$(this).hasClass('focus')){
                        $(this).closest('.form-field__wrap').addClass('focus');
                    }
                    if (e.type === "focusout" && $(this).val() == ""){
                        $(this).closest('.form-field__wrap').removeClass('focus');
                    }
                });
			}
        }
    }


    document.addEventListener('DOMContentLoaded', app.onReady);
    window.addEventListener('load', app.onLoad);
    window.addEventListener('resize', app.onResize);

})(jQuery);
