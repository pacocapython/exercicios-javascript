//Exercício 16: Arredondamento para Cima e Baixo Crie uma função tradicional analisarNumero(num) que receba um decimal
// (ex: 4.7). Ela deve imprimir dois resultados no terminal: um usando Math.ceil(num) e outro usando Math.floor(num).
function analisarNumero(num) {
console.log(Math.ceil(num));
console.log(Math.floor(num));
}
analisarNumero(4.7);

// console.log dentro da função para acessar o parâmetro 'num' e passar o valor ao chamar a função analisarNumero(4.7)