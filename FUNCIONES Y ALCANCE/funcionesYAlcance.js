/* Crea ejemplos de funciones básicas que representen las diferentes posibilidades del lenguaje:
 Sin parámetros ni retorno, con uno o varios parámetros, con retorno... */

//  Funciones declaradas (Function declarations)
function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}!`);
}
saludar("sergio", "salazar");

// Funciones Expresadas (Function expressions)
const saludarExpresado = function (name, surname) {
    console.log(`Hola ${name} ${surname} desde una función espresada!`)
}
saludarExpresado("Sergio", "Salazar");