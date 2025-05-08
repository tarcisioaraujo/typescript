var nome = "Ana";
var idade = 19;
var eMaior;
if (idade > 17) {
    eMaior = true;
}
else {
    eMaior = false;
}
var lista = ["verde", "azul"];
var listaNumeros = [76, 74, 37];
var Cor;
(function (Cor) {
    Cor[Cor["vermelho"] = 2] = "vermelho";
    Cor[Cor["azul"] = 3] = "azul";
    Cor[Cor["laranja"] = 4] = "laranja";
})(Cor || (Cor = {}));
;
var c = Cor.azul;
console.log(c);
console.log(Cor[4]);
var aux;
aux = "teste";
aux = 43;
aux = [43, 34];
var arrayAny = [43, "teste", {}];
function listaNomes(lista) {
    console.log(lista);
}
