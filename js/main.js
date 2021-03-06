//  SECCION DECLARACION DE VARIABLES Y ACCESOS AL DOM -------------------------------------------------
let html;
let subtotal;

let contModal = document.querySelector("#modalCarrito");
let totalModal = document.querySelector("#total-carrModal");  
let itemsCarrito = document.querySelector("#itemsCarrito");
let contCarritoPadre = document.querySelector("#carritoGenerado");
let contSubtotal = document.querySelector("#subtotal");
let contTotal = document.querySelector("#total"); 



//  EVENTO PARA CONTROLAR QUE LA PAGINA SE HAYA CARGADO EN SU TOTALIDAD ---------------
$(document).ready(function() {
  generarProductosIndex(listaProductos);
  generarSecciones()
  COMPRA(listaProductos);
  FAVORITOS(listaProductos); 
  calcSubtotal();
  salidaCarritoCheckout(carrito);
  salidaCarritoModal();  
  itemsCarrito.innerHTML = carrito.length;  
});



//  GENERANDO CONTENIDO HTML DE MANERA DINAMICA: SECCION PRODUCTOS TOTALES INDEX---------
function generarProductosIndex(lista) {        
  for (const producto of lista) {       
    let contPadre = document.querySelector("#contenido-generado");
    let contHijo = document.createElement("div");  
    contHijo.innerHTML = `<div class="container product">
                            <div class="card-deck">
                              <div class="col-lg-8 card-area">
                                <div class="card" style="width:18rem" id="ficha">
                                <img src="${producto.imagen}" class="imagenes" alt="Card image cap">  
                                <div class="card-body text-center">
                                  <h5> ${producto.nombre} </h5>
                                  <p> ${producto.descrip}</p>                               
                                  <hr>
                                  <h6 class="mb-3">
                                    <span class="text-danger mr-1"> $${producto.precio}</span>
                                    <span class="text-grey"><s> </s></span>
                                  </h6>
                                  <button type="button" id=${producto.id} class="btn btn-primary btn-sm mr-1 mb-2" id="btn-COMPRAr">
                                    <i class="fas fa-shopping-cart pr-2"></i>Pedir
                                  </button>
                                  <button type="button" id=${producto.nombre} class="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main btn-fav" data-toggle="tooltip" data-placement="top" title="lista de deseos">
                                    <i class="far fa-heart"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>`
  contPadre.appendChild(contHijo);     
}
} 
$("#carouselExampleFade").hide()         
                        .fadeIn(2000)

$("#titulo-pagina").hide()
                   .delay(1500)
                   .fadeIn(1000) 
$(".banner").hide()
            .delay(2000)
            .fadeIn(1000)
 
$("#contenido-generado").hide()
                        .delay(2000)
                        .fadeIn(2000)


                    
//  AGRUPANDO PRODUCTOS POR CATEGORIA EN LAS "DIFERENTES" SECCIONES---------------------
function generarSecciones() {
let clasicos = document.querySelector("#seccion-clasicos");
let listaClasicos = listaProductos.slice(0,3)
clasicos.onclick = () => { 
  $("#carouselExampleFade").empty()
  $("main h2").html("Clasicos")
              .hide()
              .fadeIn(1000);
  $("#contenido-generado").empty()
                           .hide()        
                          .fadeIn(1000);
  $(".checkout").hide() 
                .fadeIn(2000);  
   generarProductosIndex(listaClasicos) 
   COMPRA(listaClasicos)
   FAVORITOS(listaClasicos);  
}  
let saludables = document.querySelector("#seccion-saludables");
let listaSaludables = listaProductos.slice(3,6)
saludables.onclick = () => { 
  $("#carouselExampleFade").empty()
  $("main h2").html("Saludables")
              .hide()
              .fadeIn(1000);
  $("#contenido-generado").empty()  
                          .hide()      
                          .fadeIn(1000);
  $(".checkout").hide()  
                .fadeIn(2000); 
   generarProductosIndex(listaSaludables)
   COMPRA(listaSaludables)
   FAVORITOS(listaSaludables); 
}
let infantiles = document.querySelector("#seccion-infantiles");
let listaInfantiles = listaProductos.slice(-3)
infantiles.onclick = () => { 
  $("#carouselExampleFade").empty()
  $("main h2").html("Infantiles")
              .hide()
              .fadeIn(1000);
  $("#contenido-generado").empty()   
                          .hide()     
                          .fadeIn(1000);
  $(".checkout").hide()  
                .fadeIn(2000); 
   generarProductosIndex(listaInfantiles)  
   COMPRA(listaInfantiles)
   FAVORITOS(listaInfantiles);  
}
}  



//   CARRITO DE COMPRAS----------------------------------------------------------
function COMPRA(lista) {
  for (const boton of lista) {
    let botonPedir = document.getElementById(boton.id); 
    botonPedir.onclick = () => {
      boton.vender(); 
      agregarAlCarrito(boton);             
      calcSubtotal(); 
      guardarCarrito();       
      salidaCarritoCheckout(carrito);  
      $("#modalCarrito").prepend(salidaCarritoModal());            
    }
  }
}

 // Ingreso productos al carrito mediante m??todo push
