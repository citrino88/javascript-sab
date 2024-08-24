/* const tituloPrincipal = document.querySelectorAll('h1');

console.log(tituloPrincipal); */

/* 

for (const i of tituloPrincipal) {
    tituloPrincipal[i].textContent = 'teste';
} */

//tituloPrincipal[0].textContent = 'teste';

//const tituloPrincipal = document.getElementsByClassName('container');

//console.log(tituloPrincipal);


//-----------------------------------------------------

const divDOM= document.querySelectorAll('div.content');


//-----------------------------------------------------
const tituloPrincipal = document.querySelector('#tituloPrincipal');

//textContent aparece literal
tituloPrincipal.textContent = 'teste <a href=""> ola </a>';

//innerHTML muda o HTML
// -- Manipulação DOM no HTML
tituloPrincipal.innerHTML = 'teste <a href=""> ola </a>';

// -- Manipulação CSSOM no CSS
divDOM[0].style.backgroundColor = 'grey';

//-----------------------------------------------------