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
//let retornaPerfil = (nome:string,idade:number,email:string):void => console.log(nome,idade,email);
var retornaPerfil = function (nome, idade, email) {
    nome = nome.toUpperCase();
    console.log(nome, idade, email);
};
//getPerfil(543,54,"gui@mail.com");
//let idadeAnos:number = getIdade(45);
console.log(texto, idade);
