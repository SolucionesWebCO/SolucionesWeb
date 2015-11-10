/*===============================
=            GLOBALS            =
===============================*/
var uploads = [];
var hasCountedUp = false;




/*=============================
=            READY            =
=============================*/
$(function() {

	// Is IE
	ifIsIE();

    // Offset Logo
    offsetLogo();

    // Hover fix for ^
    $('a.toggle-nav').hover(function() {
        $('a.toggle-nav').addClass('is-hovered');
    }, function() {
        $('a.toggle-nav').removeClass('is-hovered');
    });

    // Toggle Nav
	$('.toggle-nav').on('click touchstart', function() {
        if ($('body').hasClass('show-nav')) {
            $('body').removeClass('show-nav').addClass('hide-nav');

            setTimeout(function() {
                $('body').removeClass('hide-nav');
            }, 500);

        } else {
            $('body').removeClass('hide-nav').addClass('show-nav');
        }

		return false;
	});

    if ($('.bxslider').length > 0) {
        $('.bxslider').bxSlider({
            auto: true,
            adaptiveHeight: false,
            pager: false,
            touchEnabled: false,
            speed: 500,
            controls: false,
            mode: 'fade'
        });
    }

    $('.button-panel').scotchPanel({
        direction: 'bottom',
        duration: 225,
        enableEscapeKey: false
    });

    // if ($('#price-range').length > 0) {
    //     var priceRange = $("#price-range").noUiSlider({
    //         start: [10, 50],
    //         connect: true,
    //         step: 10,
    //         range: {
    //             'min': 0,
    //             'max': 150
    //         }
    //     });

    //     priceRange.on('slide', updateCount);

    //     function updateCount() {
    //         var range = priceRange.val();

    //         $('#current-count span.min').text(Math.round(range[0]));
    //         $('#current-count span.max').text(Math.round(range[1]));
    //     }
    // }

    // if ($('#droppy-drop-drop').length > 0) {
    //     Dropzone.options.droppyDropDrop = {
    //         maxFilesize : 10,
    //         acceptedFiles : 'image/*,.txt,application/pdf,.psd,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pages,.rtf',
    //         forceFallback : false,
    //         clickable : true,
    //         init: function() {
    //             this.on('success', function(file, response) {
    //                 var fileName = response.name;
    //                 uploads.push(fileName);
    //             });
    //         }
    //     };
    // }


    $('#things-we-do a').click(function() {
        $('body').addClass('show-it-all');

        return false;
    });

    // if ($('.action-slider').length > 0) {
    //     $('.action-slider').bxSlider({
    //         adaptiveHeight: false,
    //         pager: false,
    //         touchEnabled: false,
    //         'prevText': '<i class="fa fa-angle-left"></i>',
    //         'nextText': '<i class="fa fa-angle-right"></i>'
    //     });
    // }

    if ($('#other-works .three').length > 0) {
        matchHeight('#other-works .three', 50);
    }

    if ($('#testimonials .testimonials-slider').length > 0) {
        $('#testimonials .testimonials-slider').bxSlider({
            adaptiveHeight: false,
            pager: false,
            touchEnabled: false,
            'prevText': '<i class="fa fa-angle-left"></i>',
            'nextText': '<i class="fa fa-angle-right"></i>',
            auto: true,
            autoHover: true
        });
    }

    makeFixedTop();

	if ($('#project-navigation').length > 0) {
		$('#project-navigation .huge-next a').hover(function() {
			$('.triangle-down').addClass('is-hovered');
		}, function() {
			$('.triangle-down').removeClass('is-hovered');
		});
	}

    if ($('#contact').length > 0) {

        var loader = $('.loader-button-panel').scotchPanel({
            duration: 225,
            enableEscapeKey: false
        });

        $('#contact form').submit(function() {

			var form = $(this);

			form.find('input, textrea').removeClass('error');

            form.addClass('thinking');
            loader.open();


			if (form.find('input.name').val() == '' || form.find('input.name').val() == 'Name') {
				form.find('input.name').addClass('error').select();
				form.removeClass('thinking');
				loader.close();
				return false;
			}
			if (form.find('input.email').val() == '' || form.find('input.email').val() == 'Email address') {
				form.find('input.email').addClass('error').select();
				form.removeClass('thinking');
				loader.close();
				return false;
			}
			if (form.find('input.company').val() == '' || form.find('input.company').val() == 'Company / Organization') {
				form.find('input.company').addClass('error').select();
				form.removeClass('thinking');
				loader.close();
				return false;
			}
			if (form.find('input.phone').val() == '' || form.find('input.phone').val() == 'Phone number') {
				form.find('input.phone').addClass('error').select();
				form.removeClass('thinking');
				loader.close();
				return false;
			}
			if (form.find('textarea.message').val() == '' || form.find('textarea.message').val() == 'Message') {
				form.find('textarea.message').addClass('error').select();
				form.removeClass('thinking');
				loader.close();
				return false;
			}


            setTimeout(function() {


                var formData = {};
                formData['name'] = form.find('input.name').val();
                formData['email'] = form.find('input.email').val();
                formData['company'] = form.find('input.company').val();
                formData['phone'] = form.find('input.phone').val();
                formData['message'] = form.find('textarea').val();

                formData = $.param(formData);

                $.getJSON(window.location.protocol + '//' + window.location.hostname + '/wp-content/themes/wideeyecreative/includes/mailer/?'+formData, function(data) {

                    if (data.is_success) {
                        $('#contact form').addClass('fade-out-down');
                        setTimeout(function() {
                            $('#contact .thanks').show();
                        }, 300);

                    }

                });

            }, 1000);

            return false;
        });

    }


    if ($('#counts').length > 0 && isScrolledIntoView($('#counts'), 0)) {
        countUpNow();
    }


    // Touch effects Hackery Magic for iPad/iPhone
    $('.grid-cover a').on('touchstart', function() {});


    // First and Last Classes for Single Project Unknown
    if ($('.single-block').length > 0) {
        var children = $('.single-block div[class^=col]').each(function() {
            var children = $(this).children();

            if (children.length > 0) {
                $(children[0]).addClass('first');
                $(children[children.length - 1]).addClass('last');
            }
        });
    }

    footerMagic();

    $('.fade-in-down, .fade-in-down-half, .fade-in-up, .fade-in, .zoom-in, .bounce-in, .opacity-in').addClass('show');

});


