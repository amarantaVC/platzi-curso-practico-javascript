const list= [
   
    45,
    57,
    20000,
    34,
    14,
    4567,
    2456
]

list.sort((a,b)=> a-b)
 

const mitadLista= parseInt(list.length/2)

function esPar(numero){ 
 if(numero % 2 === 0){
    return true
    
 }else{
    return false

}

}
if (esPar(list.length)){
    const elemento1=list[mitadLista -1]
    const elemento2=list[mitadLista ]

    const promedioElemento1y2=calcularMediaAritmetica([
        elemento1,
        elemento2
    ])

    mediana= promedioElemento1y2
    
    

 }else{
    

     mediana= list[mitadLista]
 }

 console.log(mediana)