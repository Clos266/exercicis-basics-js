let add = (a, b) => a + b;
document.getElementById("resultado1").textContent = add(3, 5);

let randomNumber = () => Math.floor(Math.random() * 101);

document.getElementById("resultado2").innerHTML = randomNumber();

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

function printNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    const print = () => console.log(arr[i]);
    print();
  }
}
printNumbers([1, 2, 3, 4, 5]);

const printMessage = () => {
  setTimeout(() => {
    console.log("Han passat 3 segons!");
  }, 3000);
};

printMessage();

const potConduir = (edat) => (edat >= 18 ? "Pots conduir" : "No pots conduir");
function calculaEdat() {
  let edat = document.getElementById("edat").value;
  document.getElementById("resultado3").innerHTML = potConduir(Number(edat));
}

console.log(potConduir(20));
console.log(potConduir(16));

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

const signeDelNumero = (num) =>
  num > 0 ? "Positiu" : num < 0 ? "Negatiu" : "Zero";

const trobarMaxim = (a, b, c) => (a > b ? (a > c ? a : c) : b > c ? b : c);

function comprovaSigne() {
  const num = Number(document.getElementById("numero").value);
  document.getElementById("resultadoSigne").innerText = signeDelNumero(num);
}

function comprovaMaxim() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const num3 = Number(document.getElementById("num3").value);
  document.getElementById("resultadoMaxim").innerText =
    "El màxim és: " + trobarMaxim(num1, num2, num3);
}

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

function processar(nombre, callback) {
  callback(nombre);
}

const mostrarDoble = (n) => {
  document.getElementById(
    "resultadoCallback"
  ).innerText = `El doble de ${n} és ${n * 2}`;
};
function processarCallback() {
  const valor = Number(document.getElementById("nombre").value);
  processar(valor, mostrarDoble);
}

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

function esperarISaludar(nombre, callback) {
  setTimeout(() => {
    callback(nombre);
  }, 2000);
}

function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
  document.getElementById("resultadoSaludo").innerText = `Hola, ${nombre}!`;
}

function iniciarSaludo() {
  const nombre = document.getElementById("nombre2").value;
  esperarISaludar(nombre, saludar);
}

function processarElements(array, callback) {
  const resultats = [];
  array.forEach((element) => {
    resultats.push(callback(element));
  });
  return resultats;
}

function multiplicarTodos(num, multiplicador) {
  return num * multiplicador;
}

function processarEntrada() {
  const input = document.getElementById("arrayInput").value;
  const multiplicador = Number(document.getElementById("multiplicador").value);

  if (isNaN(multiplicador)) {
    document.getElementById(
      "resultats"
    ).innerHTML = `<p>Per favor, introdueix un valor vàlid per al multiplicador.</p>`;
    return;
  }

  const array = input.split(",").map((num) => Number(num.trim()));
  const resultats = processarElements(array, (num) =>
    multiplicarTodos(num, multiplicador)
  );

  document.getElementById("resultats").innerHTML = `
    <p>Array original: [${array.join(", ")}]</p>
    <p>Resultat després de multiplicar tots per ${multiplicador}: [${resultats.join(
    ", "
  )}]</p>
  `;
}

function processarCadena(cadena, callback) {
  const majuscules = cadena.toUpperCase();
  callback(majuscules);
}

function mostrarCadena(resultat) {
  document.getElementById("resultatCadena").innerText = `Resultat: ${resultat}`;
}

function iniciarProcessament() {
  const inputCadena = document.getElementById("inputCadena").value;
  processarCadena(inputCadena, mostrarCadena);
}

function calculaQuadrats() {
  const input = document.getElementById("inputNumeros").value;
  const arrayNumeros = input.split(",").map((num) => Number(num.trim()));
  const quadrats = arrayNumeros.map((num) => num * num);

  document.getElementById(
    "resultatQuadrats"
  ).innerText = `Resultat: [${quadrats.join(", ")}]`;
}

function filtrarParells() {
  const input = document.getElementById("inputFilter").value;
  const arrayNumeros = input.split(",").map((num) => Number(num.trim()));
  const parells = arrayNumeros.filter((num) => num % 2 === 0);

  document.getElementById(
    "resultatFilter"
  ).innerText = `Números parells: [${parells.join(", ")}]`;
}

function trobarMajor() {
  const input = document.getElementById("inputFind").value;
  const array = input.split(",").map((num) => Number(num.trim()));
  const resultat = array.find((num) => num > 10);

  document.getElementById("resultatFind").innerText =
    resultat !== undefined
      ? `El primer número major a 10 és: ${resultat}`
      : `No hi ha cap número major a 10.`;
}

