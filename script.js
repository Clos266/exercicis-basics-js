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
