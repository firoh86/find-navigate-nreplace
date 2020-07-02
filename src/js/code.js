const texto = document.getElementById('text');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const coincidencia = document.getElementById('match');
const form = document.getElementById('form');
const searchbar = document.getElementById('searchbar');

let textoinicial;
let textomodificado;

// evita la recarga por submit
form.addEventListener('click', (e) => {
  e.preventDefault();
});

searchbar.addEventListener('keyup', (e) => {
  if (e.target.value !== '') {
    texto.innerHTML = textomodificado
      .split(e.target.value)
      .join(`<span class="highlight">${e.target.value}</span>`);
  } else {
    texto.innerHTML = textoinicial;
    textomodificado = textoinicial;
  }
});

addEventListener('DOMContentLoaded', () => {
  textoinicial = texto.innerHTML;
  textomodificado = texto.innerHTML;
  // console.log(textoinicial);
});

//detección de mayúsculas
//Palabra completa, que no forme parte de otra palabra
//navegación entre coincidencias
//replace, all y uno por uno
