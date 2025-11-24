console.log("OPERADORES");
console.log("Operadores Aritmeticos");

const numero1=45;
const numero2=2;
const suma= numero1 + numero2;
console.log(`${numero1} + ${numero2} = ${suma}`);

const resta= numero1 - numero2;
console.log(`${numero1} - ${numero2} = ${resta}`);

const multiplicacion= numero1 * numero2;
console.log(`${numero1} * ${numero2} = ${multiplicacion}`);

const division= numero1 / numero2;
console.log(`${numero1} / ${numero2} = ${division}`);

const modulo= numero1 % numero2;
console.log(`${numero1} % ${numero2} = ${modulo}`);

const potencia= numero1 ** numero2;
console.log(`${numero1} ** ${numero2} = ${potencia}`);

console.log("Operadores de comparacion");
const numero3="5";
const numero4=5;
console.log('Igualdad debil ${numero3} == ${numero4} :', numero3 == numero4);
console.log('Igualdad estricta ${numero3} === ${numero4} :', numero3 === numero4);
console.log('Desigualdad debil ${numero3} != ${numero4} :', numero3 != numero4);
console.log('Desigualdad estricta ${numero3} !== ${numero4} :', numero3 !== numero4);   
console.log('Mayor que ${numero3} > ${numero4} :', numero3 > numero4);
console.log('Menor que ${numero3} < ${numero4} :', numero3 < numero4);
console.log('Mayor o igual que ${numero3} >= ${numero4} :', numero3 >= numero4);
console.log('Menor o igual que ${numero3} <= ${numero4} :', numero3 <= numero4);

console.log("Operadores Lógicos");
console.log(`AND "y" (${numero3}>=${numero4} && ${numero3}<=${numero4})=${numero3>=numero4 && numero3<=numero4}`);
console.log(`OR "o" (${numero3}==${numero4} || ${numero3}!=${numero4})=${numero3==numero4 || numero3!=numero4}`);
console.log(`!"negacion"!(${numero3}==${numero4})=${!(numero3==numero4)}`);
console.log(`${numero3!=numero4&&numero3>=numero4}`);
console.log(`${numero3>numero4&&numero3===numero4}`);
console.log(`${numero3!=numero4||numero3>=numero4}`);
console.log(`${numero3>numero4||numero3!==numero4}`);
console.log(`${!(numero3!=numero4||numero3>=numero4)}`);


//const numero3="5";
//const numero4=5;
console.log(`${numero3!=numero4&&numero3>=numero4&&numero3>numero4}`);
console.log(`${numero3>numero4&&numero3===numero4}`);
console.log(`${numero3!=numero4||numero3>=numero4}`);
console.log(`${numero3>numero4||numero3!==numero4}`);
console.log(`${!(numero3!=numero4||numero3>=numero4)}`);