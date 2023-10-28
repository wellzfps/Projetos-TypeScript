"use strict";
function pedido() {
    const tamanho = prompt("Informe o tamanho da pizza: P - Pequena M - Média, G - Grande");
    const pepperoniAdicional = prompt("Deseja pepperoni? ");
    const queijoExtra = prompt("Deseja queijo extra? ");
    let precoPizza;
    switch (tamanho) {
        case "P":
            precoPizza = 15.00;
            return precoPizza;
        case "M":
            precoPizza = 20.00;
            return precoPizza;
        case "G":
            precoPizza = 25.00;
            return precoPizza;
        default:
            return "Escolha 'P' 'M' OU 'G' ";
    }
    if (pepperoniAdicional == "sim" || "S") {
        precoPizza += 3;
    }
    if (queijoExtra == "sim" || "S") {
        precoPizza += 1;
    }
    console.log("Tamanho: " + tamanho);
    console.log("Pepperoni adicional?: " + pepperoniAdicional);
    console.log("Queijo extra?: " + queijoExtra);
    console.log("O valor do seu pedido é: ");
}
const interacao = pedido();
alert(interacao);
