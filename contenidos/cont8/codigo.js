$(document).on("ready", arranque);
function arranque(){
	$("#pagina1").slideToggle('slow');
	
	$(".botones").click(function(){
		$(".recuadros").slideUp();
		if (Modernizr.video)
		{
			$("video").get(0).pause();
			$("video").get(1).pause();
			$("video").get(2).pause();
		}
		switch($(this).attr("id")){
			case 'btn1':
				$("#rec1").slideDown();
				if (Modernizr.video){$("video").get(0).play();}
			break;
			case 'btn2':
				$("#rec2").slideDown();
				if (Modernizr.video){$("video").get(1).play();}
			break;
			case 'btn3':
				$("#rec3").slideDown();
				if (Modernizr.video){$("video").get(2).play();}
			break;
		}
	});
}