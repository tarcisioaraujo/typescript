var linguagem = 'Typescript';
var texto = "Ol\u00E1 " + linguagem;
var idade = 20;
linguagem = '60';
var getPerfil = function (nome, idade, email) {
    console.log(nome, idade, email);
};
function getIdade(idade) {
    return idade + " anos";
}
getPerfil(543, 54, "tarc@mail.com");
var idadeAnos = getIdade(45);
console.log(texto, idade);
