console.log("prueba de conexion");
// tipos de variables
//cons : variables constantes
const p1 = 301416;
const pilgada = 2.54;
const name = "Daniel Miranda";
//var : vairiables goblales
var cal_days = 15;
//let : 
let j = 0;
let count = 1;

//Formas de impresion 
// alert
//alert(name);
//console 
console.log(name);
console.log(cal_days);
console.log("15")
console.log(true)
//Pantalla - body
document.write(name);
document.getElementById("box_one").innerHTML = "<h1>Daniel Miranda</h1>"
document.getElementById("box_two").innerHTML = "<h1>Daniel Miranda</h1>"
// librerias
Swal.fire({
    icon: "info",
    tittle: "Daniel",
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    position: "center-end"
})
// swal.fire(name)

// tipos de datos
//numericos
var number_one = 10;
var number_two = 2.3;
// string 
var text = "soy un texto";
//boleanos
var bolean = true; // false
// array
let array_num = [1, 2, 3, 4, 5];
let array_tex = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let array_mix = [1, "a", 3, "b"];
let array_mul = [
    { name: "Daniel", last_name: "Miranda", age: "20" },
    { name: "ismael", last_name: "Miranda", age: "20" },
    { name: "Duvan", last_name: "Miranda", age: "20" },
    { name: "kelly", last_name: "Miranda", age: "20" }
];

// operadores basicos
// suma
var suma = number_one + number_two;
console.log("suma = " + suma);
// resta
var resta = number_one - number_two;
console.log("resta = " + resta);
// multiplicacion
var multi = number_one * number_two;
console.log("multiplicacion = " + multi);
// division
var divi = number_one / number_two;
console.log("division = " + divi);
// modulo
var mod = number_one % number_two;
console.log("modulo = " + mod);


console.log("suma = " + suma + "\n" +
    "resta = " + resta + "\n" +
    "multiplicacion = " + multi + "\n" +
    "division = " + divi + "\n" +
    "modulo = " + mod
);
var respuesta =
    "suma = " + suma + "<br>" +
    "resta = " + resta + "<br>" +
    "suma = " + multi + "<br>" +
    "multiplicacion = " + divi.toFixed(2) + "<br>" +
    "division = " + mod.toFixed(2);

Swal.fire(respuesta);

Swal.fire({
    showConfirmButton: false,
    background: "#fff",
    icon: "success",
    title: "respuesta:",
    html: respuesta,
});