/*============================
=            LOAD            =
============================*/
$(window).load(function() {

    addVisibleClass('.fade-up', 375);

    $('.fade-in-load').addClass('show');


    // Content Aware Wizardry
    $('.toggle-nav-wrap').midnight();

});





/*===============================
=            SCROLL            =
===============================*/
$(window).scroll(function() {

    addVisibleClass('.fade-up', 375);


    // Z-index flip for home page
    if ($('body').hasClass('home')) {
        var distance = $('#home-see-more').offset().top - $(window).scrollTop();

        if (distance < 0) {
            $('#call-to-action').css('z-index', -1);
        } else {
            $('#call-to-action').css('z-index', 0);
        }
    }

    if ($('#counts').length > 0 && isScrolledIntoView($('#counts'), 0)) {
        console.log('scroll')
        countUpNow();
    }


    offsetLogo();


     // Browser Support Placeholders
    supportPlaceholders();


    footerMagic();



});



/*==============================
=            RESIZE            =
==============================*/
$(window).resize(function() {
    fillWindow('#call-to-action li.slide .container', 0);
    addVisibleClass('.fade-up', 375);

    makeFixedTop();

    if ($('#other-works .three').length > 0) {
        matchHeight('#other-works .three', 50);
    }

});


/*=================================
=            KEY PRESS            =
==================================*/
// Escape Key to Close
$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		if ($('body').hasClass('show-nav')) {
            $('body').removeClass('show-nav').addClass('hide-nav');

            setTimeout(function() {
                $('body').removeClass('hide-nav');
            }, 500);

        } else {
            $('body').removeClass('hide-nav').addClass('show-nav');
        }

	}
});




