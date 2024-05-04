//let Nombre;//!undefined 
//const Apellido = "jimenez";//String 
//const anioNacimiento = 2005;//* Number
//let apellido ;
//console.log = apellido ;



//*     ==              Es igual
//*     !=              Es distinto
//*     <               Es menor
//*     >               Es mayor 
//*     <=              Es menor o igual
//*     >=              Es mayor o igual
//*     && AND
//*     || OR
//*      ! NOT

let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");
let operacion = prompt("Ingrese la operación deseada (+, -, *, /):");

// Convertir cadenas de texto a números
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

if (operacion === "+") {
    let suma = numero1 + numero2;
    console.log("Suma: " + suma);
} else if (operacion === "-") {
    let resta = numero1 - numero2;
    console.log("Resta: " + resta);
} else if (operacion === "*") {
    let multiplicacion = numero1 * numero2;
    console.log("Multiplicación: " + multiplicacion);
} else if (operacion === "/") {
    if (numero2 === 0) {
        console.log("No se puede dividir por cero");
    } else {
        let division = numero1 / numero2;
        console.log("División: " + division);
    }
} else {
    console.log("Operación no válida");
}
