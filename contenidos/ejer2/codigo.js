$(document).ready(function() {

	var btn = "";
	var b_btn = false;

	var a_btns = $(".botones").toArray();
	var a_rec = $(".recuadros").toArray();
	reordenar(a_rec,$(".recuadros").parent().attr("id"));
	
	$(".botones").on("click", presionar);
	
	function presionar(datos){
		btn=$(this).attr('id');
		if(a_rec.indexOf($("#rec"+btn.charAt(1)).get(0))!=-1)
		{
			a_rec.splice(a_rec.indexOf($("#rec"+btn.charAt(1)).get(0)),1);
			if(btn.charAt(0)=="t")
			{
				if(Modernizr.audio){$("audio")[0].play();}
				$(this).addClass("botones_cambio1");
				$(this).children().attr("src","imagenes/fondo_btn2.png");
				mensajear("Very Well...");
			}else{
				if(Modernizr.audio){$("audio")[1].play();}
				$(this).addClass("botones_cambio2");
				$(this).children().attr("src","imagenes/fondo_btn1.png");
				mensajear("It's not correct...");
			}
		}
		if(a_rec.length==0)
		{
			$("#reiniciar").css('visibility','visible');
			mensajear("To start again, please click the return button.");
		}
	}

	$("#reiniciar").click(function(){
		borrar(a_btns);
		a_rec = $(".recuadros").toArray();
		reordenar(a_rec,$(".recuadros").parent().attr("id"));
		$(".botones").children().attr("src","imagenes/fondo_btn.png");
		$(".botones").on("click", presionar);
		btn = "";
		b_btn = false;
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