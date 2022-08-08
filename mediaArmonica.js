const lista = [
    100,
    200,
    300,
    500,
]

function calcularMediaArmonica(lista){
    
    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista += (1/lista[i]);
      }

    const armonicaLista = lista.length / sumaLista

    return armonicaLista
}