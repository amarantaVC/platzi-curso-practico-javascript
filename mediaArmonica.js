const lista = [
    100,
    200,
    300,
    500,
]

function calcularMediaArmonica(lista){
    
    let sumaLista = 0;

    for (let index = 0; index < lista.length; index++) {
        sumaLista += (1/lista[index])
      }

    const armonicaLista = lista.length / sumaLista

    return armonicaLista
}