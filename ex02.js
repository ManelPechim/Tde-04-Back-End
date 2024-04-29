function somaPromise(a, b){

    return new Promise((resolve, reject) => {

    const soma = a + b;

    console.log("Soma: " + soma)

    if(soma % 2 === 0){
        resolve(soma)
    } else {
        reject(soma)
    }

})
 
}

somaPromise(1, 3)

.then(soma => {
    console.log("Sucesso, resultado par: " + soma)
})
.catch(soma => {
    console.log("Falha, resultado impar: " + soma)
})