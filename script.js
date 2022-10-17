// function envioRapido(){
//   let objetoEnvio = prompt(
//     <>
//     <select class="form-select" aria-label="Default select example" id="objetoEnvio" style="width: 25%; margin-left: 2em; margin-top: 1rem;">
//           <option selected disabled value="vacio">Seleccione una opcion</option>
//           <option value="cobre">Cobre</option>
//           <option value="maiz">Maíz</option>
//           <option value="computadoras">Computadoras</option>
//           <option value="indumentaria">Indumentaria</option>
//       </select>
//     </>
//   )
// }

// EVENTLISTENER //
// let bontonAyuda = document.getElementById("boton-ayuda");
// bontonAyuda.addEventListener("click", clicked);

// function clicked() {
//   return (document.location.href = "./ayuda.html");
//   // alert("Hiciste click para pedir ayuda");
// }



// // SWEETALERT

// Swal.fire({
//   icon: "warning",
//   title: "hola",
//   footer: "chau",
//   imageUrl: 'https://unsplash.it/400/200',
//   text: "error 404",
//   // animacion / animate
//   showClass: {
//     popup: 'animate__animated animate__bounceInUp'
//   },
//   hideClass: {
//     popup: 'animate__animated animate__hinge'
//   }
// });

//ESTO NO VA, CAMBIAR POR API CLIMA
//FETCH / API//
const formulario = document.querySelector("#formulario");
const inputBusqueda = document.querySelector("#termino");
const divResultado = document.querySelector("#Resultado");

//Evento
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  //Validacion input
  ValidarInput();
});

//Funciones
function ValidarInput() {
  if (!inputBusqueda.value) {
    console.log("Debes ingresar un termino de busqueda");
    return;
  }

  obtenerDatos();
}

function obtenerDatos() {
  // https://pixabay.com/api/?key=30193148-c3024e9a44437bc9b96cee5ba&q=yellow+flowers&image_type=photo&pretty=true
  const BASE_URL = "https://pixabay.com/api/?";
  const API_KEY = "30193148-c3024e9a44437bc9b96cee5ba";
  const query = inputBusqueda.value;
  const URL = `${BASE_URL}key=${API_KEY}&q${query}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => mostrarImagenes(data.hits));
}

function mostrarImagenes(imagenes) {
  //LIMPIAR BUSCADOR
  divResultado.innerHTML = "";
  //
  for (const imagen of imagenes) {
    const divImagen = document.querySelector("div");
    divImagen.classList.add("card");

    const img = document.createElement("img");
    img.src = imagen.previewURL;

    const like = document.createElement("p");
    likes.textContent = "Likes :" + imagen.likes;

    divImagen.append(likes);
    divImagen.appendChild(img);
    divResultado.appendChild(divImagen);
  }
}
