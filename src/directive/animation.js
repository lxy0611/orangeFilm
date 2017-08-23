(function(){
	console.log("hahahahah");
	var navTop = $(".nav-menu").offset().top;
	console.log("navTop:",navTop);
	$(window).scroll(function(){
		let winTop = $(this).scrollTop();
		console.log("winTop:",winTop);
		if(winTop >= navTop){
			$(".nav-menu").css({"position":"fixed","top":"1rem","z-index":"99"});
		}
		else{
			$(".nav-menu").css({"position":"static"});
		}
	})
})