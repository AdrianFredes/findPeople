miTitulo = document.querySelector('h1');
miTitulo.innerHTML = '¡Encuentra tu gente!';

var fecha = new Date();
var hoy = fecha.toLocaleString();
console.log(hoy);

let contenedor = document.getElementById('contenedor');
contenedor.innerHTML = hoy;

