let prompt = require('prompt-sync')()
let variavel = parseInt(prompt("Digite a variavel par ou impar"))

if ( variavel % 2 == 0) {
    console.log('Esse numero e par')
}else{
    console.log('Esse numero e impar')
}