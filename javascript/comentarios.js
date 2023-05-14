var submitBtn = document.getElementById('submitbutton')
var cajacomentarios = document.getElementById('cajacomentario')
var inputnombre = document.getElementById('inputnombre')
var inputcomentario = document.getElementById('inputcomentario')
submitBtn.addEventListener('click', ponerComentario)
if(localStorage.getItem("comentarios") != null){
	cajacomentarios.innerHTML = localStorage.getItem("comentarios");
	}else{
		console.log("null");
	}
function ponerComentario(){
	    const letter = (inputnombre.value).charAt(0)

	if(inputnombre.value != '' && inputcomentario.value != ''){
	var h1 = document.createElement('h1');
h1.innerHTML = `<nombrescomentarios>
 ${inputnombre.value}
 </nombrescomentarios>
<comment>
 ${inputcomentario.value}
</comment>

`
	cajacomentarios.appendChild(h1,cajacomentarios)
	console.log(cajacomentarios.innerHTML)
	localStorage.setItem("comentarios", cajacomentarios.innerHTML);
	console.log(localStorage.getItem("comentarios"));
}
}

/*ESTILO*/
submitbutton.style.fontFamily = "Georgia";

cajacomentarios.style.fontFamily = "Georgia";
cajacomentarios.style.fontSize = "60%";

/*
nombreCoso.style.fontFamily = "Georgia";
nombreCoso.style.fontSize = "40%";
*/

inputnombre.style.fontFamily = "Georgia";

inputcomentario.style.fontFamily = "Georgia";
