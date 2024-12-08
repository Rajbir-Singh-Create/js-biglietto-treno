let minorAgeDiscout = 0;
let elderAgeDiscount = 0;
let ticketPrice = 0;
let finalPrice = 0;
const pricePerKm = 0.21;

let kmToCommute = prompt("Inserisci il numero di Km da percorrere");

if(isNaN(kmToCommute)){
    alert("Inserisci un numero per favore");
} else {
    kmToCommute = Number(kmToCommute);
    console.log(kmToCommute);
    ticketPrice = pricePerKm * kmToCommute;
    console.log(ticketPrice);
    // let age = prompt("Inserisci la tua età");
}

let age = prompt("Inserisci la tua età");

if(isNaN(age)){
    alert("Inserisci un numero per favore");
} else {
    age = Number(age);
    console.log(age);
}

// price applied for minor and elderly people
if(age < 14 || age > 100){
    alert("inserisci un numero di età valido");
} else if (age >= 14 && age <= 18){
    minorAgeDiscout = ticketPrice - ((ticketPrice * 20) / 100);
    finalPrice = minorAgeDiscout.toFixed(2).replace(".",",");
    alert(`Il prezzo finale è di € ${finalPrice}`);
} else if(age >= 65 && age <= 100){
    elderAgeDiscount = ticketPrice - ((ticketPrice * 40) / 100);
    finalPrice = elderAgeDiscount.toFixed(2).replace(".",",");
    alert(`Il prezzo finale è di € ${finalPrice}`);
} else {
    finalPrice = ticketPrice.toFixed(2).replace(".",",");
    alert(`Il prezzo finale è di € ${finalPrice}`);
}