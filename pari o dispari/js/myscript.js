// L’utente sceglie pari o dispari
let userEvenOdd = prompt("Inserisci 'pari' o 'dispari'");
console.log("Pari o dispari inserito da te:", userEvenOdd);

// e inserisce un numero da 1 a 5.
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Numero utente:", userNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function pcRandomNum() {
  return Math.floor(Math.random() * 5) + 1;
}

// assegno ad una costante il risultato della funzione pcRandomNum
let pcNum = pcRandomNum();
console.log("Numero Pc:", pcNum);

// Sommiamo i due numeri quello dell'utente e quello del pc
function evenOrOdd(userNumber, pcNum) {
  risultato = userNumber + pcNum;
  //  Stabiliamo se la somma dei due numeri è pari o dispari
  return risultato % 2 === 0 ? "pari" : "dispari";
}
console.log("Risultato:", evenOrOdd(userNumber, pcNum));

// Dichiariamo chi ha vinto. se il return della funzione è uguale al pari o dispari inserito dall' utente stampo un messaggio di vincita altrimenti uno di perdita
evenOrOdd(userNumber, pcNum) === userEvenOdd
  ? console.log("Congratulazioni hai vinto!!!")
  : console.log("Mi dispiace hai perso!!!");
