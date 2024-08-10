// COERCION IMPLICITA

//  Es la conversion automatica de un tyipom de dato a otro y esta a cargo de JS.

console.log (4 + '7'); // '44' String
console.log (4 * '7'); // 28 Number
console.log (4 - '7'); // 3 Number
console.log (15 * '3'); // 5 Number

// De las 4 operaciones basicas la unica que puede significar algo mas es la el sumbolo de suma,
// en el ejemplo de arriba se puede observar como console.log (4 + '7');  da '44' en String, si 
// lo que esta dentro del parentesis fueran numeros olamente se realizaria la operacion

console.log (4 * 'aeiou'); // NaN quiere decir Not a Number    
console.log (2 + true); // 3 Number 
console.log ('2' + true); // 2true string, tiene mas relevancia el string
console.log ('2' - true); // 1 Number 
console.log (2 - 'true'); // NaN 
console.log (false - 3); // -3 Number
console.log (false - false) // 0 Number
console.log (false + 'False'); // falsefalse String
console.log (false - 'False'); // NaN

console.log (!4); // false, el operador ! es una negacion (osea un false), por lo que niega lo que esta a la derecha
console.log (!0); // true
console.log (!-5); // false, al -5 ser un numero real da false 

console.log (true == 1); // true, es debido al doble = ya que el 1 es la representacion numerica de true
console.log (true === 1); // false


// Cohercion explicita

// Evaluacion de string

console.log (String(1)); // '1' String
console.log (String(true)); // 'true' String
console.log (String(false)); // 'False' String
console.log (String(null)); // 'null' String
console.log (String(undefined)); // 'undefined' String

// Operaciones 

const word = 'Hola'
console.log (word + 'Mundo');
console.log (`${word} mundo `);

// Evaluacion de Boolean

// Falsy values
console.log (Boolean(0)); // False
console.log (Boolean(-0)); // False
console.log (Boolean(null)); // False
console.log (Boolean(NaN)); // False
console.log (Boolean(false)); // False
console.log (Boolean(undefined)); // False
console.log (Boolean('')); // False

// Truthty values
console.log (Boolean(true)); // True
console.log (Boolean(1)); // True, numeros mayores a 0
console.log (Boolean(-5)); // True, numeros menos a 0
console.log (Boolean('algo')); // True

// Operaciones

console.log (!false); // true
console.log (!true); // false
console.log (true & true); // AND => false
// El OR || busca siempre el valor true, de no tenerla busca cualuiqer otro resultado aparte del false
console.log (true || true); // OR  => true
console.log (false || true); // OR => true
console.log (false || 'Something'); // OR => 'Something' 
console.log ('Something' || false); // OR => 'Something' 
console.log (false || 0); // OR => 0 

// Nullish operator
console.log(false ?? 'Something'); // false
console.log(undefined ?? 'Someting'); // false
console.log (0 ?? 'Something'); // 0
console.log (null ?? 'Something'); // Something
console.log (undefined ?? 'Something'); // something

// Evaluacion de number

console.log (Number(150)); // 150 Number
console.log (Number ('1')); // 1 Number
console.log (Number('asoijdba')); // NaN
console.log (Number(true)); // 1 Number
console.log (Number(false)); // 0 Number
console.log (Number ('true')); // NaN
console.log (Number('false')); // NaN
console.log (Number(null)); // 0
console.log (Number(undefined)); // NaN