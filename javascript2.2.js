let prompt=require("prompt-sync")();

let animal = prompt("Digite o nome do animal para saber o que ele tem a dizer: ")

switch (animal) {
    case 'cachorro':
        console.log("au auuuuuuuu")
        break;
    case 'gato':
        console.log("miauuuuuu")
        break;
    case "vaca":
        console.log("muuuuuuuuu")
        break;
    case 'papagaio':
        console.log("Voce foi a culpa desse amor de acabar...")
        console.log("https://www.youtube.com/watch?v=wAs_kCFSiL0")
        break;
    default:
        console.log("Conheçooo não")
        break;


}