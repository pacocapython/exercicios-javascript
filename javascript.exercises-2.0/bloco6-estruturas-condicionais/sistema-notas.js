//Exercício 27: Sistema de Notas (A, B, C, D) Crie uma função avaliarDesempenho(nota) que receba um número de 0 a 10:
//Nota >= 9: "Excelente"
//Nota >= 7: "Bom"
//Nota >= 5: "Razoável"
//Nota < 5: "Insuficiente"
function avaliarDesempenho(nota) {
    if (nota >= 9) {
        return "Excelente" 
    } else if (nota >=7) {
        return "Bom"
    } else if (nota >=5) {
        return "Razoável"
    } else {
        return "insuficiente"
    }
}
console.log(avaliarDesempenho(Math.random() * 10))