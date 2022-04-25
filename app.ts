let linguagem:string = 'Typescript';
let texto:string = `Olá ${ linguagem }`;
let idade:number = 42;

linguagem = '19';

let getPerfil = function(nome:string, idade:number, email:string):void {
    console.log(nome, idade, email);
}

function getIdade(idade):string {
    return idade + " anos";
}

getPerfil("231", 32, "teste@gmail.com");

let idadeAnos:string = getIdade(42);

console.log(texto, idade);
