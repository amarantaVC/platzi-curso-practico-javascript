const lista = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
    1,
];


function Moda(lista) {
    const listaCount = {};

    //map ayuda a recorrer el array
    lista.map(
        function(elemento){

            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }

        }
    );

    // a object.entries le podemos enviar como argumento el objeto que queremos convertir en un array

    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    //la moda es la ultima posicion de lista1Array
    const moda = listaArray[listaArray.length-1];

    return moda

}


