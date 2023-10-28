"use strict";
function pedidoPizza() {
    let valorPizza;
    let tamanhoPizzaExibicao;
    const exibirTamanho = `
        Escolha o tamanho da pizza:
        1 - Pequena (R$ 15,00)
        2 - Média (R$ 20,00)
        3 - Grande (R$ 25,00)
        `;
    alert(exibirTamanho);
    const tamanhoPizza = prompt("Digite o tamanho da pizza:");
    switch (tamanhoPizza) {
        case "1":
            tamanhoPizzaExibicao = "Pequena";
            valorPizza = 15;
            break;
        case "2":
            tamanhoPizzaExibicao = "Média";
            valorPizza = 20;
            break;
        case "3":
            tamanhoPizzaExibicao = "Grande";
            valorPizza = 25;
            break;
        default:
            console.log("Tamanho de pizza inválido.");
            return;
    }
    const pepperoniAdicional = prompt("Deseja Pepperoni adicional? (S/N)");
    if (pepperoniAdicional == "S") {
        if (tamanhoPizzaExibicao == "Pequena") {
            valorPizza += 2;
        }
        else {
            valorPizza += 3;
        }
    }
    const queijoExtra = prompt("Deseja queijo Extra? (S/N)");
    if (queijoExtra == "S") {
        valorPizza += 1;
    }
    const mensagem = `
   Pedido:
   Tamanho da pizza: ${tamanhoPizzaExibicao}
   Peperone adicional: ${pepperoniAdicional}
   Queijo Extra: ${queijoExtra}
   Valor total: R$ ${valorPizza}
    `;
    alert(mensagem);
}

pedidoPizza();
