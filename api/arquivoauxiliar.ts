// Função principal da calculadora

function calculadora(){
    // Solicitar ao usuário os dois números.
    
    const primeiroNumero = Number(prompt("informe o primeiro número: "));
    const segundoNumero = Number(prompt("informe o segundo número: "));
    
    // Solicitar ao usuário a operação desejada
    
    const operacao = prompt("Qual operação deseja realizar? (soma, subtração, multiplicação ou divisão: ")
    
    
    // Realizar a operação de escolha do usuário.
    
    
    switch(operacao){
        case "+":
            return primeiroNumero + segundoNumero
            break;
        case "-":
            return primeiroNumero - segundoNumero
            break;
        case "*":
            return primeiroNumero * segundoNumero
            break;
        case "/":
            return primeiroNumero / segundoNumero
            break;
        default: 
            return "Operação inválida!"
    }
    
    }
    
    
    // Chamar a função principal calculadora()
    
    const resultado = calculadora()
    
    
    // Exibir o resultado da operação
    
    alert(resultado);