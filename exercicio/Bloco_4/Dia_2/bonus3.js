let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicacao = []

for (index = 0; index < numeros.length; index++) {
    if (numeros[index + 1]) {
        multiplicacao.push(numeros[index] * numeros[index + 1]);
    } else {
        multiplicacao.push(numeros[index] * 2);
    }
}
console.log(multiplicacao)