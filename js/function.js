// creiamo una funzione per testare se la parola inserita è palindroma o meno
function checkPalindrom(parola) {
  // trasformiamo la parola inserita in un array per poi girarla riconvertirla in una stringa
  //con .split("") la trasformo in un array e aggiungendo le virgolette divido ogni lettera
  //con .reverse() inverto tutti gli elementi dell'array quindi le lettere
  //con .join("") ritrasformo l'array in una stringa e con le virgolette la stringa verrà tutta attaccata altrimenti viene divisa
  let parolaReverse = parola.split("").reverse().join("");
  console.log(parolaReverse);
  // cotrolliamo se la parola girata è uguale alla parola inserita
  // se si stampiamo la conferma che la parola è palindroma
  // altrimenti il contrario
}
checkPalindrom();

// let original = "Hello World";
// let reversed = original.split("").reverse().join("");
// console.log(reversed);
