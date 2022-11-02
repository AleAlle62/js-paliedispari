// /*
// ES 1 Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// passaggi: 
// . chiedere la parola
// . metterla in un array
// . divido la singola parola per ogni lettera in modo da verificare che sia uguali
// */



//far inserire la parola
const inputWord = prompt('Inserire una parola')

//dividere le varie lettere della parola
const dividedWord = inputWord.split('')

// //una volta divisa, rigirarla
const wordArray = dividedWord.reverse()


// usare prorpieta .join in modo che non ci sia nulla in mezzo alle lettere
let invertedWord = dividedWord.join('');

// // creazione della funzione che richiama le parole per metterle a confronto
function palindromeWord(wordA, wordB){
//     // creazione della condizione per cui se la prima parola è uguale alla saconda allora è palindroma
    if (wordA == wordB) {
        return('PAROLA PALINDROMA')
    } else {
        return('NON PALINDROMA')
    }
}

// // inizializzazione per cui il risultato che stampa a schermo è dato dalla funzione palindroma, che prende come valori la parola di input e la parola invertita
let Finalresult = palindromeWord( inputWord, invertedWord);

// // // stampare in console il risultato 
console.log(Finalresult);




// /*
// ES 2
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// */


/*
. far scegliere pari e dispari all'utente
. fa poi inserire un numero da 1 a 5
. fare una funzione che generi un numero random per il pc da 1 a 5
. sommiamo i numeri del pc e dell'utente 
. diciamo se la somma ottenuta sia pari o dispari
. comunichiamo all'utente il vincitore  
*/

// scelta di pari o dispari dell'utente 
let utenteChois = prompt('scegliere pari o dispari');
console.log('la scelta dell utente è:' + utenteChois)

// scelta del numero da 1 a 5 da parte dell'utente
let inputNumber = parseInt(prompt('inserire numero da 1 a 5'));
console.log('il numero dell utente è:' + inputNumber);

// round arrotonda, random * 5 da un numero casuale da 1 a 5 
let randomPC = parseInt(Math.floor(Math.random() * 5) + 1); 
console.log('il numero casuale del pc è:' + randomPC);


// funzione somma dei due numeri 
function sum (a,b){
    // dichiarazione variabile della somma dei due numeri
    if((( a + b ) %2) === 0) {
        return 'il risultato è: pari';
    }
    else {
        return 'il risultato è: dispari';
    }
}

// risultato della funzione 
let result = sum ( inputNumber, randomPC );
console.log(result);

// funzione che stampa la vottoria o la sconfitta dell'utente
function allertWoL ( d , e ){
    if (d == e){
        return'HAI VINTO '
    } else {
        return'HAI PERSO'
    }
}

// se il primo risultato è uguale alla prima scelta dell'utente allora stampa la funzione
let result2 = allertWoL (utenteChois, result)
console.log(result2);




