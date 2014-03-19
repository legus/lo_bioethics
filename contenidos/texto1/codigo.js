$(document).ready(function() {
	$("#link_mostrar").click(mostrar);
	$("#link_ocultar").click(ocultar);

	function mostrar(datos){
		$("#cont_video").fadeOut(function(){
			$("#youtube_video").fadeIn();
		});
		$(datos.currentTarget).fadeOut(function(){
			$("#link_ocultar").fadeIn();
		});
	}

	function ocultar(datos){
		$("#youtube_video").fadeOut(function(){
			$("#cont_video").fadeIn();
		});
		$(datos.currentTarget).fadeOut(function(){
			$("#link_mostrar").fadeIn();
		});
	}
});