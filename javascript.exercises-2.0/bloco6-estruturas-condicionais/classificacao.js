//Exercício 26: Classificação de Idades Crie uma função classificarPessoa(idade) que retorne:
//"Criança" se idade < 12
//"Adolescente" se idade estiver entre 12 e 17
//"Adulto" se idade >= 18
function classificarPessoa(idade) {
    if (idade < 12) {
        return "Criança"
    } else if (idade >= 12 && idade <= 17) {
        return "Adolescente" 
    } else {
        return "Adulto"
    }
}
console.log(classificarPessoa(19));