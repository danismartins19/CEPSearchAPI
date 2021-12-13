let wait = document.querySelector('.wait');
let resultado = document.querySelector('.resultado');

document.getElementById('search').addEventListener('click', ()=>{
    let valueCEP = document.getElementById('CEPValue').value;

   if(valueCEP !== ''){
        let CEPFormated = valueCEP.replace(/[.-]/g,"");
        searchCEP(CEPFormated);
    }else{
        wait.innerHTML = 'Digite um CEP...';
        wait.style.display = 'block';
        resultado.style.display = 'none';
    }
})


const searchCEP = async (cep) =>{
    wait.innerHTML = 'Carregando...';
    wait.style.display = 'block';
    resultado.style.display = 'none';

    let busca = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let result = await busca.json();
    if(result !== null){
        wait.style.display = 'none';
        resultado.style.display = 'block';

        document.querySelector('.cidade').innerHTML = result.localidade;
        document.querySelector('.estado').innerHTML = result.uf;
        document.querySelector('.cep').innerHTML = result.cep;
        document.querySelector('.ibge').innerHTML = result.ibge;

    }
}