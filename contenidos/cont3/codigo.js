$(document).ready(function() {
	$("#pagina1").fadeIn('slow');
	
	$(".botones").click(function(){
		$(".recuadros").slideUp();
		switch($(this).attr("id")){
			case 'btn1':
				$("#rec1").slideDown();
				aud=0;
			break;
			case 'btn2':
				$("#rec2").slideDown();
				aud=1;
			break;
			case 'btn3':
				$("#rec3").slideDown();
				aud=2;
			break;
			case 'btn4':
				$("#rec4").slideDown();
				aud=3;
			break;
			case 'btn5':
				$("#rec5").slideDown();
				aud=4;
			break;
			case 'btn6':
				$("#rec6").slideDown();
				aud=5;
			break;
			case 'btn7':
				$("#rec7").slideDown();
				aud=6;
			break;
			case 'btn8':
				$("#rec8").slideDown();
				aud=7;
			break;
			case 'btn9':
				$("#rec9").slideDown();
				aud=8;
			break;
		}
		if(aud != 8){
			reproducir(aud);
		}
	});

	function reproducir(a){
		for(var i=0;i<=6;i++){
			if(!$("audio")[i].paused){
				$("audio")[i].pause();
			}
		}
		$("audio")[a].currentTime=0;
		$("audio")[a].play();
	}
});