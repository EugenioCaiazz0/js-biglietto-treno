/*const nome = prompt('Scrivi il tuo nome');

const cognome = prompt('Scrivi il tuo cognome');

const favColor = prompt("Scrivi il tuo colore preferito");

let psswrd = nome + cognome + favColor + "24";

document.getElementById('pswrd-assign').innerHTML = 
` <p>La tua password è ${psswrd} </p> `;

console.log(psswrd);*/

const etaPasseggero = prompt("Scrivere la propria età");

const kilometriViaggio = prompt("Inserire lunghezza tragitto");

let costoViaggio = kilometriViaggio * 0.21 * scontoViaggio;

if (etaPasseggero < 19) {
    scontoViaggio = 0.80
} 
else if (etaPasseggero > 65) {
    scontoViaggio = 0.60
} 

let costoViaggioFixed = costoViaggio.toFixed(2);

document.getElementById('stampa-costo').innerHTML = 
` <p>Il prezzo del tuo biglietto è di ${costoViaggioFixed}€.</p> `;