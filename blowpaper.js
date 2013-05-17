$(function(){
	$(".blowpaper").each(function (i, v) {
		$(this).children("img").before("<div class='paper_corner'><img src='blowpaper_corner@2x.png' width=262 height=61></div>");
		$(".paper_corner").on("click", "img", function(){
			var status = $(this).data("status") || "closed";
			if(status == "closed"){
				$(this).data("status", "opened");
				$(this).parents(".blowpaper").each(function(){
					$(this).children("img").animate({
						width: 400,
						height: 300 // -100
					}, 200, "linear");
					$(this).children(".coupon").stop().fadeIn(1);
					$(this).children(".paper_corner").animate({
						height: 300 // -100
					}, 200, "linear");
				});
				$(this).animate({
					width: 400,
					height: 140
				}, 200);
			}else{
				// reverse
				$(this).data("status", "closed");
				$(this).parents(".blowpaper").children("img").animate({
					width: 400,
					height: 400
				}, 300, "linear");
				$(this).parents(".blowpaper").children(".coupon").fadeOut(500, "linear");
				$(this).parents(".blowpaper").children(".paper_corner").animate({
					height: 400
				}, 300, "linear");
				$(this).animate({
					width: 262,
					height: 61
				}, 300, "linear");
			}
		});
	});

	// shakejs event binding
	window.addEventListener("shake", function(){
		$(".blowpaper .paper_corner img").click();
	}, false);
});