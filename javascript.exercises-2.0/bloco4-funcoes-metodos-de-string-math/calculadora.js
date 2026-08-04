//Exercício 20: Calculadora de Média Escolar Crie uma função calcularMedia(n1, n2, n3) que receba três notas, calcule 
// a média aritmética entre elas e retorne o valor formatado.
function calcularMedia(n1, n2, n3) {
    return ((n1+n2+n3)/3).toFixed(2);
}
console.log(calcularMedia(1, 2, 3));

//quando falamos de receber tres notas como no exemplo, elas devem ser declaradas fora dda função, como nestes consoles.log
// e chamar o nome da função quando for imprimir estes valores
/**
.toFixed()
1. Arredonda o número para 2 casas decimais (ex: 6.666 -> "6.67").
2. Preenche com zeros se necessário (ex: 2 -> "2.00").
3. Transforma o resultado final em String (texto).
 */