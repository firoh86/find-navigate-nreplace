const texto = document.getElementById('text');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const coincidencia = document.getElementById('match');
const form = document.getElementById('form');
const searchbar = document.getElementById('searchbar');

let textArray;
let compare;

// evita la recarga por submit
form.addEventListener('click', (e) => {
  e.preventDefault();
});

const LoadText = () => {
  let actualtext = texto.textContent;
  let points = actualtext.split('.').join(' .');
  textArray = points.split(' ');
  // console.log(textArray);
};

// algoritmo de comprobacion
const comparison = (tocompare) => {
  // console.log(tocompare.length);
  let matchcount = 0;
  let newArray = [];
  let onlymatch = [];
  for (let word of textArray) {
    let comp = word.slice(0, tocompare.length);

    if (comp == tocompare) {
      newArray.push(word);
      onlymatch.push(word);
      matchcount++;
    } else if (comp != tocompare) {
      newArray.push('');
    }
  }
  console.log(newArray);
  coincidencia.textContent = `${matchcount} coincidencias`;
};

searchbar.addEventListener('change', (e) => {
  // console.log(searchbar.value);
  if (searchbar.value.length > 0) {
    compare = searchbar.value;
    comparison(compare);
  }
});

// funcion que recorre el texto y aplica los spans
// funcion que recorre el texto y limpia los spans o recrea el texto desde el save

// window.onload = () => {LoadText();};
addEventListener('DOMContentLoaded', () => {
  LoadText();
});
