// Objetos

// Son estructuras de datos que permiten almacenar datos y funcionalidades relacionadas
// Comparados con otros tipos de datos como strings, numeros y booleanos, los objetos 
// pueden contener multipleas valores y metodos 


// Sintaxis

const objeto = {
    propiedad1: 'Valor1',
    propiedad2: true,
    propiedad3: false,
    edad: 18,
    animales: ['Perro', 'Gato'], 
    saludar: function(){
        console.log('Hello world');
    },
    saludar1 (){
        console.log('Que dice la banda');
    },
    saludar2: () => console.log ('Como es como seria?'),
    objetoInterno: {
        a: 1,
        b: 'Hola',
        c:{
            z:58
        }
    }
};
console.log(objeto);



// -------------------------------
// Forma antigua

let persona = {
    nombre: 'Camilo'
};

console.log (persona);

persona.nombre = 'Juan'; // Se actualiza el valor 
persona.apellido = 'Perez';
persona.edad = 25;
persona.nacionalidad = 'Colombiano'

console.log (persona);



// ---------------------------------
// Acceder a las propiedades de un objeto

console.log(objeto.edad);
console.log(objeto.animales);
console.log(objeto.objetoInterno.b); // Para llamar el objeto dentro de otro objeto
console.log(objeto.objetoInterno.c.z);
console.log(objeto.saludar);
objeto.saludar(); // para ejecutar la funcion la coloco asi
objeto.saludar2();

objeto.profesion = 'Programador'; // Agregar propiedades dentro de un objeto
console.log(objeto);



// ---------------------------------
// Eliminar una propiedad

delete objeto.edad;
console.log(objeto);
// console.log(edad); // undefined



// --------------------------------
// Otras formas de crear objetos

// JS tiene metodos que son buil-in, ya estan creados


// Object.create 

const infoPersona = {
    nombre: 'Ana',
    apellido: 'Gutiereez',
    edad: 24,
    direccion: 'Calle 2',
    ciudad: 'Bogota'
};

const infoProfesion = Object.create(infoPersona);
console.log(infoProfesion);
console.log(infoProfesion.nombre); // Ana