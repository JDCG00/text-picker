document.addEventListener("click", function (event) {
	event.preventDefault();

	// Obtener el elemento del DOM en el que se hizo clic
	var clickedElement = event.target;

	// Capturar el texto del elemento
	var elementText = clickedElement.textContent;

	console.log(clickedElement);
	console.log("Texto del elemento:", elementText);

	// Copiar el texto al portapapeles
	navigator.clipboard
		.writeText(elementText)
		.then(function () {
			console.log("Texto copiado al portapapeles");
		})
		.catch(function (error) {
			console.error("Error al copiar el texto al portapapeles:", error);
		});
});
