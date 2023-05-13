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
	  elem.scrollIntoView();
  }
}

function busquedaRecursiva(elem, string)
{
	if (elem.innerHTML.includes(string))
		return elem;
	else if (elem.hasChildNodes())
	{
		var res = null;
		for (var i = 0; i<elem.children.length && res == null;i++)
		{
			var child = elem.children[i];
			res = busquedaRecursiva(child, string);
		}
		return res;
	}
	else
	{
		return null;
	}
}