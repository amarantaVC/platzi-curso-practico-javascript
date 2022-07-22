// Codigo del cuadrado 

console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {

    return  lado * 4;
}

//console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado ** 2;
}

//console.log("El area del cuadrado es:" + areaCuadrado + "cm al cuadrado");
console.groupEnd();

console.group("Traingulo");
// Codigo del triangulo
// const lado1 = 6;
// const lado2 = 6;
// const base = 4;

// const altura = 5.5;

// console.log(
//     "Los lados del triangulo miden:"
//     + lado1 + "cm, "
//     + lado2 + "cm, "
//     + base + "cm"
// );

// console.log("La altura del triangulo es de:" + altura );

function perimetroTriangulo(lado1, lado2, base) {
    return lado1+lado2+base;
}

//console.log("El perimetro del triangulo es:" + perimetroTriangulo + "cm");

function areaTriangulo( base, altura) {
    return (base * altura)/2;
}

// console.log("El area del triangulo es:" + areaTriangulo + "cm al cuadrado");

console.groupEnd();


// Codigo del circulo 

console.group("Circulos");

// const radio = 4;

// console.log("El radio de la circunferencia es: " + radio + "cm");

function diametro(radio){
    return  radio*2;
} 

// console.log("El diametro de la circunferencia es: " + diametro + "cm");

const PI = Math.PI;

console.log("PI es: " + PI + "cm");

function circunferencia(radio) {
    const diametroCirculo = diametro(radio);
    return diametroCirculo * PI;
} 

// console.log(" el perimetro de la circunferencia es: " + circunferencia + "cm");
function areaCirculo(radio){
    return PI * (radio**2);
} 

// console.log("El area de la circunferencia es: " + Math.round(areaCirculo) + "cm");
console.groupEnd();