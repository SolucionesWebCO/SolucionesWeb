// refills accordion
$('.js-accordion-trigger').bind('click', function(e){
  jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
  jQuery(this).parent().toggleClass('is-expanded');
  e.preventDefault();
});

// accordion_tabs

$(document).ready(function () {
  $('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

// accordion_tabs

$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal')
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

//  centered navigation

$(document).ready(function() {
  var menu = $('.centered-navigation-menu');
  var menuToggle = $('.centered-navigation-menu-button');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });
});

//  dropdown.js 

$(document).ready(function(){
  $(".dropdown-button").click(function() {
    $(".dropdown-menu").toggleClass("show-menu");
    $(".dropdown-menu > li").click(function(){
      $(".dropdown-menu").removeClass("show-menu");
    });
    $(".dropdown-menu.dropdown-select > li").click(function() {
      $(".dropdown-button").html($(this).html());
    });
  });
});


// expander 

$(document).ready(function() {
  var expanderTrigger = document.getElementById("js-expander-trigger");
  var expanderContent = document.getElementById("js-expander-content");

  $('#js-expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });
});


//  navigation

$(document).ready(function() {
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  // underline under the active nav item
  $(".nav .nav-link").click(function() {
    $(".nav .nav-link").each(function() {
      $(this).removeClass("active-nav-item");
    });
    $(this).addClass("active-nav-item");
    $(".nav .more").removeClass("active-nav-item");
  });
});

  // search tools 

  var Filter = (function() {
  function Filter(element) {
    this._element = $(element);
    this._optionsContainer = this._element.find(this.constructor.optionsContainerSelector);
  }

  Filter.selector = '.filter';
  Filter.optionsContainerSelector = '> div';
  Filter.hideOptionsClass = 'hide-options';

  Filter.enhance = function() {
    var klass = this;

    return $(klass.selector).each(function() {
      return new klass(this).enhance();
    });
  };

  Filter.prototype.enhance = function() {
    this._buildUI();
    this._bindEvents();
  };

  Filter.prototype._buildUI = function() {
    this._summaryElement = $('<label></label>').
      addClass('summary').
      attr('data-role', 'summary').
      prependTo(this._optionsContainer);

    this._clearSelectionButton = $('<button></button>').
      text('Clear').
      attr('type', 'button').
      insertAfter(this._summaryElement);

    this._optionsContainer.addClass(this.constructor.hideOptionsClass);
    this._updateSummary();
  };

  Filter.prototype._bindEvents = function() {
    var self = this;

    this._summaryElement.click(function() {
      self._toggleOptions();
    });

    this._clearSelectionButton.click(function() {
      self._clearSelection();
    });

    this._checkboxes().change(function() {
      self._updateSummary();
    });

    $('body').click(function(e) {
      var inFilter = $(e.target).closest(self.constructor.selector).length > 0;

      if (!inFilter) {
        self._allOptionsContainers().addClass(self.constructor.hideOptionsClass);
      }
    });
  };

  Filter.prototype._toggleOptions = function() {
    this._allOptionsContainers().
      not(this._optionsContainer).
      addClass(this.constructor.hideOptionsClass);

    this._optionsContainer.toggleClass(this.constructor.hideOptionsClass);
  };

  Filter.prototype._updateSummary = function() {
    var summary = 'All';
    var checked = this._checkboxes().filter(':checked');

    if (checked.length > 0) {
      summary = this._labelsFor(checked).join(', ');
    }

    this._summaryElement.text(summary);
  };

  Filter.prototype._clearSelection = function() {
    this._checkboxes().each(function() {
      $(this).prop('checked', false);
    });

    this._updateSummary();
  };

  Filter.prototype._checkboxes = function() {
    return this._element.find(':checkbox');
  };

  Filter.prototype._labelsFor = function(inputs) {
    return inputs.map(function() {
      var id = $(this).attr('id');
      return $("label[for='" + id + "']").text();
    }).get();
  };

  Filter.prototype._allOptionsContainers = function() {
    return $(this.constructor.selector + " " + this.constructor.optionsContainerSelector);
  };

  return Filter;
})();

$(function() {
  Filter.enhance();
});


	// sliding menu 

	$(document).ready(function(){
	  $('.js-menu-trigger').on('click touchstart', function(e){
	    $('.js-menu').toggleClass('is-visible');
	    $('.js-menu-screen').toggleClass('is-visible');
	    e.preventDefault();
	  });

	  $('.js-menu-screen').on('click touchstart', function(e){
	    $('.js-menu').toggleClass('is-visible');
	    $('.js-menu-screen').toggleClass('is-visible');
	    e.preventDefault();
	  });
	});


	// vertical-tabs

	$(".js-vertical-tab-content").hide();
	$(".js-vertical-tab-content:first").show();

	/* if in tab mode */
	$(".js-vertical-tab").click(function(event) {
	  event.preventDefault();

	  $(".js-vertical-tab-content").hide();
	  var activeTab = $(this).attr("rel");
	  $("#"+activeTab).show();

	  $(".js-vertical-tab").removeClass("is-active");
	  $(this).addClass("is-active");

	  $(".js-vertical-tab-accordion-heading").removeClass("is-active");
	  $(".js-vertical-tab-accordion-heading[rel^='"+activeTab+"']").addClass("is-active");
	});

	/* if in accordion mode */
	$(".js-vertical-tab-accordion-heading").click(function(event) {
	  event.preventDefault();

	  $(".js-vertical-tab-content").hide();
	  var accordion_activeTab = $(this).attr("rel");
	  $("#"+accordion_activeTab).show();

	  $(".js-vertical-tab-accordion-heading").removeClass("is-active");
	  $(this).addClass("is-active");

	  $(".js-vertical-tab").removeClass("is-active");
	  $(".js-vertical-tab[rel^='"+accordion_activeTab+"']").addClass("is-active");
	});
