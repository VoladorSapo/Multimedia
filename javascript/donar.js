var intro = document.getElementById('intro')
var prize = 	 sessionStorage.getItem("prize");
var tier = sessionStorage.getItem("tier");
intro.innerHTML = `<br><h3> Bienvenido a la página de contribuciones. <br> 
Para terminar tu contribucion con la tier  ${tier} manda un bizum al número 689327980 con al menos   ${prize} € y tu correo electrónico.
</h3>`;

/*ESTILO*/
intro.style.color = "#644400"; 

intro.style.fontSize = "90%";

intro.style.fontFamily = "Georgia";
