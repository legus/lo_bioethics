$(document).on("ready", arranque);
var urls_contenidos=[];
var titulos=[];
var btn=0;
var contenidos=0;
function arranque(){
	urls_contenidos=[["bienvenida","intro"],
					["cont1","cont2"],
					["texto1","cont3","ejer1"],
					["texto2","cont4","texto3"],
					["cont5","cont6","cont7","ejer2"],
					["texto4","cont8","ejer3","cont9","ejer4"],
					["btn7a","btn7b","btn7c","btn7d"]];
	//window.alert(urls_contenidos);
	titulos=["FIRST CLUE","SECOND CLUE","THIRD CLUE","FOURTH CLUE","FIFTH CLUE","SIXTH CLUE","THE TREASURE"];
	$("#menu_lateral2").on("click",clic_menu);
	$(".botones").on("click",clic_btns);
	$("#st_nav_der").on("click",clic_h_der);
	$("#st_nav_izq").on("click",clic_h_izq);
	$("#menu_interno1").on("click",clic_t_izq);
	$("#menu_interno2").on("click",clic_t_der);
	$(".st_navs").css("visibility","hidden");
	$("#menu_interno1").css("visibility","hidden");
}

function clic_btns(datos){
	btn=parseInt($(datos.target).attr("id").charAt($(datos.target).attr("id").length-1));//del id del botón presionado, se saca el último caracter y éste se convierte en número
	contenidos=0;
	$("#st_nav_der").css("visibility","visible");
	$("#frame").fadeIn();
	$("#frame").attr("src", "contenidos/"+urls_contenidos[btn-1][contenidos]+"/index.html");
	$("#menu_central p").text(titulos[btn-1]);
	$("#menu_interno1").css("visibility","visible");
	$("#menu_interno2").css("visibility","visible");
	if(btn==1){
		$("#menu_interno1").css("visibility","hidden");
	}
	if(btn==urls_contenidos.length){
		$("#menu_interno2").css("visibility","hidden");
	}
}

function clic_h_der(datos){
	//window.alert("el derecho: "+contenidos);
	contenidos++;
	$("#st_nav_izq").css("visibility","visible");
	$("#frame").fadeIn();
	$("#frame").attr("src", "contenidos/"+urls_contenidos[btn-1][contenidos]+"/index.html");
	if(contenidos==urls_contenidos[btn-1].length-1){
		$("#st_nav_der").css("visibility","hidden");
		//window.alert("final derecho");
	}
}

function clic_h_izq(datos){
	//window.alert("el izquierdo: "+contenidos);
	contenidos--;
	$("#st_nav_der").css("visibility","visible");
	$("#frame").fadeIn();
	$("#frame").attr("src", "contenidos/"+urls_contenidos[btn-1][contenidos]+"/index.html");
	if(contenidos==0){
		$("#st_nav_izq").css("visibility","hidden");
		//window.alert("final izquierdo");
	}
}

function clic_t_der(datos){
	//window.alert("el topic derecho: "+btn+" - "+urls_contenidos[btn][0]);
	btn++;
	contenidos=0;
	$("#st_nav_der").css("visibility","visible");
	$("#st_nav_izq").css("visibility","hidden");
	$("#menu_interno1").css("visibility","visible");
	$("#frame").fadeIn();
	$("#frame").attr("src", "contenidos/"+urls_contenidos[btn-1][contenidos]+"/index.html");
	$("#menu_central p").text(titulos[btn-1]);
	if(btn==urls_contenidos.length){
		$("#menu_interno2").css("visibility","hidden");
		console.log("final topic derecho");
	}
}

function clic_t_izq(datos){
	//window.alert("el topic izquierdo: "+(btn-2)+" - "+urls_contenidos[btn-2][0]);
	btn--;
	contenidos=0;
	$("#st_nav_der").css("visibility","visible");
	$("#st_nav_izq").css("visibility","hidden");
	$("#menu_interno2").css("visibility","visible");
	$("#frame").fadeIn();
	$("#frame").attr("src", "contenidos/"+urls_contenidos[btn-1][contenidos]+"/index.html");
	$("#menu_central p").text(titulos[btn-1]);
	if(btn==1){
		$("#menu_interno1").css("visibility","hidden");
		//window.alert("final topic izquierdo");
	}
}

function clic_menu(datos){
	btn=0;
	$("#frame").css("display","none");
	$("#frame").attr("src", "");
	$("#menu_central p").text("");
	$(".st_navs").css("visibility","hidden");
	$("#menu_interno1").css("visibility","hidden");
	$("#menu_interno2").css("visibility","visible");
}