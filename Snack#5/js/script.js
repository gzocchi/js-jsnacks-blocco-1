// Snack #5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.
var numberArray = [];

for (var i = 0; i < 6; i++) {
    var question = parseInt(prompt("Dimmi un numero"));
    if (isOdd(question)) {
        numberArray.push(question);
    };
};

console.log("I numeri dispari tra quelli indicati sono:", numberArray);

// FUNCTION
function isOdd (num) {
    return num % 2 != 0;
}