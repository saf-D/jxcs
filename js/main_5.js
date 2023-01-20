$(function(){
	$('.navbar-nav a[href],a[role="gun"]').click(function(){
		$("html, body").animate({scrollTop: $($(this).attr('href')).offset().top});
		$('.navbar-nav li').removeClass('active');
		$(this).parent().addClass('active');
	});
});