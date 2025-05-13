// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

// Función para saber los días
function diffDays(actualDate, birthDate) {
    const diff = actualDate - birthDate;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// Función para saber los meses
function diffMonths(actualDate, birthDate) {
    const totalAños = actualDate.totalDeAños() - birthDate.totalDeAños();
    const totalMeses = actualDate.totalDeMeses() - birthDate.totalDeMeses();
    const totalMonths = totalAños * 12 + totalMeses;

    return totalMonths;
}

// Función para saber los años
function diffYears(actualDate, birthDate) {
    let totalAños = actualDate.totalDeAños() - birthDate.totalDeAños();

    if (
        actualDate.getMonth() < birthDate.getMonth() ||
        (actualDate.getMonth() === birthDate.getMonth() && actualDate.getDate() < birthDate.getDate())
    ) {
        totalAños--;
    }

    return totalAños;
}

// Este no le entendi muy bien pero fuciono, hay que preguntar 
Date.prototype.totalDeAños = function () {
    return this.getFullYear();
};

Date.prototype.totalDeMeses = function () {
    return this.getMonth();
};

async function main() {
    const actualDate = new Date();
    
    const birthDateDay = await ask('¿Cuál es el día de tu fecha de cumpleaños?');
    const birthDateMonth = await ask('¿Cuál es el mes de tu fecha de cumpleaños?');
    const birthDateYear = await ask('¿Cuál es el año de tu fecha de cumpleaños?');

    const birthDate = new Date(birthDateYear, birthDateMonth - 1, birthDateDay);

    console.log('Has vivido aproximadamente:');
    console.log(`${diffDays(actualDate, birthDate)} días`);
    console.log(`${diffMonths(actualDate, birthDate)} meses`);
    console.log(`${diffYears(actualDate, birthDate)} años`);

    // Calculamos la edad
    const edad = diffYears(actualDate, birthDate);  // Aquí se define 'edad'

    // Mensajes según la edad
    if (edad <= 18) {
        console.log('Eres un menor de edad');
    } else if (edad > 18 && edad <= 30) {
        console.log('Eres un adulto joven');
    } else if (edad > 30 && edad <= 50) {
        console.log('Ya ve haciendo tu testamento');
    } else {
        console.log('Ya estás robando oxígeno :(');
    }
}

main();
