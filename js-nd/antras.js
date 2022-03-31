/*
2.Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. 
Sudarykite programą, kuri nustatytu, kaip turi pasielgti mokinys? 
Žinome šviesoforo spalvos kodą n, 1-žalia, 2-geltona, 3-raudona. 
Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.
*/


const zalias = 1;
const geltonas = 2;
const raudonas = 3;

let n = 2;

if (n > zalias) {
    console.log('Palaukite');
    
}else if (n < zalias){
    console.log('galite eiti');
}

let sf = 2
if (sf === 1) {
    console.log('Galite eiti');   
}else if (sf === 2) {
    console.log('Palaukite');
}else console.log('Eiti drauzdiama');