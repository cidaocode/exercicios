// Operadores lógicos
// OU (||)
// true || true = true
// true || false = true
//false || 
//E     (&&)
// NÁO  (!)

// E ()


// NÁO (!)
// !true = false

//true && false =false
//Quero validar se o número digitado pelo usuário
//Está no intervalo entre 10 a 20
let prompt = require('prompt-sync')( );
let numero = parseInt(prompt("Digite um número"));

if(número >= 10 && número <=20){
    console.log("O número informado está no intervalo desejado,entre 10 e 20")
}else{
    console.log("O número está fora do intervalo desejado !!!!!!!!!" )
}
