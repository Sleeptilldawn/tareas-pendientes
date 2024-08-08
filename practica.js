console.log('hola consola');

//var pellido = "Rojas";
let nombre = "Regina";

const pi = 3.14;
//String nombre = "Juan";

// TIPOS DE DATOS

//No definidos
let noDefinido;

//Número
let cantidad = 50;

// Cadena de un texto o String
let bebida = "agua";

//Boleanos
let activo = tue;

//Objetos
//Persona: nombre, apellido, edad, peso
let persona = {nombre : 'Aurora', apellido : 'Pinzón', edad : 20};
console.log(persona);

//Arrays colection
let personas = [
    {nombre : 'Melaanie', apellido : 'Matus', edad : 21},
    {nombre : 'Mayra', apellido : 'Arias', edad : 19},
    {nombre : 'Karla', apellido : 'Yulenni', edad : 22},
    persona

]
console.log(persona);
console.log(personas[2]);

//Funciones JS
//Listado de instrucciones
function suma(params) {
    return 2+2;
}
function suma(a, b) {
    return a + b;
}
let resultadoDeSuma = suma(9, 7);
console.log(resultadoDeSuma);

function multiplicacion(a, b){
    return a* b;
}
let resultado = multiplicacion(5, 7);
console.log(resultado);




// Operadores aritmeticos
let datoA = 10;
let datoB = 5;

// suma
let suma = datoA + datoB;
// resta
let resta = datoA - datoB;
// multiplicación 
let multip = datoA * datoB;
// división
let div = datoA / datoB;
// Modulo o residuo
let residuo = datoA % datoB;
// incremento
let incremento = datoA;
incremento++;
// decremento 
let decremento = datoA;
decremento --;
// *******************************
// operadores relacionales
// mayor que >
let mayorQue = datoA > datoB;
// menor que <
let menorQue = datoB < datoB;
// mayor o igual >=
let menorIgual = datoB <= datoB;
// igual que == 
let igual = datoA == datoB;
// diferente de !=
let diferenteDe = datoA != datoB;
// *********************************
// Operadores lógicos
// y &&
let and = (datoA < 10 && datoB > 10);
// or ||
let or = (datoA > 10 || datoB > 10);
// not !
let not= !(datoA < 10);
// ////////////////////////////////////
// Operadores de asignacion
// Asignación simple =
let dato1 = 60;
// summar y asignar +=
let masigual = 10;
masigual += datoA;
// Menos igual -=
let menosIgual= 10;
menosIgual -= datoB;
// Por 