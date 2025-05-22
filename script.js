/*Exercici 1
Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. 
Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.*/

let add = (a, b) => a + b;
document.getElementById("resultado1").textContent = add(3, 5);

/* Exercici 1
Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti 
paràmetres i que retorni un número aleatori entre 0 i 100.*/

let randomNumber = () => Math.floor(Math.random() * 101);

document.getElementById("resultado2").innerHTML = randomNumber();

/*Exercici 1
Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i 
una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació 
que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name})*/

class Person {
  constructor(name) {
    this.name = name;
  }
  greet = () => {
    console.log(`Hola, ${this.name}`);
  };
}
const person = new Person("Manu");
person.greet();

/*Exercici 1
Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i 
utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.*/

function printNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Función de flecha dentro del bucle
    const print = () => console.log(arr[i]);
    print();
  }
}
printNumbers([1, 2, 3, 4, 5]);

/*Exercici 1
Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge 
a la consola després d'esperar 3 segons.*/

const printMessage = () => {
  setTimeout(() => {
    console.log("Han passat 3 segons!");
  }, 3000); // 3000 milisegons = 3 segons
};

printMessage();
//------------------------------------------------------------------------------------------------

/*Exercici 1
Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi 
l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 
'Pots conduir'. Si no, ha de retornar 'No pots conduir'.*/

const potConduir = (edat) => (edat >= 18 ? "Pots conduir" : "No pots conduir");
function calculaEdat() {
  let edat = document.getElementById("edat").value;
  document.getElementById("resultado3").innerHTML = potConduir(Number(edat));
}

// Ejemplos en consola
console.log(potConduir(20)); // Pots conduir
console.log(potConduir(16)); // No pots conduir

/*Exercici 2
Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar 
quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. 
Si no, retorna 'num2 és més gran'.*/

const major = (num1, num2) =>
  num1 > num2
    ? num1 + " és més gran"
    : num1 < num2
    ? num2 + " és més gran"
    : "Són iguals";

function compara() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);

  document.getElementById("resultado4").innerText = major(n1, n2);
}

/*Exercici 3
Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per 
determinar si un número és positiu, negatiu o zero. Operador ternari amb funcions: Crea una funció 
trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el 
valor màxim.*/

// Determinar si un número és positiu, negatiu o zero
const signeDelNumero = (num) =>
  num > 0 ? "Positiu" : num < 0 ? "Negatiu" : "Zero";

// Trobar el màxim entre tres números
const trobarMaxim = (a, b, c) => (a > b ? (a > c ? a : c) : b > c ? b : c);

// Funció per comprovar el signe d'un número
function comprovaSigne() {
  const num = Number(document.getElementById("numero").value);
  document.getElementById("resultadoSigne").innerText = signeDelNumero(num);
}

// Funció per comprovar el màxim entre tres números
function comprovaMaxim() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const num3 = Number(document.getElementById("num3").value);
  document.getElementById("resultadoMaxim").innerText =
    "El màxim és: " + trobarMaxim(num1, num2, num3);
}

/*Exercici 4
Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi
un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si 
cada número és parell o imparell.*/

const parOImpar = (array) => {
  let resultats = "";
  array.forEach((num) => {
    const resultat = num % 2 === 0 ? "parell" : "imparell";
    resultats += `${num} és ${resultat}\n`;
  });
  return resultats;
};

function comprovaParOImpar() {
  const input = document.getElementById("numeros").value;
  const arrayNumeros = input
    .split(",")
    .map((num) => Number(num.trim()))
    .filter((n) => !isNaN(n));
  const resultatFinal = parOImpar(arrayNumeros);
  document.getElementById("resultado5").innerText = resultatFinal;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - --

/*Exercici 1
Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció 
de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.*/

// Funció processar
function processar(nombre, callback) {
  callback(nombre);
}

// Callback que mostra el doble
const mostrarDoble = (n) => {
  document.getElementById(
    "resultadoCallback"
  ).innerText = `El doble de ${n} és ${n * 2}`;
};

// Crida des del botó
function processarCallback() {
  const valor = Number(document.getElementById("nombre").value);
  processar(valor, mostrarDoble);
}

/*Exercici 2
Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: 
dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback
amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la 
suma dels dos nombres.*/

function calculadora(a, b, callback) {
  return callback(a, b);
}

const sumar = (x, y) => x + y;

function calcularSuma() {
  const a = Number(document.getElementById("nume1").value);
  const b = Number(document.getElementById("nume2").value);
  const resultatSuma = calculadora(a, b, sumar);
  document.getElementById(
    "resultadoSuma"
  ).innerText = `Resultat: ${resultatSuma}`;
}

/*Exercici 3
Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: 
un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback,
passant el nom com a paràmetre.*/
// Función que espera 2 segundos y luego invoca el callback
function esperarISaludar(nombre, callback) {
  setTimeout(() => {
    callback(nombre); // Llamamos al callback pasando el nombre
  }, 2000); // Espera 2 segundos (2000 ms)
}

// Función que será el callback
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
  document.getElementById("resultadoSaludo").innerText = `Hola, ${nombre}!`;
}

// Función que inicia el saludo, se llama desde HTML al hacer clic en el botón
function iniciarSaludo() {
  const nombre = document.getElementById("nombre2").value;
  esperarISaludar(nombre, saludar); // Llama a la función esperarISaludar con el nombre y la función de saludo
}

/*Exercici 4
Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una 
funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de 
l'array.*/

// Funció que processa els elements de l'array i crida el callback per cada element
function processarElements(array, callback) {
  const resultats = [];
  array.forEach((element) => {
    resultats.push(callback(element)); // Aplica el callback per cada element
  });
  return resultats;
}

// Funció callback per multiplicar els números pel valor del multiplicador
function multiplicarTodos(num, multiplicador) {
  return num * multiplicador;
}

// Funció per gestionar l'entrada de l'usuari
function processarEntrada() {
  const input = document.getElementById("arrayInput").value;
  const multiplicador = Number(document.getElementById("multiplicador").value); // Obtenim el multiplicador

  if (isNaN(multiplicador)) {
    document.getElementById(
      "resultats"
    ).innerHTML = `<p>Per favor, introdueix un valor vàlid per al multiplicador.</p>`;
    return;
  }

  const array = input.split(",").map((num) => Number(num.trim())); // Convierteix l'entrada a un array de números

  // Crida la funció processarElements amb l'array i el callback
  const resultats = processarElements(array, (num) =>
    multiplicarTodos(num, multiplicador)
  );

  // Mostra els resultats a la pàgina web
  document.getElementById("resultats").innerHTML = `
    <p>Array original: [${array.join(", ")}]</p>
    <p>Resultat després de multiplicar tots per ${multiplicador}: [${resultats.join(
    ", "
  )}]</p>
  `;
}

/*Exercici 5
Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de 
callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció 
de callback amb la cadena transformada.*/

function processarCadena(cadena, callback) {
  const majuscules = cadena.toUpperCase();
  callback(majuscules);
}

// Exemple de callback que mostra la cadena
function mostrarCadena(resultat) {
  document.getElementById("resultatCadena").innerText = `Resultat: ${resultat}`;
}

// Funció que s'executa en clicar el botó
function iniciarProcessament() {
  const inputCadena = document.getElementById("inputCadena").value;
  processarCadena(inputCadena, mostrarCadena);
}

//- - - - - - - - - - -- - - - - - - - - - - -- - - - - - - - - - - -- - - - - - - - - - - -- - - - - - - - - - -
