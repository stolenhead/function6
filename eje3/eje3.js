window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var segundos = parseFloat(document.getElementById("segundos").value);
		var inicial = parseFloat(document.getElementById("inicial").value);
         setInterval(function() {
         document.getElementById("ppp").innerHTML= inicial++;
          }, segundos*1000);
    });
});
