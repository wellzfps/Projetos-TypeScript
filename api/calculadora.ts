function adicao(valor1: number, valor2: number){
    return valor1 + valor2
}

function subtracao( valor1: number, valor2: number){
    return valor1 - valor2
}

function multiplicacao( valor1: number, valor2: number){
    return valor1 * valor2
}

function divisao ( valor1: number, valor2: number){
    return valor1 / valor2
}

let escolha: number = 3

switch (escolha) {
    case 1:
        console.log(adicao(20, 25));
        break;

    case 2:
        console.log(subtracao(25, 45))
        break;
    case 3: 
        console.log(multiplicacao(50, 5))
        break;
    case 4:
        console.log(divisao(50, 3))
        break

    default:
        break;
}