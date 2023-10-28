// Array com implementação igual ao JS.

let hobbies: string[] = ["Ler", "Filmes", "Games"];
console.log(hobbies);
console.log(typeof hobbies)

// Implementação exclusiva do TS.

let contato: any[] = ['Paulo', 'psilva@gmail.com', 1121211212, true];
console.log(contato);
console.log(typeof contato);


// Implementação de um array controlado
// Implementação de uma Tupla


let endereco: [string, number, string] = ['Av. Garça torta', 7715, 'Zona Rural']
console.log(endereco);

//Implementação de um Enum (Lista de tipo)

enum semaforo{
    Verde = 100,
    Amarelo = 500,
    Vermelho = 250
}

const siga: semaforo = semaforo.Verde;
const atencao: semaforo = semaforo.Amarelo;
const pare: semaforo = semaforo.Vermelho;


console.log(siga)
console.log(atencao)
console.log(pare)

console.log(typeof semaforo)