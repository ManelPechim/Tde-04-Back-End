function resultadoSoma(a, b){

    const soma = a + b;

    console.log("Soma: " + soma)

    if(soma % 2 === 0){
        callbackSucesso(soma)

    } else {
        callBackError(soma)
    }

}

function callbackSucesso(callSucesso){

    console.log("O resultado eh par, logo, sucesso: " + callSucesso)

}

function callBackError(callError){

    console.log("O resultado eh impar, logo, erro: " + callError)
    
}

resultadoSoma(1, 3)
