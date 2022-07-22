// Codigo del cuadrado 

console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado ** 2;

console.log("El area del cuadrado es:" + areaCuadrado + "cm al cuadrado");
console.groupEnd();

console.group("Traingulo");
// Codigo del triangulo
const lado1 = 6;
const lado2 = 6;
const base = 4;

const altura = 5.5;

console.log(
    "Los lados del triangulo miden:" 
    + lado1 + "cm, " 
    + lado2 + "cm, " 
    + base + "cm"
);

console.log("La altura del triangulo es de:" + altura );

const perimetroTriangulo = lado1+lado2+base;

console.log("El perimetro del triangulo es:" + perimetroTriangulo + "cm");

const areaTriangulo = (base * altura)/2;

console.log("El area del triangulo es:" + areaTriangulo + "cm al cuadrado");

console.groupEnd();


// Codigo del circulo 

console.group("Circulos");

const radio = 4;

console.log("El radio de la circunferencia es: " + radio + "cm");

const diametro = radio*2;

console.log("El diametro de la circunferencia es: " + diametro + "cm");

const PI = Math.PI;

console.log("PI es: " + PI + "cm");

const circunferencia = diametro * PI;

console.log(" el perimetro de la circunferencia es: " + circunferencia + "cm");
const areaCirculo = PI * (radio**2);

console.log("El area de la circunferencia es: " + Math.round(areaCirculo) + "cm");
console.groupEnd();