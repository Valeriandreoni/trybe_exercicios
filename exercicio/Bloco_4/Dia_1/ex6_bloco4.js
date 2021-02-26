let peca = "Rainha"

switch (peca.toLowerCase()) {
    case "rei":
        console.log("Rei -> Anda uma casa para todos os lados ");
        break;
    case "cavalo":
        console.log("Cavalo -> Anda em L, e pula sobre as peças que estiverem no caminho");
        break;
    case "torre":
        console.log("Torre -> Anda na horizontal e vertical");
        break;
    case "rainha":
        console.log("Rainha -> Anda quantas casas quiser para todos os lados");
        break;
    case "bispo":
        console.log("Bispo -> Anda na diagonal");
        break;
    case "peão":
        console.log("Peão-> Anda somente uma casa para frente, e na primeiro movimento pode andar duas casas");
        break;
    default:
        console.log("ERRO! Peça não existe!");
        break;
}