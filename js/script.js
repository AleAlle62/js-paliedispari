/*
ES 1 Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


passaggi: 
. chiedere la parola
. metterla in un array
. divido la singola parola per ogni lettera in modo da verificare che sia uguali
*/



//far inserire la parola
const inputWord = prompt('Inserire una parola')

//dividere le varie lettere della parola
const dividedWord = inputWord.split('')

//una volta divisa, rigirarla
const wordArray = dividedWord.reverse()


// usare prorpieta .join in modo che non ci sia nulla in mezzo alle lettere
let invertedWord = dividedWord.join('');

// creazione della funzione che richiama le parole per metterle a confronto
function palindromeWord(wordA, wordB){
    // creazione della condizione per cui se la prima parola è uguale alla saconda allora è palindroma
    if (wordA == wordB) {
        return('PAROLA PALINDROMA')
    } else {
        return('NON PALINDROMA')
    }
}

// inizializzazione per cui il risultato che stampa a schermo è dato dalla funzione palindroma, che prende come valori la parola di input e la parola invertita
let result = palindromeWord( inputWord, invertedWord);

// stampare in console il risultato 
console.log(result);











// const parolaInvertita = parolaDivisaArray.join('');
// function palindroma(testo1, testo2){
//     if(testo1==testo2){
//         return 'la parola inserita è palindroma';  
//     } else{
//         return'la parola inserita NON è palindroma';
//     }
// }
// risultato=palindroma(varParola, parolaInvertita);
// alert (risultato);










/*
ES 2
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


