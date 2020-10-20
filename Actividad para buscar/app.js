let vector = []

function llenarVector() {
    let pares = 0;
    for(let i = 1; pares < 100; i++) {
        if(i % 2 === 0) {
            vector[pares] = i
            pares++
        }
    }
};


function busquedaBinaria(numero) {
    let intentos = 0;
    let min = 1;
    let maximo = vector[vector.length - 1];
    let posicion

    for(; posicion !== numero; intentos++ ) {
        posicion = Math.round((maximo+min)/2)

        console.log(posicion)
        if(numero === vector[posicion]) {
            console.log('Ya lo encontramos!')
        }else if(posicion < numero) {
            min = posicion + 1

        } else if(posicion > numero) {
            maximo = posicion - 1
        }
    }

    console.log(`Se ha encontrado el numero en el intento: ${intentos}`)
    return posicion
}

llenarVector();
busquedaBinaria(100);
console.log(vector);