function agregarAlCarrito(producto) {  
  let yaAgregado = carrito.find(elemento => elemento == producto); 
  if (yaAgregado) {  
        yaAgregado.cantidad++;      
  } else {		
    carrito.push(producto)
  } 
  itemsCarrito.innerHTML = carrito.length;
  console.table(carrito)
} 

// Utilizo m??todo para reducir el array al valor total de los productos
function calcSubtotal () { 
  subtotal = carrito.reduce(function (total, actual) {
  return total + actual.cantidad * actual.precio;  
  },0);  
}

// Salida carrito Checkout  
function salidaCarritoCheckout(lista) {    
  html = "";  
  for (const el of lista) {   
    html += `<div class="row lower cartitem">
              <div class="col text-left ">
               <img src="${el.imagen}" alt="Card image cap" width="70px">
               <span>${el.nombre} x${el.cantidad}</span>
              </div>          
              <div class="col text-right">$ ${el.precio * el.cantidad}</div>                      
            </div>`;   
    contCarritoPadre.innerHTML = html; 
  } 
  contSubtotal.innerHTML = `$ ${subtotal}`;                                 
  contTotal.innerHTML = `$ ${subtotal}`; 
}

// Salida carrito Modal   
function salidaCarritoModal() { 
  html = "";
  for (const el of carrito) {
     html +=  `<div class="col-11 col-md-5"> ${el.nombre} </div>
               <div class="col-5 col-md-4"> Cant: ${el.cantidad} </div>
               <div class="col-3 col-md-3"> $ ${el.precio * el.cantidad} </div>         
              `;         
     contModal.innerHTML = html;   
  }
  $("#total-carrModal").html("Total: $ " + subtotal); 
  // Vaciar carrito
  $(".vaciarCarrito").click(() => { 
    carrito = [];
    contModal.innerHTML = "";
    totalModal.innerHTML = "";
    itemsCarrito.innerHTML = "0";
    contCarritoPadre.innerHTML = "";
    contSubtotal.innerHTML = "$ 0";
    contTotal.innerHTML = "$ 0";
    borrarCarritoGuardado();
  })
}



//  LISTA DE FAVORITOS  -----------------------------------------------------
function FAVORITOS(lista) {
  for (const fav of lista) {
    let botonFav = document.getElementById(fav.nombre);  
    botonFav.onclick = () => {
      agregarFavoritos(fav);
      console.log("agregado a favoritos");
      console.log(favoritos);  
      $("#listaFav").prepend(salidaFavoritos(fav));    
    }  
  }
}

//  Agregar a favoritos
function agregarFavoritos(producto) {  
  let yaFav = favoritos.find(elemento => elemento == producto); 
  if (yaFav) {
    favoritos.push(producto);
    favoritos.pop(producto);	
  } else {		
    favoritos.push(producto)
  }  
} 

// salida favoritos Modal
function salidaFavoritos() {
  let contLista = document.querySelector("#listaFav")
  html = "";
  for (const el of favoritos) {
    html +=  `  <div class="col-md-8"> ${el.nombre} </div>
                <div class="col-md-4"> 
                  <button type="button" id=${el.id} class="btn btn-primary btn-sm mr-1 mb-2" id="btn-COMPRAr"> <i class="fas fa-shopping-cart pr-2"></i>Pedir   
                  </button>
                </div>     
               `; 
    contLista.innerHTML = html;   
  }
  $("#vaciarFav").click(() => { 
    favoritos = [];
    contLista.innerHTML = "";    
  })
}



//  STORAGE  --------------------------------------------------------------------
// Guardar en Storage
function guardarCarrito() {
  localStorage.setItem("carritoGuardado", JSON.stringify(carrito)); 
}

// Cargando los productos guardados al carrito
function recuperarCarrito() {
  carrito = JSON.parse(localStorage.getItem("carritoGuardado"));
}  
if (localStorage.getItem("carritoGuardado") != null) {
  recuperarCarrito();
  console.log(carrito)
}

// Eliminar del Storage
function borrarCarritoGuardado() {
  localStorage.removeItem("carritoGuardado")
}



//  FORMULARIO -------------------------------------------------------------------
$(document).ready(function() {  
$("form").submit(function (e) { 
  e.preventDefault();
  let hijos = $("form :input");
  console.log($("form :input"));
  const objCreadoForm = {
    nombre: hijos[0].value,
    direccion: hijos[1].value,
    tarjeta: hijos[2].value,
    vencimiento:  hijos[3].value,
    cvv: hijos[4].value, 
  }
  const APIURL = 'https://jsonplaceholder.typicode.com/posts' ; 
  console.log(objCreadoForm)
  $("#btn-confirmarPedido").click(() => { 
    $.ajax({
        method: "POST",
        url:  APIURL,
        data: objCreadoForm,
        success: function(respuesta){  $("form").prepend
           (`
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content" ">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Pedido realizado con exito </h5>
                  </div>
                  <div class="modal-body"> 
                    <p>Recibir??s tu pedido en ${respuesta.direccion}</p>
                    <h2>Gracias por tu compra!</h2>
                  </div>
                </div>
              </div>
            </div>        
          `);                          
         }
      });
    });
  });
$(".checkout").hide()
              .delay(4000)
              .fadeIn(1000)

});

