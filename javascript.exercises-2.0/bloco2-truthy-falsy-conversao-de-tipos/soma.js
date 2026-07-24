//Exercício 07: Somando Strings e Números Crie duas variáveis: const num1 = "20" e const num2 = "30".//
//Imprima no console a soma direta das duas (num1 + num2).
//Em seguida, use Number() para converter ambas e exiba a soma matemática real das duas.
const num1 = "20";
const num2 = "30";
console.log(num1+num2);
console.log(Number(num1)+Number(num2));
//quando sao duas strings, mesmo que o valor seja de numeros, como o tipo é strins(""), o javascript entende como strings
// e concatena, agora o Number(), ele transforma qualquer tipo em numero, dai a soma sai certa