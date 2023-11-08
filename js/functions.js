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

//operadore logicos y estructuras condicionales (inverse, )

//AND && con if
var bool = false;
var numeric = "7";
if (!bool && numeric === "7") {
    console.log("Entra if")
}
else {
    console.log("Entra else")
}

//OT || CON IF 

var age = 31;

if (age == 32 || numeric === 7) {
    console.log("Entra if")
    age += 2;
}
else {
    console.log("Entra else")
    age -= 2;
}

// For 
console.log(array_tex.length);

for (let i = 0; i < 7; i++) {
    console.log(array_tex[i] + (i + 1))
}

//----while
// let position = 0;
// while(position < array_tex.length){
//     console.log(array_tex[position]+(position+1))
//     position++;
// }

// ---- do while 
//let w = 0;
// do{
//      console.log(array_tex[w]+(w+1));
//     w++;
//  }
//  while(array_tex.length);

// eventos y funciones
// function load_page() {
//     //ejm();
// }

function ejm() {
    alert("Bienvenidox2")
}

function box_onblur() {
    const box_onblur = document.querySelector("#box_onblur");
    if (box_onblur.value.length <= 2) {
        alert("Problemas en el texto");
    }
}

const btn_changeColor = document.querySelector("#change_color");
btn_changeColor.addEventListener("click", () => {

    document.body.style.backgroundColor = "red";
    document.body.style.color = "#fff";
});

const form = document.getElementById("form_register");
const nombre = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const validation = document.getElementById("validacion");

form.addEventListener("submit", name_event => {
    name_event.preventDefault();
    let info = "";
    if (nombres.value.length <= 2 || apellidos.value.length <= 2) {
        info += "nombre y apellidos incorrectos"
        validation.style.color = "red";

    }
    else {
        info += "su nombre =" + nombre.value + "" + apellidos;
        validation.style.color = "green";
    }
    validation.innerText = info;
});

function load_page() {
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date();
    console.log(date.getFullYear());
    for (let i = 0; i < array_mul.length; i++) {
        console.log(array_mul[i].name);
    }
}

function validate() {
    let nombres = document.getElementById("nombres").value;
    console.log(nombres);
    alert(nombres.split(" "));
    if (nombres.length > 2) {
        document.getElementById("apellidos").disabled = false;
        document.getElementById("apellidos").focus();
        document.getElementById("nombres").value = "";
    }
}