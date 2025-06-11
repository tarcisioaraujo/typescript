"use strict";
exports.__esModule = true;
var veiculo_class_1 = require("./classes/veiculo-class");
var moto_class_1 = require("./classes/moto-class");
var camaro = new veiculo_class_1.Veiculo('Camaro');
var honda = new moto_class_1.Moto("Honda");
console.log(honda.getTitulo());
document.getElementById('nomeMoto').innerHTML = honda.getTitulo();