function calcularSumaTotal() {
  const input = document.getElementById("inputReduce").value;
  const array = input.split(",").map((num) => Number(num.trim()));

  const suma = array.reduce((acc, curr) => acc + curr, 0);

  document.getElementById(
    "resultatReduce"
  ).innerText = `La suma total és: ${suma}`;
}

function calcul5() {
  const array = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

  const filtrados = array.filter((num) => num >= 10);

  const multiplicados = filtrados.map((num) => num * 2);

  setTimeout(() => {
    const resultado = multiplicados.reduce((acc, num) => acc + num, 0);

    document.getElementById(
      "resultado"
    ).innerText = `El resultat de la suma és: ${resultado}`;
  }, 0);
}

function fusionarObjectes() {
  const persona = {
    nom: document.getElementById("nom6").value,
    edat: Number(document.getElementById("edat6").value),
  };

  const localitzacio = {
    ciutat: document.getElementById("ciutat6").value,
  };

  const objecteFusionat = { ...persona, ...localitzacio };

  document.getElementById(
    "resultatObjecte"
  ).textContent = `${objecteFusionat.nom}, de ${objecteFusionat.edat} anys, viu a ${objecteFusionat.ciutat}`;
}

const numbers = [4, 9, 16, 25];
const squared = numbers.map((n) => n ** 2);
console.log(squared.join(", "));

const numbers2 = [1, 2, 3, 4];

console.log(numbers2.filter(isEven));

function isEven(num) {
  return num % 2 === 0;
}

const numo = [1, 10, 8, 11];

console.log(numo.filter(checkmasdiez));

function checkmasdiez(numo) {
  return numo >= 10;
}

const numeroz = [13, 7, 8, 21];
console.log(numeroz.reduce(myFunc));

function myFunc(total, num) {
  return total + num;
}

const arraygordo = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

console.log(
  arraygordo
    .filter((n) => n >= 10)
    .map((n) => n * 2)
    .reduce((a, b) => a + b, 0)
);

const ages = [11, 12, 13, 14];

function checkAge(age) {
  return age > 10;
}
console.log("Is every element over 10? " + ages.every(checkAge));
console.log(ages.some(checkAge));

let noms = ["Anna", "Bernat", "Clara"];

noms.forEach((item) => {
  console.log(item);
});

let text = "";
for (let x of noms) {
  text += x + " ";
}
console.log(text);

const numerosfi = [1, 2, 3, 4, 5, 6];

console.log(numerosfi.filter(checkPar));

function checkPar(par) {
  return par % 2 === 0;
}

let obj = { nom: "Ona", edat: "25", ciutat: "Barcelona" };

let text4 = "";

for (let x in obj) {
  text4 += obj[x] + " ";
}
console.log(text4);

let numeros = [1, 2, 3, 4, 5, 6];

for (let numero of numeros) {
  console.log(numero);
  if (numero === 5) break;
}

let noms6 = ["Anna", "Bernat", "Clara"];

for (const [index, nom] of noms6.entries()) {
  console.log(`${index}: ${nom}`);
}

const myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("hola, mon(2sec)");
  }, 2000);
});

myPromise.then(function (value) {
  console.log(value);
});

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function verificar() {
  myDisplayer("Verificando...");

  setTimeout(() => {
    let myPromise = new Promise(function (myResolve, myReject) {
      let x = document.getElementById("supri").value;

      if (x === "hola") {
        myResolve("OK");
      } else {
        myReject("Error");
      }
    });

    myPromise.then(
      function (value) {
        myDisplayer(value);
      },
      function (error) {
        myDisplayer(error);
      }
    );
  }, 2000);
}

async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("holi mon 2sec!!");
    }, 2000);
  });
  console.log(await myPromise);
}

myDisplay();

async function myDisplay2() {
  try {
    let myPromise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject("error forzado");
      }, 2000);
    });
    console.log(await myPromise);
  } catch (err) {
    console.log("error fatal!!!!" + err);
  }
}
myDisplay2();

const myPromise1 = new Promise((resolve) => {
  setTimeout(resolve, 2000, "promesa 1, 2 sec");
});
const myPromise2 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "promesa 2, 3 sec");
});

Promise.all([myPromise1, myPromise2]).then((promesas) => {
  console.log("promesas:");
  console.log(promesas[0]);
  console.log(promesas[1]);
});
