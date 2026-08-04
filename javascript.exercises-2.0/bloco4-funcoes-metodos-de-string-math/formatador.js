//Exercício 18: Formatador de Usuário Crie uma função limparNome(nomeSujo) que receba um texto com espaços 
// no começo/fim e letras misturadas (ex: "  cArLoS  "). A função deve retornar o texto sem espaços (.trim()) 
// e todo em minúsculas (.toLowerCase()).
function limparNome(nomeSujo) {
    return nomeSujo.trim().toLowerCase();
}
console.log(limparNome(" GaBrIeL  "))
