/*Crea una  lista de una oficina para agregar consorcios,
  ingresar un consorcio nuevo y buscar un consorcio en la lista.
*/

const oficina = {
  // Objeto principal de la aplicacion
  consorcios: [],
  // lista de consorcios    
 agregarConsorcio() {
    const nombreConsorcio = prompt("Agregue un consorcio").toUpperCase();
    const numeroDeCuit = prompt("¿El consorcio tiene CUIT?");
    const consorcio = {
      nombre: nombreConsorcio,
      cuit: numeroDeCuit || "SIN CUIT"
    };

    if (numeroDeCuit) {
      this.consorcios.unshift(consorcio);
    } else {
      this.consorcios.push(consorcio);
    }
  },

  ingresarConsorcioNuevo() {
    const consorcioNuevo = this.consorcios.shift();
    if (consorcioNuevo) {
      alert(`El consorcio ${consorcioNuevo.nombre} (CUIT: ${consorcioNuevo.cuit}) puede agregarlo a la lista`);
    } else {
      alert("No hay consorcios en la lista.");
    }
  },
  buscarEnLista(){
    //busca un consorcio en la lista, si no lo encuentra le dice que no esta y si lo encuentra le dice su posición en la lista
    const nombreConsultar = prompt("Ingrese el nombre del consorcio").toUpperCase()
    const consulta = oficina.consorcios.indexOf(nombreConsultar)
    if(consulta === -1){
      alert(`El consorcio ${nombreConsultar} no esta en la lista`)
    } else {
      alert(`El consorcio ${nombreConsultar} esta en la posición ${consulta+1}`)
    }
  }
}

function ingresarNumero(){
  // valida que se ingrese un número del 1 al 4 y lo devuelve
  let operacionIngresada = parseInt(prompt("Ingrese: \n 1 - Agregar Consorcio a lista.\n 2 - Mandar Consorcio a la lista.\n 3 - Buscar Consorcio en lista \n 4 - Salir"))
  while(isNaN(operacionIngresada) || operacionIngresada < 1 || operacionIngresada > 4){
    operacionIngresada = parseInt(prompt("Ingrese: \n 1 - Agregar Consorcio a lista.\n 2 - Mandar Consorcio a la lista.\n 3 - Buscar Consorcio en lista \n 4 - Salir \n POR FAVOR INGRESE UN VALOR DEL 1 AL 4"))
  }
  return operacionIngresada
}


function seleccionarOperacion(operacion){
  // Dependiendiendo del número ingresado, se realiza una operación distinta
  switch(operacion){
    case 1:
      oficina.agregarConsorcio()
      break;
    case 2:
      oficina.ingresarConsorcioNuevo()
      break;
    case 3:
      oficina.buscarEnLista()
      break;
    case 4:
      loop = false
      break;
    default:
      alert("Por favor ingrese solo números del 1 al 4")
  }
}


function app(){
  //Ejecuta todo el programa
  alert("Buen día")
  let loop = true
  while(loop){
    let operacion = ingresarNumero()
    seleccionarOperacion(operacion)
  }
  alert("Chau que tenga buen día")
}


// Corro el programa
app()