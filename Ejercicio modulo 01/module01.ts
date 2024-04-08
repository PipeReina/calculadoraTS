let valor: string = '';

function agregarNum(num: string) {
    valor += num;
    actualizar();
}

function agregarOperacion(op: string) {
    valor += op;
    actualizar();
}

function borrar() {
    valor = '';
    actualizar();
}

function calcular() {
    try {
        const result = eval(valor);
        if (typeof result === 'number' && !isNaN(result)) {
            valor = result.toString();
            actualizar();
        } else {
            throw new Error('Invalid expression');
        }
    } catch (error) {
        valor = 'Error Error Error';
        actualizar();
    }
}

function actualizar() {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = valor;
}