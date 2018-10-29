$(function() {

	// Custom JS
	$('#my-menu').mmenu({
		extensions: [ 'widescreen', 'effect-menu-slide', "theme-dark", 'position-right'],
		navbar: {
			title: 'Меню'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

});
