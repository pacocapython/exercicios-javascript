//Exercício 17: Gerador de Sorteio (1 a 100) Crie uma função sortearPessoa() que não recebe parâmetros. Ela deve gerar e 
// retornar um número inteiro aleatório entre 1 e 100 usando Math.random() e Math.floor().
function sortearPessoa() {
    const numeroSorteado = Math.floor(Math.random()* 100) + 1;
    return numeroSorteado;
}
console.log(sortearPessoa());

//Math.floor(Math.random() * 100) + 1;
// Math.random() cria o decimal aleatório.
// * 100 ajusta o tamanho da escala.
// Math.floor() limpa a vírgula (deixa inteiro).
// + 1 ajusta o início do sorteio para $1$.