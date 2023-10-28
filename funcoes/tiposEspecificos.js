"use strict";
// Array com implementação igual ao JS.
let hobbies = ["Ler", "Filmes", "Games"];
console.log(hobbies);
console.log(typeof hobbies);
// Implementação exclusiva do TS.
let contato = ['Paulo', 'psilva@gmail.com', 1121211212, true];
console.log(contato);
console.log(typeof contato);
// Implementação de um array controlado
// Implementação de uma Tupla
let endereco = ['Av. Garça torta', 7715, 'Zona Rural'];
console.log(endereco);
//Implementação de um Enum (Lista de tipo)
var semaforo;
(function (semaforo) {
    semaforo[semaforo["Verde"] = 100] = "Verde";
    semaforo[semaforo["Amarelo"] = 500] = "Amarelo";
    semaforo[semaforo["Vermelho"] = 250] = "Vermelho";
})(semaforo || (semaforo = {}));
const siga = semaforo.Verde;
const atencao = semaforo.Amarelo;
const pare = semaforo.Vermelho;
console.log(siga);
console.log(atencao);
console.log(pare);
console.log(typeof semaforo);
