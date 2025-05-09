// Ejercicio: Crear una función que reciba dos números y devuelva el mayor de ellos
//
// Instrucciones:
// 1. Crear una función llamada `obtenerMayor` que reciba dos números como parámetros.
// 2. La función debe devolver el mayor de los dos números.
// 3. Pedir al usuario que ingrese dos números y mostrar el resultado de la función `obtenerMayor`.

const { ask } = require('../helpers/input');

// TODO: Función que devuelve el mayor de dos números

function obtenerMayor(num1, num2) {
  if (num1 > num2) {
    return "Numero 1 es mayor" + num1;
  } else {
    return "Numero 2 es mayor" + num2;
  }
}

async function main() {
  const num1 = Number(await ask("Ingresa el primer número"));
  const num2 = Number(await ask("Ingresa el segundo número"));
  if (num1 === num2) {
    console.log("Lo siento, los números que introduciste son iguales, no es posible evaluarlos");
  } else {
    const resultado = obtenerMayor(num1, num2);
    console.log(resultado);
  }

}

main();