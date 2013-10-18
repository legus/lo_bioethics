$(document).on("ready", arranque);
var urls=[];
var titulos=[];
var btn=0;
function arranque(){
	urls=["bienvenida","cont1","texto1","texto2","cont5","texto4","btn7a"];
	titulos=["FIRST CLUE","SECOND CLUE","THIRD CLUE","FOURTH CLUE","FIFTH CLUE","SIXTH CLUE","THE TREASURE"];
	$("#menu_lateral2").on("click",clic_menu);
	$(".botones").on("click",clic_btns);
}

function clic_btns(datos){
	btn=parseInt($(datos.target).attr("id").charAt($(datos.target).attr("id").length-1));//del id del botón presionado, se saca el último caracter y éste se convierte en número
	//$("#prueba").load(urls[btn-1]);
	$("#frame").fadeIn();
	$("#frame").attr("src", "contenidos/"+urls[btn-1]+"/index.html");
	$("#menu_central p").text(titulos[btn-1]);
	//window.alert(btn);
	//console.log("entro carajo");
}

function clic_menu(datos){
	//console.log("menu carajo");
	$("#frame").css("display","none");
	$("#frame").attr("src", "");
	$("#menu_central p").text("");
}