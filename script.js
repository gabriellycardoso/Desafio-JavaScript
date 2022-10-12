var select = document.querySelector ("#opcao") 
var valor;
var mensagem = document.querySelector (".texto01")
var nome = document.querySelector ("#Nick")

troca_dificuldade = () =>{
    mensagem.innerHTML = '<p>' + 'Olá ' + nome.value + ', vamos jogar! De acordo com a opção de intervalo que você escolheu, descubra o número.'

    if(select.value == "1"){
        valor = Math.floor(Math.random() * 10)
        console.log(valor);
    }

    else if(select.value == "2"){
        valor = Math.floor(Math.random() * 100)
        console.log(valor);
    }

    else{
        valor = Math.floor(Math.random() * 200)
        console.log(valor);
    }
}

var comparação;
var valor_que_escolher = document.querySelector("#numero");

jogar = () => {
    if (valor_que_escolher == valor ){
        alert ('parabens, voce acertou')
    }

    else if(valor_que_escolher > valor){
        alert('numero maior')
    }

    else{
        alert('numero menor')
    }
}