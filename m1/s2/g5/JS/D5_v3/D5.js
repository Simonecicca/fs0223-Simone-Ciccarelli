/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log(pets)

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const fromIndex = pets.indexOf('redfish');
const toIndex = pets.length;

const element = pets.splice(fromIndex, 1)[0];
console.log(pets);

pets.splice(pets.length, 0, element);

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars.forEach((element) => {
  element.licensePlate = 69;
});

console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/


cars.push ({
  brand: 'Fiat',
  model: 'Palio',
  color: 'Green',
  trims: ['Soft, clean'],
})

console.log(cars)

for (const element of cars) {
  element.trims.pop();
}

console.log(cars)



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = []

cars.forEach (element => {
  justTrims.push(element.trims[0])
});

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (const element of cars) {

  if(element.color.startsWith('b')) {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}

console.error();

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let index = 0;

while (numericArray[index] != 32) {
  console.log(numericArray[index])
  index++
  
}



/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]

const charactersArrayDue = []


for (let index = 0; index < charactersArray.length; index++) 
{
  switch (charactersArray[index]) {
    case  'a':
      charactersArrayDue.push(1);
      break;
    case  'b':
      charactersArrayDue.push(2);
      break;
    case  'c':
      charactersArrayDue.push(3);
      break;
    case  'd':
      charactersArrayDue.push(4);
      break;
    case  'e':
      charactersArrayDue.push(5);
      break;
    case  'f':
      charactersArrayDue.push(6);
      break;
    case  'g':
      charactersArrayDue.push(7);
      break;
    case  'h':
      charactersArrayDue.push(8);
      break;
    case  'i':
      charactersArrayDue.push(9);
      break;
    case  'l':
      charactersArrayDue.push(10);
      break;
    case  'm':
      charactersArrayDue.push(11);
      break;
    case  'n':
      charactersArrayDue.push(12);
      break;
    case  'o':
      charactersArrayDue.push(13);
      break;
    case  'p':
      charactersArrayDue.push(14);
      break;
    case  'q':
      charactersArrayDue.push(15);
      break;
    case  'r':
      charactersArrayDue.push(16);
      break;
    case  's':
      charactersArrayDue.push(17);
      break;
    case  't':
      charactersArrayDue.push(18);
      break;
    case  'u':
      charactersArrayDue.push(19);
      break;
    case  'v':
      charactersArrayDue.push(20);
      break;
    case  'z':
      charactersArrayDue.push(21);
      break;


  }
}

console.log(charactersArrayDue)