var valor = '';
function agregarNum(num) {
    valor += num;
    actualizar();
}
function agregarOperacion(op) {
    valor += op;
    actualizar();
}
function borrar() {
    valor = '';
    actualizar();
}
function calcular() {
    try {
        var result = eval(valor);
        if (typeof result === 'number' && !isNaN(result)) {
            valor = result.toString();
            actualizar();
        }
        else {
            throw new Error('Invalid expression');
        }
    }
    catch (error) {
        valor = 'Error Error Error';
        actualizar();
    }
}
function actualizar() {
    var display = document.getElementById('display');
    display.value = valor;
}
