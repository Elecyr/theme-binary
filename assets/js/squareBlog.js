$(window).load(function() {
	
	var test;

	function testfunction(caller){
		alert(caller)
		test = caller;
		return true;
	}

	$('.fullscreenNav .category').click(function(){
		
		$( this ).parent().switchClass( "fullscreenNav", "fullscreenSideNav", 500, "easeInOutQuad" );

	});
	$('.mobileNav a div.category img').click(function(){
		selectedImg = $( this ).attr("src");
		alert(selectedImg)
		test = selectedImg;
		$('#toggleImage').attr("src",selectedImg);
	});
	$('.mobileNav .category').click(function(){
		
		$( this ).parent().switchClass( "mobileNav", "mobileSideNav", 500, "easeInOutQuad" );

	});
});	
/*
	$('.category').click(function(){
		
		$(".fullscreenNav").attr('flex-direction', 'column');
		
		$(".fullscreenNav").animate({
			left:'100px',
			height:'200px',
			width:'100px',
		
			overflow:'hidden'
		});
		$('.category').animate({
			height:'100px',
			width:'100px'
		});
	});
});
 */
