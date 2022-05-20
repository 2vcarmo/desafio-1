const calcular = document.getElementById('calcular');

function imc ()
{
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const idade = document.getElementById('idade').value;
    const sexo = document.getElementById('sexo').value;
    const resultado = document.getElementById('resultado');

    if (nome !== ' ' && altura !== ' ' && peso !== ' ')
    {
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let classificacao = "";

        if (valorIMC < 19.99)
        {
            classificacao = "Abaixo do peso ideal";
        } else if (valorIMC < 24.99){
            classificacao = "Peso ideal";
        } else if (valorIMC < 29.99){
            classificacao = "Excesso de peso";
        } else if (valorIMC < 35.99){
            classificacao = "Obesidade";
        } else if (valorIMC > 36){
            classificacao = "Super obesidade";
        } 

        resultado.textContent = (`${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`);
        

    } else {
        resultado.textContent = 'Preencha todos os campos';
    }
}

function pessoa()
{
    let categoria="";

    
    if (idade <= 12)
    {
        categoria = "infantil";
    } else (idade > 12 <= 20){
        categoria = "Juvenil";
    } else (idade > 20 <= 65){
        categoria = "Adulto";
    } else (idade > 65){
        categoria = "Idoso";
    } else {
        resultado.textContent = (`Categoria: ${categoria}`);
    }
}

calcular.addEventListener('click', imc);
