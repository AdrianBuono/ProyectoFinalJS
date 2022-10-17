function calcularPrecio() {
  let envios = [];
  let objetoEnvio = document.getElementById("objetoEnvio").value;
  let pesoEnvio = document.getElementById("pesoEnvio").value;
  let destinoEnvio = document.getElementById("destinoEnvio").value;
  let precioDestino = getPrecioPorDestino(destinoEnvio, pesoEnvio);
  let precioPorKilo = this.calcularPrecioPorKilo(pesoEnvio, objetoEnvio);
  let precioTotal = this.precioTotal(precioDestino, precioPorKilo);

  let envio = new Envio(
    objetoEnvio,
    pesoEnvio,
    precioPorKilo,
    destinoEnvio,
    precioDestino,
    precioTotal
  );
  envios.push(envio);

  //LOCALSTORAGE
  localStorage.setItem("envios", JSON.stringify(envios));

  let A = JSON.parse(localStorage.getItem("envios"));

  document.getElementById("detalleEnvio").innerHTML = `
          <h3><strong>Detalle de Envío: </strong></h3>
          <table>
            <tr>
              <td><strong>Producto a enviar: </strong>${objetoEnvio}</td>
            </tr>
            <tr>
              <td><strong>Peso Total: </strong>${pesoEnvio}</td>
            </tr>
            <tr>
              <td><strong>Peso por Kilo: </strong>${precioPorKilo}</td>
            </tr>
            <tr>
              <td><strong>Destino: </strong>${destinoEnvio}</td>
            </tr>
            <tr>
              <td><strong>Precio Destino: </strong>${precioDestino}</td>
            </tr>
            <tr>
              <td><strong>Total: </strong>${precioTotal}</td>
            </tr>
          </table>
      
          <button type="button" id="deleteEnvio" onclick="eliminarEnvio()" class="btn btn-danger">
          Eliminar
        </button>

        <button type="button" id="detallesCamion" onclick="selectCamion()" class="btn btn-primary">
        Continuar
        </button>
        `;

  return true;
}

function getPrecioPorDestino(destinoEnvio, pesoEnvio) {
  let precio = 0;
  switch (destinoEnvio) {
    case "argentina":
      if (pesoEnvio > 0 && pesoEnvio <= 100) {
        return (precio = 50000);
      } else if (pesoEnvio > 100 && pesoEnvio <= 500) {
        return (precio = 120000);
      } else {
        return (precio = 200000);
      }
      break;
    case "peru":
      if (pesoEnvio > 0 && pesoEnvio <= 100) {
        return (precio = 70000);
      } else if (pesoEnvio > 100 && pesoEnvio <= 500) {
        return (precio = 140000);
      } else {
        return (precio = 220000);
      }
      break;
    case "ecuador":
      if (pesoEnvio > 0 && pesoEnvio <= 100) {
        return (precio = 90000);
      } else if (pesoEnvio > 100 && pesoEnvio <= 500) {
        return (precio = 160000);
      } else {
        return (precio = 240000);
      }
      break;
    case "bolivia":
      if (pesoEnvio > 0 && pesoEnvio <= 100) {
        return (precio = 60000);
      } else if (pesoEnvio > 100 && pesoEnvio <= 500) {
        return (precio = 130000);
      } else {
        return (precio = 210000);
      }
      break;
    default:
      return alert("Ingresá un peso y destino correctos por favor");
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

  return precio;
}

function precioTotal(calcularPrecio, calcularPrecioPorKilo) {
  return calcularPrecio + calcularPrecioPorKilo;
}

function precioKilosTotales(pesoEnvio, objetoEnvio) {
  const total = pesoEnvio * objetoEnvio;
  return total;
}

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

//BOTON ELIMINAR + LIBRERIA TOASTIFY
function eliminarEnvio() {
  var botonEliminar = document.getElementById("deleteEnvio");
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

//BOTON SELECCIONAR CAMION + LIBRERIA TOASTIFY
function selectCamion() {
  var botonContinuar = document.getElementById("detallesCamion");
  botonContinuar.addEventListener("click", clickCamion);
  Toastify({
    text: "SELECCIONÁ CAMIÓN PARA EL TRANSPORTE",
    duration: 3000,
    style: {
      color: "green",
      background: "black",
    },
  }).showToast();
}

let botonContinuar = document.getElementById("detallesCamion");
if (botonContinuar) {
  botonContinuar.addEventListener("click", clickCamion);
}

function clickCamion() {
  return (document.location.href = "./camiones.html");
}
