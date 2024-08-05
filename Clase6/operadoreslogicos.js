// Operadores Logicos


// Operador Y => && 
// El operador AND se utiliza cuando queremos asegurar de que dos condiciones sean verdaderas para que una accion se realice.
const quieroIrAlCine = false;
const tengoSuficienteDinero = false;

if(quieroIrALCIne && tengoSuficienteDinero){
    console.log ('Puedo ir al cine');
}else {
    console.log('No tengo suficiente dinero');
}

// Operador O => ||
// Se utiliza cuando queremos que al menos una de las dos condiones sea verdadera para que una accion se realice

const quieroRefresco = true;
const quieroLimonada = false;
if (quieroRefresco || quieroLimonada){
    console.log('TTengo algo para beber');
}else {
    console.log('No quiero nada');
}

// Operador NO => !
// Se utiliza para negar una condicion
const quieroCaldo = false;
if (!quieroCaldo){
    console.log ('Me dan 2 tazas');
}else {
    console.log ('Me gusta el caldo');
}

// CONDICION TERNARIA

const edad = 18;

if (edad => 18){
    console.log('Eres mayor de edad');
}else {
    console.log('Eres menor de edad');
}

console.log (edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad');


const ciudad = 'Bogota';
let gentilicio = '';

if (ciudad === 'Bogota'){
    gentilicio = 'Rolo'
}else if (ciudad === 'Medellin'){
    gentilicio = 'Paisa';
}else{
    gentilicio= 'Otro';
}
console.log (gentilicio);


const gentilicio2 = ciudad === 'Bogota' ? 'Rolo' : ciudad === 'Medellin' ? 'Paisa' : 'Otro';
console.log (gentilicio2);


// Operadores Nulish (fiuncion de nulos): ?? y ||
// Valores Truthy : "string", true, < 0 >
// Valores falsy: '', 0, NaN, null, undefinded

// ??
// Todos los truthy y false son validos menos NULL Y UNDEFINED
const isValid = true;
console.log(isValid ?? 'Otra cosa');

const isValid = 150;
console.log(isValid ?? 'Otra cosa');

// Al comparar, si se esta comparando entre un true y un false da como resultado false 

//  || 

const isValid2 = undefied;
const validation2 = isValid2 || 'Otra cosa'; // Este operador evalua que la variable NO sea falsy (es mas rigido);

// Reto
// !false && (!false || !false)
// true && (!false || false)
// true && (true || false)
// true && true
// true