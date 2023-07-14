let prompt = require('prompt-sync')()
let usuario = prompt("Digite o nome de usuario")
let login = prompt("Digite aqui sua senha")

if(usuario == "admin" && login == "senha123") {
    console.log("Usuario adimin permitido:")

}else {
    console.log("You shall not pass!!!!")
    console.log("Voce náo passara!!!!!")
}