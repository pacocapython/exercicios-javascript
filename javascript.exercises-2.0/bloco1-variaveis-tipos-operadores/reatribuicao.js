//Exercício 03: Testando Reatribuição Declare uma variável let saldo = 50 e em seguida mude o valor dela para 100. 
// Depois, declare const id = 1 e tente mudar o valor para 2. Roda no terminal e observe a mensagem de erro que o const
// gera ao tentar reatribuir.
let saldo = 50;
saldo = 100;
const id = 1;
id = 2;
console.log(saldo, id)
// da erro porque const nao pode ser alterada, let pode