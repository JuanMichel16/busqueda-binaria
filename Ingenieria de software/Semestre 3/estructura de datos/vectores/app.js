let array =  [];


function llenar(cantidad) {
    let numero = 0;
    
    for(let i = 1; array.length < cantidad; i++) {
        if(i % 2 === 0) {
            array[numero++] = i;
        };
    };
};

function mostrar() {
    console.log(array)
}


function girarDerecha() {
    let numeroEliminar = array[array.length - 1];
    array.splice(0, 0, numeroEliminar);
    array.splice(array.length - 1, 1);

    return array;
}

function girarIzquierda() {
        let numBorrar = array[0];
        array.splice(array.length, 0, numBorrar);
        array.splice(0, 1);

        return array;
}


function invertir() {
    for (let i = 0; i <= array.length; i++) {
        let numero = array[array.length - 1];
        array.splice(i, 0, numero);
        array.splice(array.length - 1, 1);
    };
    
    return array;
}


llenar(10);
mostrar();
girarDerecha();
mostrar();
girarIzquierda();
mostrar();
invertir();
mostrar();