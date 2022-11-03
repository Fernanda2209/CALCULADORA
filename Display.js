class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorAnterior;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.valorActual = "";
        this.valorAnterior = "";
    }

    agregarNumero (numero){
        this.valorActual = numero;
    }
}