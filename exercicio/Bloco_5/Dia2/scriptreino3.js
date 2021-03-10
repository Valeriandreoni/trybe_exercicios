function colorizar() {
    let color = document.querySelector("#elementoOndeVoceEsta").parentNode

    color.style.color = "red";
}
colorizar();

function addtext() {
    let texto = document.querySelector("#pai").firstElementChild
    texto.innerText = "Ola"
}
addtext();

function retornaAntes() {
    let retornar = document.querySelector("#elementoOndeVoceEsta").previousElementSibling
    console.log(retornar)
}
retornaAntes()

function acessandoTexto() {
    let vamosAcessar = document.querySelector("#elementoOndeVoceEsta").nextSibling
    console.log(vamosAcessar);
}
acessandoTexto();

function terFilho() {
    let terceirofilho = document.querySelector("#elementoOndeVoceEsta").nextElementSibling;
    console.log(terceirofilho)
}
terFilho();

function terfilhopai() {
    let filhoterpai = document.querySelector("#pai").lastElementChild.previousElementSibling;
    console.log(filhoterpai);
}
terfilhopai();

function criandoelemento() {
    let paidoelementonovo = document.querySelector("#pai");
    let elementonovo = document.createElement("div");

    elementonovo.innerText = "criando elemento novo";
    paidoelementonovo.appendChild(elementonovo);

}
criandoelemento();

function criandoelementofilho() {
    let paiOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta");
    let elementofilho = document.createElement("span")
    elementofilho.innerText = "Criando filho do onde voce esta";
    paiOndeVoceEsta.appendChild(elementofilho);

}
criandoelementofilho();

function filhodofilho() {
    let filhoPai = document.querySelector("#primeiroFilhoDoFilho");
    let filhotres = document.createElement("p");
    filhotres.innerText = "Filho do primeiro filho do filho";
    filhoPai.appendChild(filhotres);

}
filhodofilho();

function acessandoterfilhodofilho() {
    let acessar = document.querySelector("p").parentNode.parentNode.nextElementSibling;

    console.log(acessar + "acessando o terceiro filho pelo filho do filho do filho");
}
acessandoterfilhodofilho();

function removendotudo (){
    let removeparagrafo=document.getElementsByTagName("p")[0];
    removeparagrafo.className = "removep";
    let removedor = document.querySelector("#primeiroFilhoDoFilho");
    removedor.removeChild(removeparagrafo);
  
}removendotudo();

function removendo2(){
    let removedor = document.getElementsByTagName("span")[0];
    let removedorpai =document.querySelector("#elementoOndeVoceEsta");
    removedorpai.removeChild(removedor);
}removendo2();
function removendo3(){
    let removedor = document.getElementsByTagName("div")[8]
    removedor.className="removedor"
    let removedorfilho=document.querySelector("#primeiroFilho");
    let removedorpai =document.querySelector("#pai");
    removedorpai.removeChild(removedor);
    removedorpai.removeChild(removedorfilho)
}removendo3();
function removendo4(){
    let removedor = document.querySelector("#terceiroFilho")
    let removedor2 = document.querySelector("#quartoEUltimoFilho")
    let removedorpai =document.querySelector("#pai");
    removedorpai.removeChild(removedor);
    removedorpai.removeChild(removedor2);
   
}removendo4();
function removendo5(){

    let removedor = document.querySelector("#segundoEUltimoFilhoDoFilho")
    let removedorpai =document.querySelector("#elementoOndeVoceEsta");
    removedorpai.removeChild(removedor);
}removendo5();