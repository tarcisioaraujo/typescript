let linguagem:string = 'Typescript';
let texto:string = `Olá ${ linguagem }`;
let idade:number = 20;

linguagem = '60';

let getPerfil = function(nome:string,idade:number,email:string):void{
  console.log(nome,idade,email);
};

function getIdade(idade):string{
  return idade + " anos";
}

//let retornaPerfil = (nome:string,idade:number,email:string):void => console.log(nome,idade,email);

let retornaPerfil = (nome:string,idade:number,email:string):void => {
  nome = nome.toUpperCase();
  console.log(nome,idade,email);
};

//getPerfil(543,54,"gui@mail.com");
//let idadeAnos:number = getIdade(45);

console.log(texto,idade);
