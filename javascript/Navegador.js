var navegador = document.getElementById("navegador");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 0) {
    navegador.style.top = window.pageYOffset + "px";
  } else {
    navegador.style.top = "0";
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth <= 600) {
    document.getElementById('navegador').style.display = 'none';
    document.getElementById('boton-campana').style.display = 'none';
  } else {
    document.getElementById('navegador').style.display = 'block';
    document.getElementById('boton-campana').style.display = 'block';
  }
});

function buscar()
{

	var id = "searchbar";
	var barra = document.getElementById(id);
	var busqueda = barra.value;
  if (busqueda != "")
  {
	  console.log("buscando " + busqueda);
	  var elem = busquedaRecursiva(document.body, busqueda);
	  console.log(elem);
	  if(elem.parentElement.parentElement.nodeName == "DETAILS"){
	  	console.log("Diablo");
	  	elem.parentElement.parentElement.open = true;
	  }
	  elem.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }
}

function busquedaRecursiva(elem, string)
{
	if (elem.innerHTML.toLowerCase().includes(string.toLowerCase()) && !elem.hasChildNodes && !elem.hasAttribute("closed")){
		return elem;
	}
	if (elem.hasChildNodes() && !elem.hasAttribute("closed"))
	{
		var res = null;
		for (var i = 0; i<elem.children.length && res == null;i++)
		{
			var child = elem.children[i];
			res = busquedaRecursiva(child, string);
		}
		if(res != null && !res.hasAttribute("closed")){
		return res;
	}else if(!elem.hasAttribute("closed") && elem.innerHTML.toLowerCase().includes(string.toLowerCase())){
		console.log();
console.log("Lol");
return elem;
	}else{
		return null;
	}
	}
	else
	{
		return null;
	}
}