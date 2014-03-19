$(document).on("ready", arranque);
function arranque(){
	var carnada = $("#pagina").toArray();
	carnada.splice(carnada.indexOf($("#pagina").get(0)),1);//esto es solo una carnada para que ie7 no reconozca el código y desahbilite el javascript, desahbilitando el jscrollpane.
	$("#pagina").jScrollPane({showArrows: true});
}