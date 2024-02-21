
const etaPasseggero = parseFloat(prompt("Scrivere la propria età"));

console.log(etaPasseggero);

const kilometriViaggio = parseFloat(prompt("Inserire lunghezza tragitto"));

console.log(kilometriViaggio);

let scontoViaggio = 0.0;

if (etaPasseggero < 19) {
    scontoViaggio = 0.80
} 
else if (etaPasseggero > 65) {
    scontoViaggio = 0.60
} else {
    scontoViaggio = 1.0;
}

const costoViaggio = kilometriViaggio * 0.21 * scontoViaggio;

console.log(costoViaggio);

const costoViaggioFixed = costoViaggio.toFixed(2);

document.getElementById('stampa-costo').innerHTML = 
` <p>Il prezzo del tuo biglietto è di ${costoViaggioFixed}€.</p> `;
 