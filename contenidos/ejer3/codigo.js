$(document).on("ready", arranque);

function arranque(){
	var btn = "";
	var b_btn =false;
	var rec1 = "";
	var b_rec1 =false;
	var a_btns = $(".botones").toArray();
	var a_rec1 = $(".recuadros1").toArray();
	reordenar(a_btns,$(".botones").parent().attr("id"));
	reordenar(a_rec1,$(".recuadros1").parent().attr("id"));

	$(".botones").on("click", al_oprimirbtn);
	$(".recuadros1").on("click", al_oprimirrec);

	function al_oprimirbtn(){
		mensajear("");
		btn = $(this).attr('id');
		borrar(a_btns);
		$(this).addClass("botones_cambio");
		b_btn=true;
	}
	function al_oprimirrec(){
		mensajear("");
		rec1 = $(this).attr('id');
		borrar(a_rec1);
		$(this).addClass("botones_cambio");
		b_rec1=true;
	}

	$("#btn_check1").click(function(){
		if(b_rec1 && b_btn)
		{
			if(rec1.charAt(rec1.length-1)==btn.charAt(btn.length-1))
			{
				if(a_rec1.indexOf($("#"+rec1).get(0))!=-1 && a_btns.indexOf($("#"+btn).get(0))!=-1/*true*/)
				{
					a_rec1.splice(a_rec1.indexOf($("#"+rec1).get(0)),1);//
					a_btns.splice(a_btns.indexOf($("#"+btn).get(0)),1);//Estas líneas de código no funcionan en Internet Explroer 7
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
			mensajear("The exercise has finished succesfully");
			$(this).hide();
			$("#reiniciar").fadeIn();
		}
	});

	$("#reiniciar").click(function(){
		btn = "";
		b_btn =false;
		rec1 = "";
		b_rec1 =false;
		a_btns = $(".botones").toArray();
		a_rec1 = $(".recuadros1").toArray();
		reordenar(a_btns,$(".botones").parent().attr("id"));
		reordenar(a_rec1,$(".recuadros1").parent().attr("id"));

		borrar(a_rec1);
		borrar(a_btns);
		$(this).hide();
		$("#btn_check1").fadeIn();
		mensajear("");
		$(".botones").on("click", al_oprimirbtn);
		$(".recuadros1").on("click", al_oprimirrec);
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
}