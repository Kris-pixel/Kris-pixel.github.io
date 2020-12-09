$(document).ready(function(){
/*Подстветка пунктов меню при наведении*/
	$('.menu-item:not(#here)').mouseover(function(){

		$(this).css("background","#464646");
		$(this).children('a:not(#m)').css("color","#d4b9ff");
		$(this).children('a[id="m"]').css("color","#fff");
		$(this).children('hr').css("visibility","visible");

	});
	$('.menu-item:not(#here)').mouseout(function(){

		$(this).css("background","#000");
		$(this).children('a:not(#m)').css("color","#fff");
		$(this).children('a[id="m"]').css("color","#956fd0");
		$(this).children('hr').css("visibility","hidden");

	});

/*изменение прозрачности значков соцсетей в меню при наведении*/
	$('.networks').children('a').mouseover(function(){
		$(this).css("opacity","0.7");
	});
	$('.networks').children('a').mouseout(function(){
		$(this).css("opacity","1");
	});

/*подстветка текущей страницы в меню*/
		$('#here').css("background","#464646");
		$('#here').children('a').css("color","#d4b9ff");
		$('#here').children('hr').css("visibility","visible");

	$('.linking').mouseover(function(){

		$(this).css("background-color","#c2c2c2");
	});
	$('.linking').mouseout(function(){

		$(this).css("background-color","#f0f0f0");
	});

/*Подсветка кногок на главной странице*/
	$('.button').mouseover(function(){
		$(this).css("background-color","#2e2e2e");
	});
	$('.button').mouseout(function(){

		$(this).css("background-color","#000");
	});

});