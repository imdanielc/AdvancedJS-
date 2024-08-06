// Arrays 
// Son una estructuta de datos que puede contener multiples elementos
// accesibles a traves de un indice numerico (Empeiza en 0)
// Cada elemento que se guarda dentro de un arreglo o lista
// puede ser de cualquier tipo de dato, tanto primitivos 
// (string, boolean, number, null, undefined, etc) como objetos y arrays.

const arreglo = [1, 2, 3, 'texto', true, false, null, undefined, {a:1}, ['Estudiante1', 'Estudiante2']];
console.log (arreglo);

// Yo puedo acceder a cualquier elemento dentro de un array mediante el indice numerico 

// Acceso a un elemento dentro de un array:

console.log(arreglo[0]); // estoy llamando la posicion 0 del array es decir estoy llamando el 1
console.log(arreglo[1]); // Estoy llamando la posicion 1 que seria el numero 1
console.log(arreglo[2]); // Estoy llamando la posicion 2 que seria el numero 2
console.log(arreglo[3]); // Estoy llamando la posicion 3 que seria 'texto'

// Para saber cuantos elementos tiene un arreglo lo puedo realizar con la funcion .length

console.log('length: ',arreglo.length);

// Para saber cual es el ultimo elemento debo restar colocar -1 en la posicion:
console.log (arreglo[arreglo.length -1]);
console.log(arreglo[arreglo.length -1][1]); // Estoy llamando la primera posicion dentro del arreglo interno 'Estudiante2'
console.log(arreglo[arreglo.length -1][0]); // Estoy llamando la primera posicion dentro del arreglo interno 'Estudiante1'

const arregloEstudiantes = arreglo[arreglo.length -1]; // TIP: para llamar un arreglo interno, se creo una constante con la posicion del arreglo interno, ahora puedo 
// llamar las posiciones simplemente llamando la constante y la posicion del arreglo que quiero:
console.log(arregloEstudiantes[0]);
console.log(arregloEstudiantes[1]);
console.log(arregloEstudiantes[arregloEstudiantes.length -1]); // estoy llamando la ultima posicion del arreglo interno, mendiante la constante que se 
// creo para el arreglo interno

// Modificar un elemento dentro de un array

arreglo [0] = true;
arreglo [2] = 'String';
arreglo [arreglo.length - 1] = 'Cualquier cosa'; 

console.log (arreglo);

// Ciclos

for (let i = 0; i < arreglo.length; i++) {
    console.log(i);
    count++;
}

let count = 0
while (count < 5) {
    console.log('Desde while: ', count);
}


// iteracion con arrays
// es posible acceder a cada elemento dentro de un array con un ciclo

for (let x = 0; x < arreglo.lengthngth; x++) {
    const element = array[x];
    console.log (`${x} : ${element}`); // Esto es para que me enumere las posiciones del arreglo    
}

// Ciclo for each => son ciclos construidos dentro del lenguaje (build-in).

arreglo.forEach(function(element){
    console.log(element);
});

arreglo.forEach((element, index) => console.log(`${index} : ${element}`)); // forma sencilla de escribirt la funcion de arriba

arregloEstudiantes.forEach((element, index) => console.log (`${index} : ${element}`));

// Ciclo for of 

for (const item of arreglo) {
    console.log(item);
}

// Metodos

const animals = ['Tortuga', 'Iguana', 'Gato', 'Delfin', 'tiburon']

// length (es una p[ropiedad)=> Muestra la cantidad de elementos que tiene un array
console.log (animals.length)

// 1. push => agrega uno o mas elementos al array (al final) y retorna el nuevo length
animals.push ('jirafa', 'leon');
console.log (animals);
console.log (animals.length);

// 2. pop => elimina el ultimo elemento de un array y lo retorna
const animalRemoved = animals.pop ();
console.log(animals);
console.log (animalRemoved);
console.log(animals.length);

// 3. shift => elimina el primer elemento de un array y lo retorna
const animalsRemovedWithShift = animals.shift();
console.log(animals);
console.log(animalsRemovedWithShift);
console.log(animals.length);

// 4. unshift => Agrrega uno o mas elementos al inicio del array 
animals.unshift('Conejo', 'Perro');
console.log(animals);
console.log(animals.length);

// 5. split => Convierte en string un array
const palabra = 'oso';
const splittedArray = palabra.split('-');
console.log(splittedArray);

// 6. reverse => Invierte el orden de los elementos de un array
const numbers = [1,2,3,4,5,6];
const reversedArray = numbers.reverse();
console.log(numbers);
console.log(reversedArray);

// 7. Join => usa todos los elementos de un array en un string y retorna ese string

const reversedWord = splittedArray.reverse();
console.log('Palabra invertida en forma de array: ', reversedWord);
const palabraInvertida = reversedWord.join ('');
console.log (palabraInvertida);
console.log('Es palindrome? ', palabraInvertida === palabra)



// Reto:

const fruits = ['Fresas', 'Mora', 'Banano', 'Manzana', 'Papaya', 'Mango'];

console.log (fruits.length);