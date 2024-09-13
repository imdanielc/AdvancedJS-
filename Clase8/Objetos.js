// Objetos

const objeto = {
    propiedad1: 'Valor1',
    propiedad2: 1,
    propiedad3: [1, 2, 3],
    saludar: () => console.log('Hello  world')
}

console.log(objeto);

// Forma antigua de hacerlo

let persona = {};
console.log(persona);
persona.nombre = 'Juan';
persona.apellido = 'Perez';
persona.edad = 25;
persona.nacionalidad = 'Colombiano';
console.log(persona);

// Acceder a las propiedad de un objeto

console.log(objeto.edad);

// Eliminar una propiedad

delete objeto.edad;

// Otras formas de crear objetos

// Object.create

const infoPersona ={
    nombre: 'Ana',
    Apellido: 'Suarez',
    edad: 20,
    direccion: 'Calle3',
    ciudad: 'Bogota'
};

const infoProfesion = Object.create(infoPersona);
console.log(infoProfesion);
console.log(infoProfesion.nombre);
console.log(infoProfesion.apellido);
infoProfesion.profesion ='Diseñadora';
infoProfesion.experiencia = 5;
infoProfesion.cargo = 'Jefa';
console.log(infoProfesion);
console.log(infoProfesion.profesion);
console.log(infoProfesion.experiencia);


// Object.assign

const objeto1 = {a: 'Cualquier cosa', b: 2};
const objeto2 = {b: 3, c: 4};
const objeto3 = {c: 5, d: 6};

const objetoFinal = object.assign({}, objeto1);
console.log (objetoFinal);

//Object.freeze

const personFreeze ={
    nombre: 'Pepito',
    edad: 2,
    mascotas: ['Loro', 'Perro'],
    objetoInterno: {
        a:1 
    }
};

object.freeze (personFreeze);
// no tiene efecto porque el metodo freeze evita cualquier modificacion 
personFreeze.nombre = 'Pedro';
personFreeze.edad = 10;
console.log(personFreeze); // no cambia ya que esta congelado para cambios

personFreeze.mascotas.push('Gato');// No se esta cambiando la propiedad, se esta añadiendo
console.log(personFreeze);



