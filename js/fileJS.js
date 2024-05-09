// il prezzo del biglietto è definito in base ai km (0.276 € al km)
// va applicato uno sconto del 21% per i minorenni
// va applicato uno sconto del 42% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) 
// [questo richiederà un minimo di ricerca]



// - Chiedo i km da percorrere

let tripDistance = parseInt(prompt("Quanti km devi percorrere?"));

// Chiedo l'età

let clientAge = parseInt(prompt("Quanti anni hai?"));

// Fisso il prezzo per km

let ticketPrice = (tripDistance * 0.276);



// Determino gli sconti per età

if (clientAge > 65){
    let ticketPrice = tripDistance - ((tripDistance * 100) / 42);
}

if (clientAge < 18){
    let ticketPrice = tripDistance - ((tripDistance * 100) / 21);
}

// Arrotondo il prezzo

let roundedPrice = ticketPrice.toFixed(2);

// Stampo il risultato

console.log(roundedPrice)

