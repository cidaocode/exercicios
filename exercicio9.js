let prompt = require("prompt-sync")();

let numero1 = parseInt(prompt("Digite um numero "))
let numero2 = parseInt(prompt("Digite um numero "))
let numero3 = parseInt(prompt("Digite um numero "))
let numero4 = parseInt(prompt("Digite um numero "))
let numero5 = parseInt(prompt("Digite um numero "))

if (numero1 < numero2 && numero2< numero3 && numero3 < numero4 && numero4 < numero5) {
    console.log("verdadeiro")

} else {
    console.log("falso")


}
