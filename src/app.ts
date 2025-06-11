import { Veiculo } from './classes/veiculo-class';
import { Moto } from './classes/moto-class';

let camaro:Veiculo = new Veiculo('Camaro');

let honda:Moto = new Moto("Honda");

console.log(honda.getTitulo());
document.getElementById('nomeMoto').innerHTML = honda.getTitulo();
