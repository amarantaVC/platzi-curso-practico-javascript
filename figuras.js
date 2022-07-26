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

function alturaTriangulo(lado1,lado2,base){
    if (lado1 == lado2 && lado1 != base ){
        const unCuarto = ((base)**2)/ 4 ;
        const altura = Math.sqrt(lado1 - unCuarto);
        return altura;
    } else{
        alert("Error los lados 1 y 2 no son iguales");
    }
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

// Aqui interactuamos con el HTML

//---------CUADRADO---------------//
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//-------------TRIANGULO----------------//
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputLado1");
    const lado2 = document.getElementById("InputLado2");
    const base = document.getElementById("InputBase");
    const value1 = Number(lado1.value);
    const value2 = Number(lado2.value);
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputBase");
    const altura = document.getElementById("InputAltura");
    const value1 = Number(base.value);
    const value2 = Number(altura.value);
    const area = areaTriangulo(value1, value2);
    alert(area);
}

function calcularAlturaIsosceles(){
    const lado1 = document.getElementById("InputLado1");
    const lado2 = document.getElementById("InputLado2");
    const base = document.getElementById("InputBase");
    const value1 = Number(lado1.value);
    const value2 = Number(lado2.value);
    const value3 = Number(base.value);

    const altura = alturaTriangulo(value1, value2, value3);
    alert(altura);
}
//-------------CIRCULO---------------//

function calcularPerimetroCirculo(){
    const radio = document.getElementById("InputCirculo");
    const radio1 = Number(radio.value);
    const perimetro = circunferencia(radio1);

    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("InputCirculo");
    const radio1 = Number(radio.value);

    const area = areaCirculo(radio1);
    alert(area)
}