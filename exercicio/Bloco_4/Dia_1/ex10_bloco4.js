let custo = 14
let valorVenda = 30




if (custo >= 0 && valorVenda >= 0) {
    let valorDoImposto = 0.2 * custo;
    let custotTotal = custo + valorDoImposto;
    let lucro = valorVenda - custotTotal;
    console.log("Custo total:" + custotTotal);
    console.log("Lucro:" + lucro);
} else {
    console.log("Erro, os números não podem ser negativos!")
}