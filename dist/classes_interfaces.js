var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veiculo = /** @class */ (function () {
    function Veiculo(titulo, rodas) {
        if (titulo === void 0) { titulo = "Nome Carro"; }
        if (rodas === void 0) { rodas = 2; }
        this.titulo = titulo;
        this.rodas = rodas;
        this.titulo = titulo;
        this.rodas = rodas;
    }
    Veiculo.prototype.getTitulo = function () {
        return this.titulo;
    };
    Veiculo.prototype.getRodas = function () {
        return this.rodas;
    };
    return Veiculo;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Moto;
}(Veiculo));
var camaro = new Veiculo('Camaro');
var honda = new Moto();
console.log(honda.getTitulo());
