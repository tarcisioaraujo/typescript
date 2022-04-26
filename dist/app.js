var linguagem = 'Typescript';
var texto = "Ol\u00E1 ".concat(linguagem);
var idade = 42;
linguagem = '19';
var getPerfil = function (nome, idade, email) {
    console.log(nome, idade, email);
};
function getIdade(idade) {
    return idade + " anos";
}
// getPerfil("231", 32, "teste@gmail.com");
// let idadeAnos:string = getIdade(42);
var retornaPerfil = function (nome, idade, email) {
    nome = nome.toUpperCase();
    console.log(nome, idade, email);
};
console.log(texto, idade);
