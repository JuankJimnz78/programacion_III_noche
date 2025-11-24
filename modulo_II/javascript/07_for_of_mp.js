console.log("CICLO FOR OF");
const nombres=["jose","juan","pedro", "maria"];
for (const nombre of nombres){
    console.log("Hola:", nombre);
}
const nombre= "WILO";
for(const letra of nombre){
    console.log("letras",letra);
}


numeros=[3,4,2,4,5];
mayor=0;
for(const numero of numeros){
    if(numero>mayor) mayor=numero;
    }
console.log("el numero mayor es:", mayor);


persona= {
    nombre:"Ana",
    apellido:"Lopez",
    profesion   :"Arquitecta"
}
for (const clave in persona){
    console.log(clave, ":", persona[clave]);
}

suma_claves=0;
for (const clave in persona){
    suma_claves++;
}
console.log(suma_claves);