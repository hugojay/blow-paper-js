$(function(){
	$(".blowpaper").each(function (i, v) {
		$(this).children("img").before("<div class='paper_corner'><img src='blowpaper_corner@2x.png' width=262 height=61></div>");
		$(".paper_corner").on("click", "img", function(){
			$(this).parents(".blowpaper").children(".coupon").show();
			$(this).parents(".blowpaper").children(".paper_corner").animate({
					height: 300 // -100
			}, 200, "linear");
			$(this).parents(".blowpaper").children("img").animate({
					width: 400,
					height: 300 // -100
			}, 200, "linear");
			$(this).animate({
					width: 400,
					height: 140
			}, 200, "linear", function(){
				//$(this).fadeOut(20);
			});
		});

	});

	// shakejs event binding
	window.addEventListener("shake", function(){
		$(".blowpaper .paper_corner img").click();
	}, false);
});