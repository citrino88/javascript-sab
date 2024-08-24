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
/* 
const divDOM= document.querySelectorAll('div.content');


//-----------------------------------------------------
const tituloPrincipal = document.querySelector('#tituloPrincipal');

//textContent aparece literal
tituloPrincipal.textContent = 'teste <a href=""> ola </a>';

//innerHTML muda o HTML
// -- Manipulação DOM no HTML
tituloPrincipal.innerHTML = 'teste <a href=""> ola </a>';

// -- Manipulação CSSOM no CSS
divDOM[0].style.backgroundColor = 'grey'; */

//-----------------------------------------------------

/* ------------------------------------------------
    TABUADA
 */

function tabuada() {
    const valor = document.querySelector('#tabuada').value;
    //alert('funcionou');

    const divResposta = document.querySelector('#respostaTabuada');

    divResposta.innerHTML = ''; //limpeza, para não haver acumulo de resultados um abaixo do outro

    if (valor != '') {

        for (let i = 1; i <= 10; i++) {

            divResposta.innerHTML += `${valor} x ${i} = ${valor * i} <br>`;
        }
    }else{
        divResposta.textContent = "Insira um valor!";
    }
}

/* ------------------------------------------------
    ALTERAR CORES
 */

function alterarCor() {

    // lembrar não esquecer do value, para capturarmos o valor da cor que o usuario quer
    const cor = document.querySelector('#cor').value;
    const body = document.querySelector('body');

    body.style.backgroundColor = `${cor}`;

    const bloco = document.querySelector('#bloco').value;
    const blocoCor = document.querySelector('#blocoCor');
    blocoCor.style.backgroundColor = `${cor}`;
    
}
