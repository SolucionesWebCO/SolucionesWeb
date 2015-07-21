// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: Matrix.
// Author: Topone.

// -------------------------------------------------------------------------------------------------------------------------------
/*global $:false */
/*global window: false */

(function(){
  "use strict";

  $(function ($) {
    /* ==========================================================================
       Append .backside big image <img>'s as CSS backgrounds
       ========================================================================== */

        $('.img-side').each(function() {
            var imgSrc = $(this).children('img').attr('src');
            $(this).css('background', 'url("' + imgSrc + '")');
            $(this).children('img').hide();
            $(this).css('background-position', '50% 0%');
        });

        $('.img-holder').each(function() {
            var imgSrc = $(this).children('img').attr('src');
            $(this).css('background', 'url("' + imgSrc + '")');
            $(this).children('img').hide();
            $(this).css('background-position', '50% 0%');
        });

        $('.img-slide').each(function() {
            var imgSrc = $(this).children('img').attr('src');
            $(this).css('background', 'url("' + imgSrc + '")');
            $(this).children('img').hide();
            $(this).css('background-position', '50% 50%');
        });

        /* ==========================================================================
       Change the background color of some elements using HTML5 attributes date
       ========================================================================== */
        $("#main").each(function() {
            $(this).css('background', $(this).data('color'));
        });
        // this script for heading colors
        $("h1,h2,h3,h4,h5,h6").each(function() {
            $(this).css('color', $(this).data('color'));
        });

        /*-----  End of Section comment block  ------*/


        /* ==========================================================================
            LOADER SPIN LOADING PAGE
            ========================================================================== */

        $(function() {
            $(".spinner").delay(500).fadeOut();
            $("#loader-wrapper").delay(350).fadeOut("fast");
        });

        /*-----  End of Section comment block  ------*/



        /* ==========================================================================
           Initalize Super Slides.js Simple jquery slider for images
           ========================================================================== */

        $(function() {
            $('#slides').superslides({
                hashchange: true,
                slide_easing: 'easeInOutCubic',
                animation: 'fade',
                pagination: false,
                scrollable: false,
                play: 3500
            });
        });
        /*-----  End of Section comment block  ------*/



        /* ==========================================================================
       Give the IMages 100% full aspact ratio
       ========================================================================== */
        $(".full-img").css('width', '100%');

        function alignVertical() {

            $('.align-vertical').each(function() {
                var that = $(this);
                var height = that.height();
                var parentHeight = that.parent().height();
                var padAmount = (parentHeight / 2) - (height / 2);
                that.css('padding-top', padAmount);
            });
        }

        function alignBottom() {
            $('.align-bottom').each(function() {
                var that = $(this);
                var height = that.height();
                var parentHeight = that.parent().height();
                var padAmount = (parentHeight) - (height) - 32;
                that.css('padding-top', padAmount);
            });
        };



        /* ==========================================================================
       Match height for section 
       ========================================================================== */
        $('.match-height').each(function() {
            $(this).css('height', $(window).height());
        });

        alignVertical();
        alignBottom();

        $(window).resize(function() {
            alignVertical();
            alignBottom();
        });


        /* ==========================================================================
           Slick Slider intalize 
           ========================================================================== */
        

            $('.single-item').slick({
                autoplay: true,
                pauseOnHover: true,
                arrows:false,
                autoplaySpeed: 4500,
                dots: true,
                lazyLoad: false
            });
     

        // Show Background Images for sliders and dividers
        /* ==========================================================================
          FLEX SLIDER
          ========================================================================== */
        $('.image-slider').flexslider({
            directionNav: false
        });
        $('.feature-slider').flexslider({
            directionNav: false
        });
        $('.img-slide').addClass('fadeIn');

        // full slick slider 



        /* ==========================================================================
          Label Form
          ========================================================================== */

        (function() {
            // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
            if (!String.prototype.trim) {
                (function() {
                    // Make sure we trim BOM and NBSP
                    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    String.prototype.trim = function() {
                        return this.replace(rtrim, '');
                    };
                })();
            }

            [].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl) {
                // in case the input is already filled..
                if (inputEl.value.trim() !== '') {
                    classie.add(inputEl.parentNode, 'input--filled');
                }

                // events:
                inputEl.addEventListener('focus', onInputFocus);
                inputEl.addEventListener('blur', onInputBlur);
            });

            function onInputFocus(ev) {
                classie.add(ev.target.parentNode, 'input--filled');
            }

            function onInputBlur(ev) {
                if (ev.target.value.trim() === '') {
                    classie.remove(ev.target.parentNode, 'input--filled');
                }
            }
        })();

        // gmap plugin
        /* ==============================================
        Google Maps
        =============================================== */

        $("#map").gmap3({
            marker: {
                address: "Envato, King Street, Melbourne, Victoria, Australia",
                options: {
                    icon: ""
                }
            },
            map: {
                options: {
                    styles: [{
                        stylers: [{
                            "saturation": +50
                        }, {
                            "lightness": 0
                        }, {
                            "gamma": 0
                        }]
                    }, ],
                    // scrollwheel: false,
                    //  navigationControl: false,
                    //  mapTypeControl: false,
                    //  scaleControl: false,
                    //  draggable: false,
                    disableDefaultUI: false,
                    // mapTypeControl: true,
                    // zoomControl: true,
                    zoom: 12
                }
            }
        });

        $(".map-header").gmap3({
            marker: {
                address: "Envato, King Street, Melbourne, Victoria, Australia",
                options: {
                    icon:"data:image/png;base64,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"
                }
            },
            map: {
                options: {
                    styles: [{
                        stylers: [{
                            "saturation": -250
                        }, {
                            "lightness": 1
                        }, {
                            "gamma": 2
                        }]
                    }, ],
                    // scrollwheel: false,
                    // navigationControl: false,
                    // mapTypeControl: false,
                    // scaleControl: false,
                    // draggable: false,
                    // disableDefaultUI: false,
                    // mapTypeControl: true,
                    // zoomControl: true,
                    zoom: 12
                }
            }
        });

        // end plugin


    /*====================================================
    =            mm menu reponsive navigation            =
    ====================================================*/

        // menu mobile
        
            $("#my-menu").mmenu({
                "slidingSubmenus": false,
                "counters": false,
                "classes": " mm-slide  mm-white",
                "footer": {
                    "add": true,
                    "title": "Matrix All Right Reserved 2015"
                },
                "header": {
                    "title": "Main Menu",
                    "add": true,
                    "update": true
                },

                "searchfield": true
            });
      

        /* ==========================================================================
           Image LightBox Intalize Plugin
           ========================================================================== */
        
        // image Light box plugin
          
          
            $( 'a' ).imageLightbox( {
                
                selector:       'id="imagelightbox"',   // string;
                allowedTypes:   'png|jpg|jpeg|gif|flv|mp4',     // string;
                animationSpeed: 450,                    // integer;
                preloadNext:    true,                   // bool;            silently preload the next image
                enableKeyboard: true,                   // bool;            enable keyboard shortcuts (arrows Left/Right and Esc)
                quitOnEnd:      false,                  // bool;            quit after viewing the last image
                quitOnImgClick: false,                  // bool;            quit when the viewed image is clicked
                quitOnDocClick: true,                   // bool;            quit when anything but the viewed image is clicked
                onStart:        false,                  // function/bool;   calls function when the lightbox starts
                onEnd:          false,                  // function/bool;   calls function when the lightbox quits
                onLoadStart:    false,                  // function/bool;   calls function when the image load begins
                onLoadEnd:      false                   // function/bool;   calls function when the image finishes loading
           });

        /*-----  End of Section comment block  ------*/


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends