//Exercício 28: Validador de Login com && Crie uma função autenticarUsuario(user, pass):
//Se user === "admin" E pass === "1234", retorne "Acesso Concedido".
//Caso contrário, retorne "Usuário ou senha incorretos".
function autenticarUsuario(user, pass) {
    if (user === "admin" && pass === "1234") {
        return "Acesso concedido"
    } else {
        return "Usuário ou senha incorretos"
    }
}
console.log(autenticarUsuario("admin", "1234"));