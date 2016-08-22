/**

 * jQuery easyIntersect
 * @author Robert Katke
 * @version 1.0
 * @date Aug 18, 2016
 * @category jQuery plugin
 * @description easy intersect plugin

**/
!function(a){a.fn.easyIntersect=function(b){var c=this,d=$(window).height();c.addClass("inactive"),c.each(function(c,e){var f=$.extend({},a.fn.easyIntersect.defaultSettings,b);f=$.extend({},f,$(e).data());var g=$(e).offset().top,h=g-d,i=f.show;$(window).scrollTop()>=h+i&&$(e).removeClass("inactive").addClass("show directly").css({"transition-delay":f.delay+"ms"}),$(window).scroll(function(){var a=$(this).scrollTop();a>=h+i&&$(e).removeClass("inactive").addClass("show")})})},a.fn.easyIntersect.defaultSettings={show:0,delay:0}}(jQuery);