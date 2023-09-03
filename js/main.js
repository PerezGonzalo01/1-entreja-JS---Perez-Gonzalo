function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(4, 6); 
console.log(resultado);

console.log("-------------------");

let hora = prompt("Que hora es en tu país?");

if (hora < 12) {
console.log("Haz puesto que son las: " + hora + "hs, Buenos días");
} else if (hora < 18) {
console.log("Haz puesto que son las: " + hora + "hs, Buenas tardes");
} else {
console.log("Haz puesto que son las: " + hora + "hs, Buenas noches");
}

console.log("-------------------");



