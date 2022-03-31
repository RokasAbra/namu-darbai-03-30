/*
Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. 
Į gimnaziją Petro kelionė trunka m2 minučių. Parašykite programą, 
kuri ekrane parodytų pranešimą apie tai, ar Petras nepavėluos į pamoką, 
prasidedančią v valandų ir m minučių. 
Pasitikrinkite: jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: 
Petras į pamoką pavėluos; jei v1 = 8, m1 = 29, m2 = 23, v = 9, m = 5, turi būti: 
Petras į pamoką nepavėluos.
*/

let v1 = 8; //valandos
let m1 = 29; //minutes
let m2 = 43; //keliones laikas
let v = 9;
let m = 5;

const kiekMinuciu = v1 * 60 + m1;
console.log(kiekMinuciu);
const kadaPaveluos = v * 60 + m;
console.log(kadaPaveluos);
if (kadaPaveluos <= kiekMinuciu + m2 ) {
    console.log('Petras i pamoka paveluos');
} else {
    console.log('Petras i pamoka nepaveluos');
}
console.log('--------------');

