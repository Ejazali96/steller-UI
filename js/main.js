/*
* Steller Security Template
* Version: 01,

===========================================
    
    All include section: 

    01. smooth scroll start
    02. sticky header start
    03. show or hide start
    04. animate scroll start
    05. hamburger menu start
    06. testimonial slider start
    
===========================================



*/

(function ($) {
    "use strict";

    $(document).ready(function () {

        //02. smooth scroll start
        function smoothScroolInit() {
            $('.back-to-top').smoothScroll({
                speed: 1000
            });
        }
        smoothScroolInit();

        //03. sticky header start
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 20) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();

        //04. show or hide start
        $(window).on('scroll', function (event) {
            if ($(this).scrollTop() > 600) {
                //$('.back-to-top').fadeIn(200);
            } else {
                //$('.back-to-top').fadeOut(200);
            }
        });

        //05. animate scroll start
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        //06. hamburger menu start
        $('.hamburger_menu, .menuopen').on('click', function (event) {
            event.preventDefault();
            $('.hamburger_menu .line_top').toggleClass('current');
            $('.hamburger_menu .line_center').toggleClass('current');
            $('.hamburger_menu .line_bottom').toggleClass('current');
            $('.offcavas_menu').toggleClass('open');
        });


        //07. testimonial slider start
        function payment_carouselInit() {
            $('.owl-carousel.payment_logo').owlCarousel({
                dots: false,
                loop: true,
                margin: 30,
                stagePadding: 0,
                smartSpeed:2500,
                autoplay: true,
                autoplayTimeout: 2500,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 3
                    },
                    400: {
                        items: 4,
                    },
                    576: {
                        items: 4,
                    },
                    768: {
                        items: 5,
                    },
                    992: {
                        items: 6
                    }
                }
            });
        }
        payment_carouselInit();

    });

})(jQuery);

window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: "jkv7s675"
};

// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/jkv7s675'
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/jkv7s675';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

