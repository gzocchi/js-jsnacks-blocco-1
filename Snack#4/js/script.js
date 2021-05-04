// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che,
// partendo da una lista di nomi e una lista di cognomi,
// generi una coppia nome-cognome casuale,
// così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa,
// da stampare in pagina, utilizzando il tag adatto alle liste.
var invited = [];
var element = document.getElementById("invitati");

// aggiungo 10 persone agli invitati
for (var i = 0; i < 10; i++) {
    invited.push(humanGenerator());
};
invited.sort();
console.log(invited);

ulListStamp(invited, element);

// FUNCTION
function casualNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function humanGenerator () {
    var nameArray = ["Leonardo", "Francesco", "Lorenzo", "Alessandro", "Mattia", "Sofia", "Aurora", "Giulia", "Ginevra", "Alice"];
    var surnameArray = ["Rossi", "Ferrari", "Russo", "Bianchi", "Romano", "Gallo", "Costa", "Fontana"];
    var human = [];

    var casualName = nameArray[casualNumber(0, (nameArray.length - 1))];
    human.push(casualName);

    var casualSurame = surnameArray[casualNumber(0, (surnameArray.length - 1))];
    human.push(casualSurame);

    return human.join(" ");
};

function ulListStamp (arrayList, elementID) {
    for (var i = 0; i < arrayList.length; i++) {
        elementID.innerHTML += "<li>" + arrayList[i] + "</li>";
    };
}