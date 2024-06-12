// chiediamo all'utente tramite il prompt una parola per controllare se è palindroma o no
const userWord = prompt("Inserisci una parola e ti dirò se è palindroma o no");
console.log(userWord);

//creo una variabile con il risultato della funzione true o false
let isPalindrom = checkPalindrom(userWord);
console.log("Risultato della funzione:", isPalindrom);
//creo la condizione dove se true stampo un messaggio di successo altrimenti stamo un messaggio di fallimento
isPalindrom === true
  ? console.log("La tua parola è palindroma!!")
  : console.log("La tua parola NON è palindroma!!!");
