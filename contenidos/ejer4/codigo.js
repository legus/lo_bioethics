$(document).ready(function() {

	var btn = "";
	var preg = 0;
	var temp = 0;
	var a_btns = $(".botones1").toArray();
	reordenar(a_btns,$(".botones1").parent().attr("id"));

	$("#rec1").fadeIn();
	$(".preguntas").css("opacity","0.3");
	$("#preg1").css("opacity","1");

	$(".botones1").on("click", presionar);
	
	function presionar(datos){
		btn=$(this).attr('id');
		preg=parseInt(btn.charAt(1));
		if(btn.charAt(0)=="t")
		{
			if(Modernizr.audio){$("audio")[0].play();}
			$(this).addClass("botones_cambio1");
			$(this).children().attr("src","imagenes/fondo_btn2.png");
			$("#preg"+preg).children().attr("src","imagenes/fondo_btn2.png");
			mensajear("Very Well...");
		}else{
			if(Modernizr.audio){$("audio")[1].play();}
			$(this).addClass("botones_cambio2");
			$(this).children().attr("src","imagenes/fondo_btn1.png");
			$("#preg"+preg).children().attr("src","imagenes/fondo_btn1.png");
			mensajear("It's not correct...");
		}
		$(".botones"+preg).off("click", presionar);
		if(preg<4)
		{
			$("#preg"+(preg+1)).on("click", siguiente);
			$("#preg"+(preg+1)).css("opacity","1");
			$("#preg"+(preg+1)).children().attr("src","imagenes/fondo_btn3.png");
		}else{
			$("#reiniciar").css('visibility','visible');
			mensajear("To start again, please click the restart button.");
		}
	}

	function siguiente(datos){
		mensajear(" - ");
		temp=parseInt($(this).attr('id').charAt($(this).attr('id').length-1));
		$(this).children().attr("src","imagenes/fondo_btn.png");
		$("#rec"+(temp-1)).fadeOut(200,function(){
			$("#rec"+temp).fadeIn(200);
		});
		$(this).off("click", siguiente);
		a_btns=$(".botones"+temp).toArray();
		reordenar(a_btns,$(".botones"+temp).parent().attr("id"));
		$(".botones"+temp).on("click", presionar);
	}

	$("#reiniciar").click(function(){
		a_btns=$(".botones1").toArray();
		reordenar(a_btns,$(".botones1").parent().attr("id"));
		borrar($(".botones1").toArray());
		borrar($(".botones2").toArray());
		borrar($(".botones3").toArray());
		borrar($(".botones4").toArray());
		$(".botones1").children().attr("src","imagenes/fondo_btn.png");
		$(".botones2").children().attr("src","imagenes/fondo_btn.png");
		$(".botones3").children().attr("src","imagenes/fondo_btn.png");
		$(".botones4").children().attr("src","imagenes/fondo_btn.png");
		$(".preguntas").children().attr("src","imagenes/fondo_btn.png");
		$(".botones1").on("click", presionar);
		btn = "";
		mensajear(" - ");
		$("#rec4").fadeOut(function(){
			$("#rec1").fadeIn();
		});
		$("#reiniciar").css('visibility','hidden');
	});

	function borrar(elemento){
		jQuery.each(elemento, function() {
			$(this).removeClass("botones_cambio1");
			$(this).removeClass("botones_cambio2");
		});
	}

	function mensajear(mensaje){
		if(mensaje=="")
		{
			$("#mensaje").fadeOut(function(){
				$("#mensaje").html("");
			});
		}else{
			$("#mensaje").fadeOut(function(){
				$("#mensaje").fadeIn();
				$("#mensaje").html(mensaje);
			});
		}
	}
	
	function reordenar(col, contenedor){
		//Función para reordenar y ubicar elementos incluidos en un array (col) en su respectivo contenedor
		var temp=new Array();
		var ran;
		var pos;
		var o_a;
		for(var i=0;i<col.length;i++){
			temp[i]=(i+1);
		}
		for(var j=0; j<col.length; j++){
			ran = Math.floor(Math.random()*temp.length);
			o_a = temp[ran];
			pos=$(col[j]).replaceWith($(col[ran]));
			$(pos).appendTo("#"+contenedor);

			col[j]=col[ran];
			col[ran]=pos.get(0);
			temp.splice(ran,1);
		}
	}
});