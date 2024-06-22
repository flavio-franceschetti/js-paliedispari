// L’utente sceglie pari o dispari
let userEvenOdd = document.getElementById("input-game");
// e inserisce un numero da 1 a 5.
let userNumber = document.getElementById("input-number");
// recupero il bottone per giocare
let playBtn = document.getElementById("submit");
// prendo l'elemento div per inserire i risultati del gioco
let result = document.getElementById("risultati");

// creo un evento al click del tasto gioca
playBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // prendo i valori degli input che ha inserito l'utente
  userEvenOdd = userEvenOdd.value;
  userNumber = parseInt(userNumber.value);
  console.log("numero utente:", userNumber);
  // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  function pcRandomNum() {
    return Math.floor(Math.random() * 5) + 1;
  }

  // assegno ad una costante il risultato della funzione pcRandomNum
  let pcNum = pcRandomNum();
  console.log("Numero Pc:", pcNum);

  // Sommiamo i due numeri quello dell'utente e quello del pc
  function evenOrOdd(userNumber, pcNum) {
    let risultato = userNumber + pcNum;
    //  Stabiliamo se la somma dei due numeri è pari o dispari
    return risultato % 2 === 0 ? "pari" : "dispari";
  }
  console.log(evenOrOdd(userNumber, pcNum));
  // Dichiariamo chi ha vinto. se il return della funzione è uguale al pari o dispari inserito dall' utente stampo un messaggio di vincita altrimenti uno di perdita
  evenOrOdd(userNumber, pcNum) === userEvenOdd
    ? (result.innerHTML = `<p>Numero inserito da te: ${userNumber}
      Numero generato dal'Pc: ${pcNum}</p><div>HAI VINTOOO!!!</div>`)
    : (result.innerHTML = `<p>Numero inserito da te: ${userNumber}
      Numero generato dal'Pc: ${pcNum}</p><div>HAI PERSO!!!</div>`);
});
