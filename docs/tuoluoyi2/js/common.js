$(function(){
	$(window).resize(infinite);
	function infinite() {
		var htmlWidth = $('html').width();
		if (htmlWidth >= 640) {
			$("html").css({
				"font-size" : "40px"
			});
		} else {
			$("html").css({
				"font-size" :  40 / 640 * htmlWidth + "px"
			});
		}
	}infinite();
});