// debug rules

// let debug= "degugtxt";
// console.log(debug);

const pwname= prompt ("Ciao! Inserisci il tuo nome...");

const pwsurname= prompt ("Grande! Inserisci il tuo cognome...");

const pwcolor= prompt ("Ottimo" + pwname + ", ora scegli un colore ed è fatta!");

const genpw=(pwname) + (pwsurname) + (pwcolor) + "21";  

document.getElementById("pw").innerHTML=(genpw);

console.log("la password segheta è: " + (genpw));

