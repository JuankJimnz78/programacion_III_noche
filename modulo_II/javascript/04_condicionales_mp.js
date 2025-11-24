console.log("condicionales");
console.log("condicional if");
let temperatura=15;
if(temperatura>30){
    console.log("Hace calor")
    }else{
        console.log("Hace frio");
}

console.log("condicional else if");
const password="password1234";
if(password==="password1234"){
    console.log("usuario logeado");
}else{
    console.log("usuario noi autorizado")

}
console.log("condicional anidados");
const edad=17;
const tieneLicencia=true;
if(edad>=18){
    if(tieneLicencia){
        console.log("puede conducir");
    }else{
        console.log("no puede conducir, no tiene licencia");
    }
}else{
    console.log("no puede conducir, es menor de edad");  
}

console.log("condicional switch");
const dia="domingo";
switch(dia){
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("dia laboral");
        break;
    case "sabado":
    case "domingo":
        console.log("fin de semana");
        break;
    default:
        console.log("Dia no valido ");    
}
