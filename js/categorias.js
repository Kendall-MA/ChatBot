const categorias = document.querySelectorAll('#categorias .categoria');
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
let categoriaActiva = null;

categorias.forEach((categoria) => {
	categoria.addEventListener('click', (e) => {
		categorias.forEach((elemento) => {
			elemento.classList.remove('activa');
		});

		e.currentTarget.classList.toggle('activa');
		categoriaPresionada = categoria.dataset.categoria;

		if(categoriaActiva === categoriaPresionada) //Si la categoriaActiva es igual a la categoria presionada entra aca
		{
			//Recorremos el contenedor de preguntas para comparar la categoria Presionada
			contenedorPreguntas.forEach((contenedor) => {
				if(contenedor.dataset.categoria === categoriaPresionada){
						//Desactivamos la categoria para que no mostrar las preguntas
						contenedor.classList.remove('activo');
						categorias.forEach((elemento) => {
						//Devolvemos a todos los contenedores la clase activa para mostrarlos en rojo
						elemento.classList.add('activa');
					});
					categoriaActiva = null; //Se vuelve a poner null la categoriaActiva porque ya no hay ninguna categoria activa.
				}
			});
		}
		//Si la categoriaActiva es igual a null entra en el else
		else{
			categoriaActiva = categoria.dataset.categoria;

			// Activamos el contenedor de preguntas que corresponde
			contenedorPreguntas.forEach((contenedor) => {
				if(contenedor.dataset.categoria === categoriaActiva){
					contenedor.classList.add('activo');
				}
				else {
					contenedor.classList.remove('activo');
				}
			});
		}
	});
});
