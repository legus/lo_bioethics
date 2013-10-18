$(document).ready(function() {

	var btn = "";
	var b_btn =false;
	var rec1 = "";
	var b_rec1 =false;
	var rec2 = "";
	var b_rec2 =false;

	var ejercicio=1;

	var a_btns = $(".botones").toArray();
	var a_rec1 = $(".recuadros1").toArray();
	var a_rec2 = $(".recuadros2").toArray();

	reordenar(a_btns,$(".botones").parent().attr("id"));
	reordenar(a_rec1,$(".recuadros1").parent().attr("id"));
	reordenar(a_rec2,$(".recuadros2").parent().attr("id"));

	var desaparezca={
		height: "0%",
		margin: 0,
		overflow: "hidden",
		width: "0%"
	};

	var aparezca={
		height: "100%",
		margin: 5,
		overflow: "visible",
		width: "40%"
	};

	$(".botones").click(function(){
		mensajear("");
		btn = $(this).attr('id');
		borrar(a_btns);
		$(this).addClass("botones_cambio");
		b_btn=true;
	});

	$(".recuadros1").click(function(){
		mensajear("");
		rec1 = $(this).attr('id');
		borrar(a_rec1);
		$(this).addClass("botones_cambio");
		b_rec1=true;
	});

	$(".recuadros2").click(function(){
		mensajear("");
		rec2 = $(this).attr('id');
		borrar(a_rec2);
		$(this).addClass("botones_cambio");
		b_rec2=true;
	});

	$("#btn_check1").click(function(){
		if(ejercicio==1)
		{
			if(b_rec1 && b_btn)
			{
				if(rec1.charAt(rec1.length-1)==btn.charAt(btn.length-1))
				{
					if(a_rec1.indexOf($("#"+rec1).get(0))!=-1 && a_btns.indexOf($("#"+btn).get(0))!=-1)
					{
						a_rec1.splice(a_rec1.indexOf($("#"+rec1).get(0)),1);
						a_btns.splice(a_btns.indexOf($("#"+btn).get(0)),1);
						mensajear("Very well..");
						if(Modernizr.audio){$("audio")[0].play();}
					}else{
						borrar(a_rec1);
						borrar(a_btns);
						if(Modernizr.audio){$("audio")[1].play();}
					}
				}else{
					borrar(a_rec1);
					borrar(a_btns);
					b_rec1=false;
					b_btn=false;
					mensajear("That is not correct");
					if(Modernizr.audio){$("audio")[1].play();}
				}
			}else{
				mensajear("You must choose an option in both sides");
				if(Modernizr.audio){$("audio")[1].play();}
			}
			if(a_rec1.length==0){
				$("#recuadro1").css(desaparezca);
				$("#recuadro2").css(aparezca);
				a_btns = $(".botones").toArray();
				borrar(a_btns);
				ejercicio=2;
			}
		}else{
			if(b_rec2 && b_btn){
				if(rec2.charAt(rec2.length-1)==btn.charAt(btn.length-1))
				{
					if(a_rec2.indexOf($("#"+rec2).get(0))!=-1 && a_btns.indexOf($("#"+btn).get(0))!=-1)
					{
						a_rec2.splice(a_rec2.indexOf($("#"+rec2).get(0)),1);
						a_btns.splice(a_btns.indexOf($("#"+btn).get(0)),1);
						mensajear("Very well..");
						$("audio")[0].play();
					}else{
						borrar(a_rec2);
						borrar(a_btns);
						$("audio")[1].play();
					}
				}else{
					borrar(a_rec2);
					borrar(a_btns);
					b_rec2=false;
					b_btn=false;
					mensajear("That is not correct");
					$("audio")[1].play();
				}
			}else{
				mensajear("You must choose an option in both sides");
				$("audio")[1].play();
			}
			if(a_rec2.length==0){
				mensajear("The exercise has finished succesfully");
				$(this).hide();
				$("#reiniciar").fadeIn();
			}
		}
	});

	$("#reiniciar").click(function(){
		btn = "";
		b_btn =false;
		rec1 = "";
		b_rec1 =false;
		rec2 = "";
		b_rec2 =false;
		ejercicio=1;
		a_btns = $(".botones").toArray();
		a_rec1 = $(".recuadros1").toArray();
		a_rec2 = $(".recuadros2").toArray();
		reordenar(a_btns,$(".botones").parent().attr("id"));
		reordenar(a_rec1,$(".recuadros1").parent().attr("id"));
		reordenar(a_rec2,$(".recuadros2").parent().attr("id"));

		borrar(a_rec1);
		borrar(a_rec2);
		borrar(a_btns);
		$("#recuadro2").css(desaparezca);
		$("#recuadro1").css(aparezca);
		$(this).hide();
		$("#btn_check1").fadeIn();
		mensajear("");
	});

	function borrar(elemento){
		jQuery.each(elemento, function() {
			$(this).removeClass("botones_cambio");
		});
	}

	function mensajear(mensaje){
		if(mensaje=="")
		{
			$(".mensaje").fadeOut(function(){
				$(".mensaje").html("");
			});
		}else{
			$(".mensaje").fadeIn();
			$(".mensaje").html(mensaje);
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