//Exercício 22: Provando o Hoisting na Prática No seu arquivo, chame a função minhaFuncao() na linha 1. 
// Na linha 3, declare ela como uma Expressão de Função (const minhaFuncao = function()...). 
// Execute no Node e veja o erro de ReferenceError acontecer devido ao Hoisting.
console.log(minhaFuncao())

const minhaFuncao = function(numero) {
    return numero
}

/**
 * HOISTING (ELEVAÇÃO)
 * * - Funções tradicionais (function minharFuncao() {}) sobem para o topo e funcionam antes de serem declaradas.
 * - Expressões de Função (const minhaFuncao = function() {}) NÃO sobem!
 * - Chamá-las antes da declaração gera: ReferenceError.
 */