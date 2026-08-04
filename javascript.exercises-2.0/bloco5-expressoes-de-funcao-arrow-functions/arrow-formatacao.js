//Exercício 24: Arrow Function de Formatação de Preço Crie uma Arrow Function em uma linha chamada
//  formatarPreco que receba um número e retorne a frase: "R$ [numero]".
const formatarPreco = numero => `R$ ${numero}`;
console.log(formatarPreco(170));
console.log(formatarPreco(29.9));