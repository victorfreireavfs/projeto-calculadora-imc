// Seleciona o formulário e adiciona o evento de envio
// Esta função principal escuta o evento de 'submit' e processa os dados
document.querySelector('#formulario').addEventListener('submit', function(event){
    event.preventDefault()

    // Captura e converte os valores dos inputs para números de ponto flutuante
    const peso = parseFloat(document.querySelector('#peso').value);
    const altura = parseFloat(document.querySelector('#altura').value);
    
    // Valida se os valores são números positivos
    if(!isValidNumber(peso)){
    mostrarResultado('Peso inválido', false);
    return;
    }

    if(!isValidNumber(altura)){
    mostrarResultado('Altura inválida', false);
    return;
    }

      // Calcula o IMC e classifica o resultado
    const imc = calcularImc(peso,altura);
    const classifiacao = classificaImc(imc);
    mostrarResultado (`Seu IMC é ${imc} (${classifiacao})`, true)
});

// Função que verifica se o valor é um número positivo válido
function isValidNumber(valor){
    return typeof valor === 'number' && !isNaN(valor) && valor > 0;
}

// Função que calcula o IMC com duas casas decimais
function calcularImc(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}

// Função que classifica o IMC com base nos padrões da OMS
function classificaImc(imc){
    const valor = parseFloat(imc);
    if (valor >= 39.9) return 'Obesidade grau 3';
    if (valor >= 34.9) return 'Obesidade grau 2';
    if (valor >= 29.9) return 'Obesidade grau 1';
    if (valor >= 24.9) return 'Sobrepeso';
    if (valor >= 18.5) return 'Peso normal';
    return 'Abaixo do peso';
}

// Função que mostra a mensagem no HTML com o estilo apropriado
function mostrarResultado(mensagem, ehValido){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // limpa os resultados anteriores

    const paragrafo = document.createElement('p');
    paragrafo.textContent = mensagem;

    // Define a classe CSS com base na validade do resultado
    paragrafo.className = ehValido ? 'paragrafo-resultado' : 'mensagem-erro';
    resultado.appendChild(paragrafo);
}