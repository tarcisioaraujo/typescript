let nome:string = "Ana";
let idade:number = 19;
let eMaior:boolean;

if(idade > 17){
  eMaior = true;
}else{
  eMaior = false;
}

let lista:string[] = ["verde","azul"];
let listaNumeros:Array<number> = [76,74,37];

enum Cor {vermelho=2,azul,laranja};

let c:Cor = Cor.azul;

console.log(c);
console.log(Cor[4]);

let aux:any;
aux = "teste";
aux = 43;
aux = [43,34];

let arrayAny:any[] = [43,"teste",{}];

function listaNomes(lista:string[]):void{
  console.log(lista);
}
