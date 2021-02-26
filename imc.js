const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;    
    const  resultado = document.getElementById('resultado');

    if (nome.value !== '' && altura.value !== '' && peso.value !== ''){
        

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';
        if (valorIMC < 18.5){
            classificacao = 'Abaixo do peso.';
        }else if(valorIMC < 25){
            classificacao = 'com opeso ideal. Parabens';
        } else if(valorIMC < 30){
            classificacao = 'levemente acima do peso';
        }else if(valorIMC < 35){
            classificacao = 'obesidade grau I.';
        }else if(valorIMC < 40){
            classificacao = 'obesidade grau II'
        }else {
            classificacao = 'Obesidade grau III. CUIDADO!!!';
        }
        

        resultado.textContent = `${nome} seu IMC é de ${valorIMC} e você está ${classificacao}`;
        
    }else{
        resultado.textContent = 'Preencha todos os campos!!!!';
    }


}

calcular.addEventListener('click', imc);