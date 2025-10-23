console.log("VARIABLES");   
var saludo1="Hola";
var saludo2="Hola desde una variable";
console.log(saludo1);

console.log(saludo1+" "+saludo2);
console.log(`${saludo1} ${saludo2} ${4+5}`);
let numero="24";



console.log(`tipos de datos`);
var nombre="Darth Vader"; //String
console.log("string",typeof(nombre));
var tipoNumero=44444;
console.log("tipo Numerico", typeof(tiponumero));
var booleano=true;
console.log("tipo booleano", typeof(booleano));
var nulo=null;
console.log("tipo nulo", typeof(nulo));
var indefinido=undefined;
console.log("tipo indefinido", typeof(indefinido));
var tipoSimbolo=Symbol("clave");
console.log("tipo simbolo", typeof(tipoSimbolo));
var tipoBigEntero=432424n;
console.log("tipo BigEntero", typeof(tipoBigEntero));

const persona={
    nombre:"cARLOS",
    edad: 47
}

console.log("objeto persona", persona);
console.log("tipo objeto", typeof(persona)); 
console.log(persona); 
console.log(persona.nombre);