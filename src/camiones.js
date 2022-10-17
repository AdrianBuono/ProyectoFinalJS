// CARRITO

let carrito = [];

let btn_compra = document.querySelectorAll(".botonCompra");
console.log(btn_compra);

for (let boton of btn_compra) {
  boton.addEventListener("click", agregar_a_carrito);
}

function agregar_a_carrito(e) {
    console.log("EL EVENTO ESTA EN:", e.target);

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
    //console.log(padre);
    //console.log(abuelo);

  let nombre_producto = padre.querySelector("h5").textContent;

  let precio = padre.querySelector("span").textContent;
  let img = abuelo.querySelector("img").src;

  let producto = {
    nombre: nombre_producto,
    img: img,
    precio: precio,
    cantidad: 1,
  };

  carrito.push(producto);

  //LOCALSTORAGE
  let arreglo_JSON = JSON.stringify(carrito);
  localStorage.setItem("carrito", arreglo_JSON);

  console.log(carrito);

  mostrar_carrito(producto);
}

function mostrar_carrito(producto) {
  let fila = document.createElement("tr");

  fila.innerHTML = `<td><img src="${producto.img}"></td>
                       <td>${producto.nombre}</td>
                       <td>${producto.precio}</td>
                       <td><button type="button" id="myBtn" onclick="mostrarEnvio()"><i class="fa fa-cart-plus" aria-hidden="true"></i></button>
                       <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>
                       <td><button class="btn btn-success">FINALIZAR</button></td>
                       `;

  let tabla = document.getElementById("tbody");
  tabla.append(fila);

    //BORRAR + LIBRERIA TOASTIFY AGREGAR Y ELIMINAR DEL CARRITO
    this.getCarrito = localStorage;

  let botones_borrar = document.querySelectorAll(".borrar_elemento");
  for (let boton of botones_borrar) {
    boton.addEventListener("click", borrar_producto);
    Toastify({
      text: "AGREGASTE CAMIÓN AL CARRITO",

      duration: 3000,
      style: {
        color: "green",
        background: "black",
      },
    }).showToast();
  }
}
// Get the button that opens the modal
function mostrarEnvio() {
  // Get the modal
  var modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  var btn = document.getElementById("myBtn");
  btn.addEventListener("click", function () {
    console.log("aca estoy");
    modal.style.display = "block";
  });
  this.contenidoModal();
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function contenidoModal() {
  let envioFinal = JSON.parse(localStorage.getItem("envios"));
  console.log(envioFinal[0].objetoEnvio, envioFinal[0].destino);
  let contenidoModal = document.getElementById("contenidoModal");
  contenidoModal.innerHTML = ` 
  <table>
    <tr>
    <th>Objeto</th>
    <th>Peso</th>
    <th>Precio/KG</th>
    <th>Destino</th>
    <th>Precio Destino</th>
    <th>Total</th>
    </tr>
    <tr>
    <td>${envioFinal[0].objetoEnvio}</td>
    <td>${envioFinal[0].pesoEnvio}</td>
    <td>${envioFinal[0].precioKilo}</td>
    <td>${envioFinal[0].destino}</td>
    <td>${envioFinal[0].precioDestino}</td>
    <td>${envioFinal[0].total}</td>
    </tr>
    </table>
    `;
}

function borrar_producto(e) {
  let abuelo = e.target.parentNode.parentNode;
  abuelo.remove();
  Toastify({
    text: "BORRASTE CAMIÓN DEL CARRITO",
    duration: 3000,
    style: {
      color: "red",
      background: "black",
    },
  }).showToast();
}

let btn_carrito = document.getElementById("mostrar_carrito");

btn_carrito.addEventListener("click", function () {
  let carrito = document.getElementById("carrito");

  if (carrito.style.display != "none") {
    carrito.style.display = "none";
  } else {
    carrito.style.display = "flex";
  }
});

// LOCALSTORAGE

this.constructor = function () {
  if (localStorage.getItem("carrito")) {
    localStorage.setItem("carrito", "[]");
  }
};
