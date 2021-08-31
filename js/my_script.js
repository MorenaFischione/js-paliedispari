/**
 * Palidroma
 *  1. Chiedere all’utente di inserire una parola
 *  2. Creare una funzione per capire se la parola inserita è palindroma
 */

/**
 * creo una funzione che verifica se la parola è palindroma con risultato booleano
 * chiedo all'utente di inserire una parola
 * se la parola inserita è palindroma stampo alert "la parola inserita è palindroma"
 * se la parola inserita non è palindroma stampo alert "mi dispiace. la parola inserita non è palindroma"
 */


// function parolaPalindroma (parola) {
//     if(parola.split("").reverse().join("") === parola){
//         return true;
//     } else {
//         return false;
//     }
// }

// let parolaUtente = prompt("inserisci un parola Palindroma");
// console.log(parolaUtente);

// if (parolaPalindroma(parolaUtente)) {
//     alert("la parola inserita è palindroma");
// } else {
//     alert("mi dispiace. la parola inserita non è palindroma");
// }


/**
* Pari e Dispari
* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
* Sommiamo i due numeri
* Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
* Dichiariamo chi ha vinto.
*/

/**
 * 1 chiedo all'utente di scegliere se pari o dispari;
 * 2 chiede all'utente di inserire un numero da 1 a 5;
 * 3 generiamo un numero random da 1 a 5;
 * 4 
 */

let sceltaPariDispari = prompt("inserisci la parola pari o dispari");
let sceltaNumero = parseInt(prompt("scegli un numero da 1 a 5"));

if ( (sceltaNumero < 1) && (sceltaNumero > 5) ) {
    alert("mi dispiace devi inserire un numero tra 1 e 5 adesso te ne assegno uno io");
} else {
    console.log(sceltaNumero);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  

let numeroRandom = getRandomInt(1, 5);
console.log(numeroRandom);


function sommaPariDispari(numero1, numero2) {
    let somma = numero1 + numero2;
    if (somma % 2 == 0){
        console.log("il numero " + somma + " è pari");
        return somma;
        
    } else {
        console.log("il numero " + somma + " è dispari");
        return somma;
    }
}


let sommaTot = sommaPariDispari(sceltaNumero, numeroRandom);
console.log(sommaTot);

if ((sommaTot % 2 == 0) && (sceltaPariDispari === "pari")){
    console.log("hai vinto");
} else {
    console.log("hai perso");
} 