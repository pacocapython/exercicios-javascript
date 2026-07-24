//Exercício 04: Operadores Lógicos (&& e ||) Crie as variáveis temCarteira = true, maiorDeIdade = true e temCarro = false.
//Crie uma verificação que resulte em true apenas se a pessoa for maior de idade E tiver carteira.
//Crie outra verificação que resulte em true se a pessoa tiver carro OU tiver carteira.
const temCarteira = true;
const maiorDeIdade = true;
const temCarro = false;
if (maiorDeIdade && temCarteira) {
    console.log(true)
} else {
    console.log(false)
}
if (temCarro || temCarteira) {
    console.log(true)
} else {
    console.log(false)
}