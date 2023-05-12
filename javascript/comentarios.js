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
h1.innerHTML = `
 ${inputnombre.value}
 </div>
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