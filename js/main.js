//DESAFIOS ANTERIORES

/*
let productos = ["AMERICANO", "PANQUEQUES", "CLASICO", "INFANTIL"];

let seleccion = prompt("BIENVENIDOS AL DELIVERY DE BREKISS!" + "\nSeleccioná tu opcion de desayuno ingresando el numero: " + "\n- AMERICANO (Opción 1)" + "\n- PANQUEQUES (Opción 2)" + "\n- CLASICO (Opción 3)" + "\n- INFANTIL (Opción 4)" + "\nVolver al menu principal (Ingresa 0 )" );

function pedido () { 

if (seleccion == 1) { 
alert("El costo de " + productos[0] + " es de $700" );}

else if (seleccion == 2) {
alert("El costo de " + productos[1] + " es de $400" );}

else if (seleccion == 3) { 
alert("El costo de " + productos[2] + " es de $250" );}

else if (seleccion == 4) { 
alert("El costo de " + productos[3] + " es de $200" );}

else if (seleccion == 0 ) { 
alert("Estas de vuelta en el menu principal" );

}else{
    alert("Ingresaste una opcion inválida");}  
}

pedido(); 

*/




/*DESAFIO OBJETOS

// DECLARACION DE VARIABLES
let productoElegido;
let pagoUsuario;
let vuelto;

// FUNCION CONSTRUCTORA OBJETO DESAYUNO
class Desayunos {  
    constructor (nombre, precio, demora) { 
    this.nombre = nombre;
    this.precio = precio;
    this.demora = demora;
    }
    // METODO PARA COBRAR Y DAR VUELTO
    pagoyVuelto (precio) {  
    let pagoUsuario = parseInt(prompt("Con cuánto dinero vas a abonar tu pedido?"))
    if (pagoUsuario < precio) {
        alert("Oops, no te alcanza")
        desayuno1.pagoyVuelto(precio)
    } else if (pagoUsuario >= precio || pagoUsuario === precio) { 
        alert("Tu vuelto es: " + " $ " + (pagoUsuario - precio))
    } 
    } 
    // FUNCION PARA SALUDO Y TIEMPO DE DEMORA DE LA ENTREGA
    saludo (tiempo) {
        alert("Gracias por tu compra! \n Tu pedido llegara en " + tiempo)
    }
}

const desayuno1 = new Desayunos ("AMERICANO", 620, "30 minutos");
const desayuno2 = new Desayunos ("PANQUEQUES", 400, "20 minutos");
const desayuno3 = new Desayunos ("CLASICO", 250, "15 minutos");
const desayuno4 = new Desayunos ("INFANTIL", 200, "15 minutos");


// INTERACCION CON USUSARIO Y COMPRA
function compra () {
    let productoElegido = prompt ("Escribi el nombre del desayuno que querés pedir: \n - Americano \n - Panqueques \n - Clasico \n - Infantil \n Ingresa 0 para salir").toLowerCase();
    
    if (productoElegido === "americano") { 
        alert("Opcion elegida: " + desayuno1.nombre + " $ " + desayuno1.precio)
        desayuno1.pagoyVuelto(desayuno1.precio)
        desayuno1.saludo(desayuno1.demora)
             
    } else if (productoElegido === "panqueques") {
        alert("Opcion elegida: " + desayuno2.nombre + " $ " + desayuno2.precio)
        desayuno2.pagoyVuelto(desayuno2.precio)
        desayuno2.saludo(desayuno2.demora)  

    } else if (productoElegido === "clasico") { 
        alert("Opcion elegida: " + desayuno3.nombre + " $ " + desayuno3.precio) 
        desayuno3.pagoyVuelto(desayuno3.precio)
        desayuno3.saludo(desayuno3.demora)

    } else if (productoElegido === "infantil") { 
        alert("Opcion elegida: " + desayuno4.nombre + " $ " + desayuno4.precio)
        desayuno4.pagoyVuelto(desayuno4.precio) 
        desayuno4.saludo(desayuno4.demora)

    } else if (productoElegido == 0) { 
        alert("Gracias por tu visita!")
    
    }else{ 
        alert("Disculpa, no registramos bien tu elección");
        compra();
    }
}

compra();*/


//DESAFIO ARRAY

// CONSTRUCTOR DE OBJETO 
class Desayunos {  
    constructor (id, nombre, precio, cantidad, demora) { 
    this.id = id;    
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.demora = demora;
    }
}

todosLosDesayunos = [
    new Desayunos (1, "AMERICANO", 620, 1, "30 minutos"), 
    new Desayunos (2, "PANQUEQUES", 400, 1, "20 minutos"),
    new Desayunos (3, "CLASICO", 250, 1, "15 minutos"), 
    new Desayunos (4, "CEREALES", 200, 1, "15 minutos"), 
    new Desayunos (5, "TOSTADAS", 600, 1, "30 minutos"),
    new Desayunos (6, "FRUTAS", 400, 1, "20 minutos"), 
    new Desayunos (7, "OSITOS", 450, 1, "30 minutos"), 
    new Desayunos (8, "YOGURT", 300, 1, "15 minutos"), 
    new Desayunos (9, "ARCOIRIS", 250, 1, "20 minutos")
];

let masBarato = todosLosDesayunos[todosLosDesayunos.sort(function(a, b){return b.precio-a.precio})];
masBarato = todosLosDesayunos[todosLosDesayunos.length - 1].nombre;

console.log("El desayuno en promo es: " + masBarato )

//ARRAY CARRITO DE COMPRAS
const carrito = [];

// FUNCION PARA AGREGAR AL CARRITO
// agrega los productos y suma las cantidades 
function agregarAlCarrito(producto) {
    let yaAgregado = carrito.find(elemento => elemento == producto) 

	if (yaAgregado) {
        yaAgregado.cantidad++;
		
	} else {		
		carrito.push(producto)
	}
}

// agregarAlCarrito(desayuno1)
// agregarAlCarrito(desayuno3)
// agregarAlCarrito(desayuno5)
// agregarAlCarrito(desayuno8)
// agregarAlCarrito(desayuno1)
// agregarAlCarrito(desayuno1)
// agregarAlCarrito(desayuno1)
// agregarAlCarrito(desayuno8)

// console.table(carrito) 



