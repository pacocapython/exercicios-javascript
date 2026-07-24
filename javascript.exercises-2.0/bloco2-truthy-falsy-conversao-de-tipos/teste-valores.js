//Exercício 06: Testando Valores Falsy Crie uma variável let ponto = 0. Coloque essa variável dentro de um if (ponto).
// Se rodar como verdadeiro, imprima "Tem pontos", senão imprima "Sem pontos". Teste depois trocando o valor para "" 
// (string vazia), null e undefined.
let ponto 
if (ponto) {
    console.log("Tem pontos")
} else {
    console.log("Sem pontos")
}
//quando colocados em if, todos esses valores (0,"",null,undefined) ele identifica como falsy.