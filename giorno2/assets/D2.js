/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let nume1 = 15;
let nume2 = 25;

if (nume1 > nume2) {
  console.log("il numero " + nume1 + " è più grande" + nume2)
} else if (nume1 < nume2) {
  console.log("il numero" + nume1 + "è più piccolo di" + nume2)
} else {
  console.log("il numero" + nume1 + "è uguale a " + nume2)
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const notEqual = 10

if (10 !== 5) {
  console.log("not equal")
} else {
  console.log("equal")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
const divisibilePer5 = 5

if (divisibilePer5 % 5 === 0) {
  console.log("divisibile per 5")
} else {
  console.log("non divisibile per 5")
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numero1 = 4
let numero2 = 4

if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8) {
  console.log("verificata")
} else {
  console.log("non verificata")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 80;
const speseSpedizione = 10
let totDaPagare;

if (totalShoppingCart >= 50) {
  console.log("totDaPagare = TotalShoppingCart")
} else {
  totDaPagare = totalShoppingCart + speseSpedizione;
}
console.log("totDaPagare = totalShoppingCart + speseSpedizioni")



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
const sconto = 0.20;
let prezzoPrincipale = 100;


if (prezzoPrincipale = 100) {
  console.log("totDaPagare = prezzoPrincipale * 0,80")
}



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let numeri1 = 19
let numeri2 = 28
let numeri3 = 33

if (numeri1 < numeri2) {
  console.log("valore minore")
} else if (numeri2 > numeri3) {
  console.log("valore medio")
} else {
  console.log("valore maggiore")
}
let numeri = [16, 28, 33];
numeri.sort();
console.log(numeri)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
// 
function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

console.log(isNumber(42));
console.log(isNumber('42'));
console.log(isNumber(NaN));
console.log(isNumber(null));
console.log(isNumber(3.14));
console.log(isNumber(undefined));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function isEven(number) { // questa funziona ci dice se il numero è pari, cosa fa? divide è sa da resto zero è pari
  return number % 2 === 0;
}


function isOdd(number) {  // questa funziona ci dice se il numero è dispari, cosa fa? divide è sa da resto diverso da zero è dispari
  return number % 2 !== 0;
}

let num = 7;

if (isEven(num)) {        // qua andiamo a dichiarare cosa stampare facendo le tre ipotesi 
  console.log(`${num} è un numero pari.`);
} else if (isOdd(num)) {
  console.log(`${num} è un numero dispari.`);
} else {
  console.log(`${num} non è un numero valido.`);
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7; 
if (val < 5){
  console.log("Valore minore di 10")
} else if (val > 10) {
  console.log("Valore minore di 5")
} else {
  console.log("valore compreaso tra 5 e 10")
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.città = "Toronto"
console.log(me);
console.log("********");

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me)
console.log("*********")

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);
console.log("********")
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = [];

for (let i = 1; i <= 10; i++) {
    array.push(i);
}

console.log(array);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array.splice (9, 1, 100); 
console.log(array); 

/* SCRIVI QUI LA TUA RISPOSTA */
