console.log("funciones");
console.log("funcion simple");
function saludar(){
    console.log("Hola");
}
saludar();
saludar();

console.log("funciones con parametros");
function suma(a,b){
    return a+b;
}
console.log("suma 3+4:", suma(3,4));

console.log("funcion flecha");
const funcionFlecha=()=>{
    console.log("soy una funcion flecha");
}
funcionFlecha();

console.log("funcion flecha");
const multiplicacion=(n,m)=>{
    return n*m;
    
}
console.log(multiplicacion(7,7));
console.log("funcion retorno directo");
const cuadrado = x=> x*x;
console.log("cuadrado de 5 es:", cuadrado(5));

console.log("funcion como parametro por defecto");
function division(Z, K=3){
    return z/K;
}
console.log("division 9/3:", division(40,8));
console.log("division 9/3:", division(40,8));