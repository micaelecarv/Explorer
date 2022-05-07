// Bora praticar e rever tudo o que foi ensinado na aula? **💜**
// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

// - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

let numeroA = prompt('Insira um número: ');
let numeroB = prompt('Insira outro número: ');

numeroA = Number(numeroA)
numeroB = Number(numeroB)

console.log(numeroA, numeroB)

const soma = numeroA + numeroB
const subtracao = numeroA - numeroB;
const multiplicacao = numeroA * numeroB;
const divisao = numeroA / numeroB;
const restoDivisao = numeroA % numeroB;


alert('O resultado da soma é ' + soma);
alert('O resultado da subtração é ' + subtracao);
alert('O resultado da multiplicação é ' + multiplicacao);
alert('O resultado da divisão é ' + divisao);
alert('O resultado do resto da divisão é ' + restoDivisao);

if(restoDivisao == 0){
  alert('O número é par')
} else{
  alert('O número é ímpar')
}

if(numeroA !== numeroB) {
  alert('Os números são diferentes')
} else {
  alert('Os números são iguais')
}
