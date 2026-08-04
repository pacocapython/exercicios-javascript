//Exercício 30: Calculadora Operacional Crie uma função calculadora(a, b, operacao) onde operacao pode ser
//  "+", "-", "*" ou "/". Use blocos if / else if para verificar qual foi a operação passada e
//  retornar o resultado da conta correspondente.
function calculadora(a, b, operacao) {
    if (operacao === "+") {
        return a + b
    } else if (operacao === "-") {
        return a - b
    } else if (operacao === "*") {
        return a * b
    } else if (operacao === "/") {
        return a / b
    }
}
console.log(calculadora(2, 7, "+"))