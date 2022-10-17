class Envio {
  constructor(
    objeto_envio,
    peso_envio,
    precio_kilo,
    destino,
    precio_destino,
    precio_total
  ) {
    this.objetoEnvio = objeto_envio;
    this.pesoEnvio = peso_envio;
    this.precioKilo = precio_kilo;
    this.destino = destino;
    this.precioDestino = precio_destino;
    this.total = precio_total;
  }
}

function calcularPrecioPorKilo(pesoEnvio, objetoEnvio) {
  const precioKG = [
    {
      objeto: "cobre",
      precio: 100,
    },
    {
      objeto: "maiz",
      precio: 100,
    },
    {
      objeto: "computadoras",
      precio: 100,
    },
    {
      objeto: "indumentaria",
      precio: 100,
    },
  ];
  const precioXKG = precioKG.filter((element) => element.objeto == objetoEnvio);
  const precio = precioKilosTotales(pesoEnvio, precioXKG[0].precio);
  alert(`     El/Las ${objetoEnvio} tiene un valor de $${precioXKG[0].precio} por kilo.
         El total por ${pesoEnvio}KGS es de $${precio}`);
  return precio;
}

function precioKilosTotales(pesoEnvio, objetoEnvio) {
  const total = pesoEnvio * objetoEnvio;
  return total;
}





//BOTON ELIMINAR + LIBRERIA TOASTIFY
function eliminarEnvio() {
  var botonEliminar = document.getElementById("eliminarEnvio");
  botonEliminar.addEventListener("click", eliminar);
  Toastify({
    text: "ELIMINASTE LA SOLICITUD DE ENVÍO",
    duration: 3000,
    style: {
      color: "red",
      background: "black",
    },
  }).showToast();
}

function eliminar() {
  var objetoAEliminar = document.getElementById("detalleEnvio");
  return objetoAEliminar.remove();
}

// //BOTON PARA CANCELAR PRODUCTO QUE AGREGUÉ
// let boton = document.getElementById("botonCancel")

//  botonCancel.addEventListener("click", function () {

//   let producto = document.getElementById("producto");
//   let lista = document.getElementById("lista");

//   let li = document.createElement("li");

// li.innetHTML = '<span>${producto.value}</span>
// <button class="borrar"> Borrar </button>';

// lista.append(li);

// let boton_borrar = document.querySelectorAll("borrar");

// for( let botonCancel of boton_borrar){

//   botonCancel.addEvenetListener("click" , borrar_elemento);

// }

// });

// function borrar_elemento(e){

//   let hijo = e.target;
//   let padre = hijo.parentNode;
//   let abuelo = padre.parentNode;

//   padre.remove();

// }

// ////////////////////////////////////////////////////////////////////////////////

function precioTotal(calcularPrecio, calcularPrecioPorKilo) {
  return calcularPrecio + calcularPrecioPorKilo;
}
