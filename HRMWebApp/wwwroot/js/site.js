// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/* ***************************
  Enable Smooth Scrolling
  Author: Chris Coyier
  URL:  CSS-Tricks.com
***************************** */

// Enable Smooth Scrolling ...  by Chris Coyier of CSS-Tricks.com
$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 80);
			return false;
		}
	}
});