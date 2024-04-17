 
 var numeroLimite = 9;
    function corImpar(){
        var caixa = document.getElementById('caixa')
        caixa.style.backgroundColor = '#FF0000'
        }

 function corPar() {
    var caixa = document.getElementById('caixa')
        caixa.style.backgroundColor = '#0000FF'
 }

function sortear() {
     numeroAleaorio = parseInt(Math.random() * numeroLimite + 1);
    document.getElementById('numeroselecionado').innerHTML = numeroAleaorio;

    if(numeroAleaorio == 0) {
        corPar();
    } else if(numeroAleaorio == 1) {
        corImpar();
    } else if (numeroAleaorio == 2) {
        corPar();
    } else if(numeroAleaorio == 3) {
        corImpar();
    } else if (numeroAleaorio == 4) {
        corPar();
    } else if (numeroAleaorio == 5) {
        corImpar();
    } else if (numeroAleaorio == 6) {
        corPar();
    } else if (numeroAleaorio == 7) {
        corImpar();
    } else if (numeroAleaorio == 8) {
        corPar();
    } else if (numeroAleaorio == 9) {
        corImpar();
    }
    }

function limpar() {
    document.getElementById('numeroselecionado').textContent = '';
    var caixa = document.getElementById('caixa')
    caixa.style.backgroundColor = '#e96500'
    }

    