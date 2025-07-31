// Seleciona o formulário pelo ID
const formulario = document.getElementById('formulario');

// Adiciona um ouvinte de evento para o envio do formulário
formulario.addEventListener('submit', function (evento){
    evento.preventDefault(); // Impede o padrão de recarregar a página
    calcular(); // Chama a função que faz o cálculo do IMC
});

// Função que calcula o IMC e exibe o resultado
function calcular(){
    // Pega o valor do peso e da altura digitados, e converte para número decimal (float)
    const peso = parseFloat(document.getElementById('input-peso').value);
    const altura = parseFloat(document.getElementById('input-altura').value);
    const resultado = document.getElementById('resultado-imc'); // Elemento onde será exibido o resultado
    
    // Valida se os valores são válidos (números maiores que zero)
    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)){
        resultado.textContent = 'Digite os valores nos campos corretamente!'; // Mensagem de erro
        resultado.className = ''; // Remove qualquer classe anterior
        resultado.classList.add('resultado-erro'); // Adiciona estilo de erro (vermelho claro)
        return; // Interrompe a função se os dados forem inválidos
    }

    // Faz o cálculo do IMC: peso dividido pela altura ao quadrado
    const calculo = peso / (altura ** 2);
    let classificacao = ''; // Variável para guardar a mensagem correspondente ao resultado
    resultado.className = ''; // Limpa classes anteriores antes de aplicar a nova

    // Verifica em qual faixa o resultado do IMC se encaixa e define a mensagem e a classe de estilo
    if (calculo < 18.5){
        classificacao = 'Você está abaixo do peso';
        resultado.classList.add('resultado-abaixo');
    }
    else if (calculo < 24.9){
        classificacao = 'Você está com o peso normal';
        resultado.classList.add('resultado-normal');
    }
    else if (calculo < 29.9){
        classificacao = 'Você está com sobrepeso';
        resultado.classList.add('resultado-sobrepeso');
    }
    else if (calculo < 34.9){
        classificacao = 'Você está com obesidade grau 1';
        resultado.classList.add('resultado-obesidade1');
    }
    else if (calculo < 39.9){
        classificacao = 'Você está com obesidade grau 2';
        resultado.classList.add('resultado-obesidade2');
    }
    else {
        classificacao = 'Você está com obesidade grau 3';
        resultado.classList.add('resultado-obesidade3');
    }

    // Exibe o resultado formatado com 2 casas decimais + a mensagem da classificação
    resultado.innerText = `Seu IMC é ${calculo.toFixed(2)}, ${classificacao}`;
}
