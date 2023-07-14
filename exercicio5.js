let prompt = require('prompt-sync')()

let variavel1 = parseInt(prompt("Digite a variavel se maior ou menor"))
let variavel2 = parseInt(prompt("Digite a variavel se maior ou menor"))

if(variavel1 > variavel2){
    console.log('A variavel1 e maior')

}else if(variavel2 > variavel1){
    console.log('A variavel2 e maior')

}else{
    console.log('As variaveis 1 e 2 sao iguais')
}