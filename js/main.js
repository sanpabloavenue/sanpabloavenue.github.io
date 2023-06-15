$(document).ready(function(){
	$("#menu_toggle_large").click(function(){
		$("#content").slideToggle("slow");
	});

	$("#menu_toggle_small").click(function(){
		$("#content").slideToggle("slow");
		($("#header_title_small").css("display") == "none" ? $("#header_title_small").show() : $("#header_title_small").hide());
	});

	$('.lightbox').justifiedGallery({
		captionSettings	: { animationDuration: 500, visibleOpacity: (isNaN(window.globals.defaultHideCaption) ? 0.6 : 0.0), nonVisibleOpacity: (isNaN(window.globals.defaultHideCaption) ? 0.0 : 0.6) },
		rowHeight       : (isNaN(window.globals.justifiedGalleryRowHeight) ? 200 : window.globals.justifiedGalleryRowHeight),
		justifyThreshold: 0.55,
		margins	        : 3,
		rel             : 'gallery1',
		fixedheight		: true
	}).on('jg.complete', function() {
		$(this).find('a').simpleLightbox({
			captionPosition:'outside'
		});
	});

	$(".lightbox > a > img").mouseenter(function() {
		$(this).animate({
			height: '-=3px',
			width: '-=3px'
		}, 200).animate({
			height: '+=3px',
			width: '+=3px'
		},100);
	});
});