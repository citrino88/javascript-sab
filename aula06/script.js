console.log("ola mundo!");

//console.log(document.getElementById('tituloPrincipal'));

// Mas vamos guardar dentro da variavel, const pois nao vamos mudar o valor dela.

/* const tituloPrincipal = document.getElementById('tituloPrincipal');

console.log(tituloPrincipal);

tituloPrincipal.textContent = "Teste"

var nome= prompt('Digite seu nome:: ');

tituloPrincipal.textContent = `Seja bem vinde ${nome}`; */

//querySelector pega pelo CSS

const tituloPrincipal = document.querySelector('#tituloPrincipal');

tituloPrincipal.textContent = 'teste';
