let prompt = require("prompt-sync")();

let nome = prompt("Digite aqui o nome do funcionario:")

let cargo = prompt("Digite aqui o cargo do funcionario:")

let salario = parseFloat(prompt("Digite aqui o salario:"))

if (salario < 1000) {
    //salario = conta fica  dessa forma*1.1
    //salario = salario * 1.1
    let desconto = (salario * 10)/ 100
    let resultado = desconto + salario;
    console.log("Seu nome" + nome)
    console.log("Seu cargo" + cargo)
    console.log("Seu salario" + resultado )
   // console.log('salario')
}


