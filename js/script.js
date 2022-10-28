/*
ES 1 Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


passaggi: 
. chiedere la parola
. metterla in un array
. divido la singola parola per ogni lettera in modo da verificare che sia uguali
*/



let inputParola = toString(prompt('inserisci una parola'));
var arrayParola = [];
arrayParola.push(inputParola);



if(arrayParola == inputParola){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}


/*
ES 2
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


