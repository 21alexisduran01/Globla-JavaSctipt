// Variables -> Valores
//  FUNCIONES -> Acciones

/* console.log("Instruccion 1");
console.log("Instruccion 2");
console.log("Instruccion 3");
console.log("Instruccion 4");
console.log("Instruccion 5");
console.log("Instruccion 6");

function imprimir() {
} 
imprimir(); */

/* function suma(a, b) {
   console.log(4+5) 
  return a + b;
}

var total = 5 + suma(4, 5) + suma(6, 7);
console.log(total);

 
function cuadratica(x) {
  return suma(suma((4 * x) ** 2, 6 * x), 2);
}  */

function sumar(x, y) {
  return x + y;
}

function elevar(x, exponente) {
  return x ** exponente;
}
function aplicarRaizCuadrada(x) {
  return x ** 1 / 2;
}

function aplicarTeoremaDePitagoras(a, b) {
  return aplicarRaizCuadrada(sumar(elevar(a, 2), elevar(b, 2)));
}

aplicarTeoremaDePitagoras(4, 5);
