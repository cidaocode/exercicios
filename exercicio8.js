let prompt = require('prompt-sync')()
let dia = prompt("Digite o dia da semana aqui entre 1 a 7:")

switch (dia) {

    case '1':
        console.log("segunda-feira")
    case '2':
        console.log("terca-feira")
        break;
    case '3':
        console.log("quarta-feira")
        break;
    case '4':
        console.log("quinta-feira")
        break;
    case '5':
        console.log("sexta-feira")
        break
    case '6':
        console.log("sabado")
        break;
    case '7':
        console.log("domingo")
        break;
    default:
        console.log("Esse numero nao corresponde ao dia da semana")
}

