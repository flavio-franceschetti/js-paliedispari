// creiamo una funzione per testare se la parola inserita è palindroma o meno
function checkPalindrom(userWord) {
  // trasformiamo la parola inserita in un array per poi girarla riconvertirla in una stringa
  //con .split("") la trasformo in un array e aggiungendo le virgolette divido ogni lettera
  //con .reverse() inverto tutti gli elementi dell'array quindi le lettere
  //con .join("") ritrasformo l'array in una stringa e con le virgolette la stringa verrà tutta attaccata altrimenti viene divisa
  let userwordReverse = userWord.split("").reverse().join("");
  // controllo se la parola invertita è uguale a quella inserita la funzione restituirà true sennò restituirà false
  return userWord === userwordReverse ? true : false;
}
