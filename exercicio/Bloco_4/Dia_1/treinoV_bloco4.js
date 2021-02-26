let situacao = "Aprovada"
switch (situacao) {
    case "Aprovada":
        console.log("Parabéns")
        break;
    case "Lista":
        console.log("Aguarde para ser chamada")
        break;
    case "Reprovada":
        console.log("Tente uma proxima vez")
        break;
    default:
        console.log("Não se aplica")
}