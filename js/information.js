$(function(){
	$('.active1').click(function(){
		$('html,body').animate({scrollTop:360},500);
	})
	$('.active2').click(function(){
		$('html,body').animate({scrollTop:850},500);
	})
	$('.active3').click(function(){
		$('html,body').animate({scrollTop:1310},500);
	})
	$('.backTop').click(function(){
		$('html,body').animate({scrollTop:0},500);
	})
})
$(window).scroll(function(){
	var heightTop=$(document).scrollTop()+$(window).height();
	$(window).scroll(function(){
		if($(document).scrollTop()>10 && $(document).scrollTop()<2000){
			$('.backTop').fadeIn(500);
		}else{
			$('.backTop').fadeOut(500);
		}
	})
})