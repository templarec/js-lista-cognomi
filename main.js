
//creao array
var listaCognomi = ["Freddie", "Pirlo", "Goa", "Alberto"];
//chiedo il cognome
var input = prompt("Inserisci il tuo cognome:");
//inserisco in array
listaCognomi.push(input);

//ordino con bubble sort:
do {// faccio lo scambio fino alla penultima posizione dell'array
    // scambio l'iesimo indice con il suo successivo se è maggiore
    // fino al penultimo perchè ad ogni scansione dell'array il più grande va in fondo
    // finchè non ho più scambi da fare (cioè l'array è ordinato)
    var scambio = false;
    for (i = 0; i < listaCognomi.length - 1; i++)
        if (listaCognomi[i] > listaCognomi[i+1]) {
            var appoggio = listaCognomi[i];
            listaCognomi[i] = listaCognomi[i+1];
            listaCognomi[i+1] = appoggio;
            scambio = true;
        }
} while (scambio);
//output lista
var output = document.getElementById("lista");
for (i=0; i < listaCognomi.length; i++){
    output.innerHTML += "<li>" + listaCognomi[i] + "</li>";
}
//output posizione iesima dell'array + 1 (numero umano)
i=0;
output = document.getElementById("output");
while ( i < listaCognomi.length) {
    if (listaCognomi[i] === input ){
        output.innerHTML += "Sei in posizione: " + (i+1);
        break;
    }
    i++;
}