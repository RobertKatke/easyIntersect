/**

 * jQuery easyIntersect
 * @author Robert Katke
 * @version 1.0
 * @date Aug 18, 2016
 * @category jQuery plugin
 * @description easy intersect plugin

 * changelog

**/
(function(e){
	e.fn.easyIntersect = function(params) {

		var self = this;
		var wHeight = $(window).height();

		self.addClass('inactive');

		self.each(function(i, elm) {

			// add settings to plugin
			var settings = $.extend({}, e.fn.easyIntersect.defaultSettings, params);

			// override settings when inline data-attributes are set
			settings = $.extend({}, settings, $(elm).data());

			var selfPos = $(elm).offset().top;
			var showPos = selfPos - wHeight;
			var showAttr = settings.show;

			// check if elements in viewport and add class and delay
			if($(window).scrollTop() >= (showPos + showAttr)) {
				$(elm)
					.removeClass('inactive')
					.addClass('show directly')
					.css({
						'transition-delay': settings.delay+'ms'
					});
			}

			// show elements by scrolling
			$(window).scroll(function() {
				var currentScroll = $(this).scrollTop();
					
					if(currentScroll >= (showPos + showAttr)) {
						$(elm).removeClass('inactive').addClass('show');
					}
			});
		
		});
	}

	// default settings
	// can be overwriten by data-attributes
	e.fn.easyIntersect.defaultSettings =
	{
		show: 0,
		delay: 0
	};

})(jQuery);