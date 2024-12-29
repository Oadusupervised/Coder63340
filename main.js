// main.js


// Arrays para almacenar los resultados de las operaciones realizadas
let resultadosOperaciones = [];

// Objeto con las operaciones
const operaciones = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => b !== 0 ? a / b : "Error: División por cero",
    porcentaje: (a, b) => (a * b) / 100
};

// Función para mostrar los resultados en consola
function mostrarResultados() {
    console.log("Resultados de las operaciones:");
    resultadosOperaciones.forEach((resultado, index) => {
        console.log(`Operación ${index + 1}: ${resultado.operacion} - Resultado: ${resultado.resultado}`);
    });
}

// Función que muestra los prompts y captura las entradas del usuario

function capturarEntrada() {
    
    const operacion = prompt("Seleccione una operación: suma, resta, multiplicación, división, porcentaje");

    // Verificar que la operación seleccionada sea válida
    if (operacion) {


        // Capturar las entradas con prompt() y verificar si son null
        const inputNum1 = prompt("Ingrese el primer número:");
        const inputNum2 = prompt("Ingrese el segundo número:");
    
        // Verificar si el usuario canceló los prompts
        if (inputNum1 === null || inputNum2 === null) {
            alert("Operación cancelada por el usuario.");
            return;
        }
    
        // Convertir los valores de los prompts a números
        const num1 = parseFloat(inputNum1);
        const num2 = parseFloat(inputNum2);
        // Validar si las entradas son números válidos
        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor, ingrese números válidos.");
            return;
        }

        let resultado;
        switch (operacion) {
            case "suma":
                resultado = num1 + num2;
                break;
            case "resta":
                resultado = num1 - num2;
                break;
            case "multiplicación":
                resultado = num1 * num2;
                break;
            case "división":
                resultado = num2 !== 0 ? num1 / num2 : "Error: División por cero";
                break;
            case "porcentaje":
                resultado = (num1 * num2) / 100;
                break;
            default:
                alert("Operación no válida");
                return;
        }

        // Mostrar el resultado
        alert("El resultado de la operación es: " + resultado);
    } else {
        alert("No se ha seleccionado ninguna operación.");
    }
}


// Función para filtrar resultados por tipo de operación
function filtrarResultadosPorOperacion(tipoOperacion) {
    const resultadosFiltrados = resultadosOperaciones.filter(resultado => resultado.operacion === tipoOperacion);
    
    if (resultadosFiltrados.length > 0) {
        console.log(`Resultados filtrados por operación ${tipoOperacion}:`);
        resultadosFiltrados.forEach(resultado => {
            console.log(`Operación: ${resultado.operacion}, Resultado: ${resultado.resultado}`);
        });
    } else {
        console.log(`No se encontraron resultados para la operación ${tipoOperacion}`);
    }
}

// Evento para ejecutar el proceso
document.addEventListener("DOMContentLoaded", function() {
    // Asegúrate de que el botón exista antes de agregar el event listener
    const boton = document.getElementById("ejecutarProceso");

    // Verificar que el botón existe en el DOM
    if (boton) {
        boton.addEventListener("click", function() {
            capturarEntrada();
        });
    } else {
        console.error("No se encuentra el botón en el DOM.");
    }
});