/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let calcolo = area (2,40)

function area(l1,l2) {
    return  l1*l2
}

console.log (calcolo);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeri = crazySum(8,20)

function crazySum(first,first2) {
    if (first!=first2)
    return first+first2
    else return (first+first2)*3
}
    
console.log(numeri);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let diff = crazyDiff (20)

function crazyDiff(diff) {
    if (diff<19)
    return diff-19
    else return (diff-19)*3
}

console.log(diff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n = boundary(6) 

function boundary(n) {
    if (n>20 && n<100 || n==400)
    return true
    else return false
}

console.log (n);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let str = ("EPICODE" + " ")
let str2 = epify("il corso che fa per te!")

function epify(str2) {
    if (str!=str2)
    return str+str2
    else return str2
    
}

console.log (str2);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero = check3and7(33)

function check3and7(numero) {
    if (numero % 3===0 || numero % 7===0) {
        return true 
    }
    
    else return false

}

console.log(numero);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let str3 = reverseString("EPICODE")

function reverseString(str3) {
    return str3.split("").reverse().join("");

}

console.log(str3);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let str4 = upperFirst("il sole sorge ad est e tramonta ad ovest!")

function upperFirst(str4) {
    let wordsArray = str4.split(" ");
    let capitalizedWords = [];
    for (let word of wordsArray) {

        let firstLetter = word[0].toUpperCase();
        console.log(firstLetter);
        word = firstLetter + word.slice(1);
        console.log(word);
        capitalizedWords.push(word)
    }
    
    return capitalizedWords.join(" ");

}






/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let str5 = ("Oggi il tempo è brutto")

function cutString(str5) {
    

}

console.log(str5);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
