//1 . Receber 4 notas
//2 . Calcular a media das notas
//3 . Imprimir a media
//4 . Classificar a media
//
//Se a media maior ou igual a 7= mostrar msn APROVADO
//Se nao a media menor que 7 e media maior ou igual 5
let prompt = require('prompt-sync')()
//1 . Receber 4 notas

let Nota1 = parseFloat(prompt("Digite a primeira nota: "))
let Nota2 = parseFloat(prompt("Digite a segunda nota: "))
let Nota3 = parseFloat(prompt("Digite a terceira nota: "))
let Nota4 = parseFloat(prompt("Digite a quarta nota: "))

let media = (Nota1 + Nota2 +
    Nota3 +
    Nota4) / 4;


if (media >= 7) {
    console.log("APROVADO")
} else if (media < 7 && media >= 5){
    console.log("RECUPERACAO")
}else {
    console.log("APROVADO")
}
