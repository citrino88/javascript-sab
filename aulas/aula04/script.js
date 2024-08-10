'use strict';

/* console.log("ola mundo");
alert("ola mundo!"); */



/* switch (mesNascimento) {
    case 'janeiro':
        alert('voce é capricorniano');  
        break;
    case 'fevereiro':
        alert('voce é pisciano');  
        break;
    case 'outubro':
        alert('voce é libriano');  
        break;            

    default:
        alert('voce escreveu o mes errado');
        break;
} */

// var numero = 2;

/* console.log(numero*1);
console.log(numero*2);
console.log(numero*3);
console.log(numero*4);
console.log(numero*5);
console.log(numero*6);
console.log(numero*7);
console.log(numero*8);
console.log(numero*9);
console.log(numero*10); */
/*
var contador = 1;
while(contador <= 10){
    console.log(numero*contador);
    contador++;//contator mais 1
} */

/* var compra = 125.50;
var parcelas = 10;
var juros = 0.5;
var contador = 1;
var valorAtual = compra / parcelas; 


 while(contador <= parcelas){

    valorAtual = (juros*valorAtual)+valorAtual;

    console.log(`Parcela ${contador}: ${valorAtual.toFixed(2)}`);

    contador++;
} */

/*     
do{
var valor = Number(prompt('Digite um valor!'));
var contador = 1;

while (contador<=10) {
    console.log(valor*contador);
    contador++;    
}
var resposta =prompt("Você quer continuar?:: ");
}
while(resposta =='sim');
 */


/* var valor=2;
for(let i=0;i<=10;i++){
    console.log(i*valor);
} */

/* 
function verificarSigno() {
    let mesNascimento = document.getElementById('mesNascimento').value.toLowerCase();
    let mesesValidos = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    if (mesesValidos.includes(mesNascimento)) {
        switch (mesNascimento){
            case 'janeiro':
                alert('Você é capricorniano.');
                break;
            case 'fevereiro':
                alert('Você é aquariano ou pisciano. Para saber com certeza, consulte um astrólogo.');
                break;
            case 'março':
                alert('Você é pisciano ou ariano. Para saber com certeza, consulte um astrólogo.');
                break;
            case 'abril':
                alert('Você é ariano.');
                break;
            case 'maio':
                alert('Você é taurino.');
                break;
            case 'junho':
                alert('Você é geminiano.');
                break;
            case 'julho':
                alert('Você é canceriano.');
                break;
            case 'agosto':
                alert('Você é leonino.');
                break;
            case 'setembro':
                alert('Você é virginiano.');
                break;
            case 'outubro':
                alert('Você é libriano.');
                break;
            case 'novembro':
                alert('Você é escorpiano.');
                break;
            case 'dezembro':
                alert('Você é sagitariano.');
                break;
        } 
       
    } else {
        alert('Mês de nascimento inválido. Por favor, digite um mês válido.');
    }
};
 */

var palavra = `Doce de leite`;
//indices: 012345678

console.log(palavra.charAt(3)); //o charAt tira o valor que esta na posição indice 3, com isso podemos pegar este valor e armazenar em alguma variavel e poder usar depois.

console.log(palavra.length);//quantas letras tem a palavra por exemplo

console.log(palavra.indexOf(`e`));//retorna o indice que esta a letra e, por exemplo.

console.log(palavra.toUpperCase());
console.log(palavra.toLowerCase());

console.log(palavra.substring(0,3));// este corta a palavra ou numero

for (let i = 0; i < palavra.length; i++) {
   console.log(palavra[i]);    
}

console.log(palavra);
console.log(palavra.replace(`Doce`,`Chocolate`));