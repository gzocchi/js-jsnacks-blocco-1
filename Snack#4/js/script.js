// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che,
// partendo da una lista di nomi e una lista di cognomi,
// generi una coppia nome-cognome casuale,
// così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa,
// da stampare in pagina, utilizzando il tag adatto alle liste.

var nameArray = ["Leonardo", "Francesco", "Lorenzo", "Alessandro", "Mattia", "Sofia", "Aurora", "Giulia", "Ginevra", "Alice"];
var surnameArray = ["Rossi", "Ferrari", "Russo", "Bianchi", "Romano", "Gallo", "Costa", "Fontana"];
var invited = [];

// Nuova persona da creare
var human = []; 
console.log("persona iniziale:", human);
// Nome casuale
var casualName = nameArray[casualNumber(0, (nameArray.length - 1))];
human.push(casualName)
console.log("Nome casuale:", casualName);
console.log("persona_nome:", human);
// Cognome casuale
var casualSurame = surnameArray[casualNumber(0, (surnameArray.length - 1))];
human.push(casualSurame);
console.log("Cognome casuale:", casualSurame);
console.log("persona_nome+cognome:", human);
// Unisco la persona
human = human.join(" ")
console.log("Persona finale:", human);

// aggiungo la persona creata agli invitati
invited.push(human);
console.log(invited);


// FUNCTION
function casualNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }