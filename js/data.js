// DECLARACIÓN DE INFORMACIÓN ESTÁTICA --------------------------------------------

const datosProductos = [{
    "id": 1,
    "nombre": "Americano",
    "precio": 620,
    "cantidad": 1,
    "demora": "20 minutos",
    "descrip": "Huevos, salchicha, bacon, y mucha energia para empezar el dia.",
    "imagen": "assets/imagenes/classic/americano.jpg",
    "vendido": false,
  },
  { 
    "id": 2,
    "nombre": "Panqueques",
    "precio": 400,
    "cantidad": 1,
    "demora": "15 minutos",
    "descrip": "Torre de panqueques, frutos rojos y baño del mas exquisito Maple Syrup.",
    "imagen": "assets/imagenes/classic/pancakes.jpg",
    "vendido": false,
  }, 
  {
    "id": 3,
    "nombre": "Clásico",
    "precio": 250,
    "cantidad": 1,
    "demora": "15 minutos",
    "descrip": "Desayuno bien clasico: Cafe con leche, jugo de naranja y unas crujientes croisants",
    "imagen": "assets/imagenes/classic/clasico.jpg",
    "vendido": false,
  }, 
  {
    "id": 4,
    "nombre": "Cereales",
    "precio": 200,
    "cantidad": 1,
    "demora": "30 minutos",
    "descrip": "Variedad de cereales y granola con frutas. Una forma muy energica de comenzar tu día.",
    "imagen": "assets/imagenes/healthy/cereales.jpg",
    "vendido": false,
  }, {
    "id": 5,
    "nombre": "Tostadas",
    "precio": 600,
    "cantidad": 1,
    "demora": "30 minutos",
    "descrip": "Vegetales, palta, queso crema para unas tostadas deliciosas.",
    "imagen": "assets/imagenes/healthy/tostadas.jpg",
    "vendido": false,
  },
  {
    "id": 6,
    "nombre": "Frutas",
    "precio": 400,
    "cantidad": 1,
    "demora": "20 minutos",
    "descrip": "Frutos rojos y de esta, super frescos! Arriba tu mañana! ",
    "imagen": "assets/imagenes/healthy/frutas.jpg",
    "vendido": false,
  },
  {
    "id": 7,
    "nombre":  "Ositos",
    "precio":  450,
    "cantidad": 1,
    "demora":  "30 minutos",
    "descrip": "Panqueques con frutas, super ricos para los mas chiquitos",
    "imagen": "assets/imagenes/kids/ositos.jpg",
    "vendido": false,
  },
  {
    "id": 8,
    "nombre": "Yogurt",
    "precio": 300,
    "cantidad": 1,
    "demora": "15 minutos",
    "descrip": "Yogurt casero natural, frutas y cerales de colores. Super nutritivo!",
    "imagen": "assets/imagenes/kids/yogurt.png",
    "vendido": false,
  },
  {
    "id": 9,
    "nombre": "Arcoiris",
    "precio": 250,
    "cantidad": 1,
    "demora": "20 minutos",
    "descrip": "Arcoiris de frutas rojas y tropicales. Acompañado de huevo poche, riquisimo!",
    "imagen": "assets/imagenes/kids/arcoiris.jpg",
    "vendido": false,
}];

//  DECLARACION DE CLASE ----------------------------------------------------------

class Desayuno {  
    constructor(datos) { 
      this.id       = datos.id;    
      this.nombre   = (datos.nombre);
      this.precio   = parseFloat(datos.precio);
      this.cantidad = parseInt(datos.cantidad);
      this.demora   = datos.demora;
      this.imagen   = datos.imagen;
      this.descrip  = datos.descrip;
    }
    sumarPrecio(aumento) {
      this.precio += aumento;
    }
    vender() {
      this.vendido = true;
    }
    multiplicarCant() {
      return this.precio * this.cantidad;
    }
  
    
    
}

//  CREANDO OBJETOS DESDE INFORMACION ESTATICA ------------------------------
 
const listaProductos = []; 

for (let i = 0; i < 9; i++) {
    listaProductos.push(new Desayuno(datosProductos[i]));  
} 


//  CARRITO -----------------------------------------------------------------

let carrito = [
  //metodo cargar carrito
];


// LISTA DE FAVORITOS -------------------------------------------------------

let favoritos = [];