/*=================================
=            FUNCTIONS            =
=================================*/
function ifIsIE() {

	var ua = window.navigator.userAgent;
	var msie = ua.indexOf('MSIE ');
	
	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		$('html').addClass('ie');
	}
	
	return false;
}
function footerMagic() {
    if ($(window).width() >= 768) {
        var distance = $('#footer-work-with-us').offset().top - $(window).scrollTop();
        if (distance <= 0) {
            $('.make-fixed-top').css('z-index', -1);
        } else {
            $('.make-fixed-top').css('z-index', 0);
        }

    } else {
        $('.make-fixed-top').css('z-index', 0);
    }
}
function countUpNow() {
    if (!hasCountedUp) {

        hasCountedUp = true;

        var options = {
            // useEasing : true,
            useGrouping : true,
            separator : ',',
            decimal : '.',
            prefix : '',
            suffix : ''
        }

        // Worked In
        var workedIn = new countUp('states-worked-in', 0, $('#states-worked-in').data('count'), 0, 2.5, options);
        workedIn.start();

        // Worked In
        var mockupsPosted = new countUp('mockups-posted', 0, $('#mockups-posted').data('count'), 0, 2.5, options);
        mockupsPosted.start();

        // Sites Launched
        var sitesLaunched = new countUp('sites-launched', 0, $('#sites-launched').data('count'), 0, 2.5, options);
        sitesLaunched.start();

        // Happy Clients
        var happyClients = new countUp('happy-clients', 0, $('#happy-clients').data('count'), 0, 2.5, options);
        happyClients.start();
    }
}
function matchHeight(selector, offset) {
    var newWidth = $(selector).width();
    newWidth = newWidth - offset;

    $(selector).css('height', newWidth + 'px');
}
function makeFixedTop() {
    if ($(window).width() >= 768) {

        $('.make-fixed-top:first').next().css('margin-top', $('.make-fixed-top:first').outerHeight() + 'px');
        $('#fake-top').css('height', $('.make-fixed-top:first').outerHeight() + 'px');
    } else {
        $('.make-fixed-top:first').next().css('margin-top', '0px');
		$('#fake-top').css('height', $('#topper').outerHeight());
    }
}
function fillWindow(element, offset) {
    $(element).css('height', $(window).height() - offset + 'px');
}
function offsetLogo() {
    var yScroll = $(window).scrollTop();
    if (yScroll <= 88) {
        $('#site-header a.brand').css('width', 115 - (yScroll / 4) + 'px');

        var opacity = 1 - ((yScroll * 1.2) / 100);
        var opacity2 = 1 - ((yScroll * 0.6) / 100);

        $('#site-header a.brand span').css('opacity', opacity);

        if ($(window).width() <= 768) {
            if (opacity2 >= 0.65) {
                $('#mobile-header-background').css('opacity', opacity2);
            } else {
                $('#mobile-header-background').css('opacity', 0.65);
            }
        } else {
            $('#mobile-header-background').css('opacity', 1);
        }


    } else if (yScroll > 88) {
        $('#site-header a.brand').css('width', '92px');
        $('#site-header a.brand span').css('opacity', 0);
        $('#mobile-header-background').css('opacity', 0.65);
    } else {
        $('#site-header a.brand').css('width', '115px');
        $('#site-header a.brand span').css('opacity', 1);
    }


}
function addVisibleClass(selector, offset) {
    $(selector).each(function() {
        if (isScrolledIntoView($(this), offset) && !$(this).hasClass('is-visible')) {
            $(this).addClass('is-visible');
        }
    });
}

function isScrolledIntoView(elem, offset) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height() + offset;

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
function supportPlaceholders() {
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });
}