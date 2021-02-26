let megaSena = [];

let num1 = Math.ceil(Math.random() * 60);
let num2 = Math.ceil(Math.random() * 60);
let num3 = Math.ceil(Math.random() * 60);
let num4 = Math.ceil(Math.random() * 60);
let num5 = Math.ceil(Math.random() * 60);
let num6 = Math.ceil(Math.random() * 60);

megaSena = [num1, num2, num3, num4, num5, num6];
let numerosorteado = [20, 40, 35, 9, 17, 52]
let numerosacertados = 0

for (let index = 0; index < megaSena.length; index++) {
    for (let index2 = 0; index2 < numerosorteado.length; index2++) {
        if (megaSena[index] === numerosorteado[index2]) {
            numerosacertados++

        }

    }
}
console.log(megaSena);
console.log(numerosorteado)
console.log(numerosacertados)