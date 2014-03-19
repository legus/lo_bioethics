$(document).ready(function() {
	$("#btn_video_youtube").addClass("btn_oprimido");

	$(".botones").click(function(){
		$(".contenidos").slideUp();
		$(this).addClass("btn_oprimido");
		switch($(this).attr("id")){
			case 'btn_video_youtube':
				$("#youtube_video").slideDown();
				$("#btn_video").removeClass("btn_oprimido");
				$("#btn_actividad").removeClass("btn_oprimido");
			break;
			case 'btn_video':
				$("#video").slideDown();
				$("#btn_video_youtube").removeClass("btn_oprimido");
				$("#btn_actividad").removeClass("btn_oprimido");
			break;
			case 'btn_actividad':
				$("#actividad").slideDown();
				$("#btn_video_youtube").removeClass("btn_oprimido");
				$("#btn_video").removeClass("btn_oprimido");
			break;
		}
	});
});