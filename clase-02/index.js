/* 
    COERCION DE TIPOS DE DATO 

    Hay circunstancias donde a veces intentamos realizar una operacion media 
    rara como por ejemplo (3 * "hola"). ¿Que hace JS en casos como este?

    1- Tira error?
    2- Informa que hay algun valor invalido?
    3- Intenta resolver de alguna manera?

    Cuando tenemos un + si hay una cadena (string) involucrado, ese operador 
    se convierte en un operador de concatenacion.
    Pero... con el de * no sucede lo mismo. Solo puede multiplicar, y se supone
    que solo se deberia poder multiplicar numbers.
*/

// const numero = 11
// const uno = "1"

// console.log(numero + uno)
// console.log(numero - uno)

/* 
    ESTRUCTURAS DE CONTROL DE FLUJO 

    Son aquellas que nos permiten realizar preguntas y en base a la respuesta elegimos un camino u otro.

    En pocas palabras controlan el flujo de un algoritmo.
*/
/* caso excluyente  */
/* var llueve = true;
if (llueve) {
  console.log("Me voy a entrenar");
} else {
  console.log("Me quedo en casa jugado lolcito");
} */

// Caso no excluyente
/* var lunes = false;
var viernes = false;
var sabado = true;

if (lunes || sabado) {
  console.log("Miro una pelicula a la noche");
}
if (viernes || sabado) {
  console.log("Me como una pizza");
}
 */

/* var numero = 10;
if (numero < 10) {
  console.log("Es menor ques 10");
  } else if (numero > 10) {
    console.log("Es mayor que 10");
    } else {
      console.log("Son iguales");
      } */

// SWITCH CASE
// Es como un formato de maquina expendedora

/* var producto = 5;
switch (producto) {
  case 1:
    console.log("Te");
    break;
  case 2:
    console.log("cafe");
    break;
  case 3:
    console.log("Agua");
    break;
  case 4:
    console.log("Energizante");
    break;
  default:
    console.log("Caramelo media hora");
} */
/* 
    BUCLES O CICLOS

    Son un conjunto de estructuras de repeticion.

    1. while (mientras)
    2. do while (hacer mientras)
    3. for (para)
*/

var contador = 0; // variable inicial

while (contador < 5) {
  // condicion
  contador++; // incrementador
  console.log(contador);
}
/* for (var contador = 0; contador < 5; contador++) {
  console.log(contador);
} */
var edad;

do {
  edad = prompt("Ingrese su edad: ");
} while (edad > 18);

// variable incial / condicion / incrementador
for (var contador = 0; contador < 5; contador++) {
  console.log(contador);
}

var llueve = false;
if (llueve) {
  console.log("Hago deporte");
} else {
  console.log("Me quedo en casa jugando lolcito");
}

const nombre = "Alexis";
const apellido = "Duran";
const Edad = 24;

var saludo = "Hola me llamo " + nombre + " y tengo" + edad + " años";

const numero1 = 34;
const numero2 = 33;

const suma = numero1 + numero2;
const producto = numero1 * numero2;

console.log(suma);
console.log(producto);

var SeguiSumando = 0;

while (SeguiSumando < 5) {
  console.log(SeguiSumando);
  SeguiSumando++;
  1;
}

var nota = 72;
if (nota >= 90) {
  console.log("Ecxelente");
} else if (nota >= 70) {
  console.log("Bueno");
} else if (nota >= 50) {
  console.log("Regular");
} else {
  console.log("Insuficiente");
}
