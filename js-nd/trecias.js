/*
3.Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas į dėžes.
 Gintautas turi d dėžių ir k knygų. Parašykite programą, kuri apskaičiuotų, ar Gintauto turimos knygos tilps 
 į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite: Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas 
 pranešimas: Knygos telpa į dėžes; kai d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: 
 Knygos netelpa į dėžes.
*/

let d = 2; //dezes
let k = 15; //knygos
let n = 5; //kiek telpa
const kiekTelpaKnygu = d * n;
console.log(kiekTelpaKnygu);

if (kiekTelpaKnygu >= k) {
    console.log('Knygos telpa i dezes');
} else {
    console.log('Knygos netelpa i dezes');
}

