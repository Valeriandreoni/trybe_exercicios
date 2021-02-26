let numeros = [23, 6, 7, 8, 3, 1, 4, 9, 2, 28, 31]
for (let index = 1; index < numeros.length; index++) {
    for (let contador = 0; contador < index; contador++) {
        if (numeros[index] < numeros[contador]) {
            let posicao = numeros[index];

            numeros[index] = numeros[contador];
            numeros[contador] = posicao
        }

    }


}
console.log(numeros)