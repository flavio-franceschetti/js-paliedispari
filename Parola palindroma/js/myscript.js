// reucpero l'input per l'inserimento della parola
const userWord = document.getElementById("user-word");
// recuper il tasto per avviare il check della parola
const checkBtn = document.getElementById("submit");
// recupero il div dove inserire il risultato in pagina
const result = document.getElementById("risultato");

// aggiungo l'evento al tasto submit per il check della parola
checkBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let userWordValue = userWord.value;
  //creo una variabile con il risultato della funzione true o false
  let isPalindrom = checkPalindrom(userWordValue);
  console.log("Risultato della funzione:", isPalindrom);
  //creo la condizione dove se true stampo un messaggio di successo altrimenti stamo un messaggio di fallimento
  isPalindrom === true
    ? (result.innerText = "La tua parola è palindroma!!")
    : (result.innerText = "La tua parola NON è palindroma!!!");
});
