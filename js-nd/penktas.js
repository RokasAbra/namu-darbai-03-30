/*
5.Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. 
Parduotuvėje porcija ledų kainuoja p centų. Parašykite programą, kuri suranda, 
kiek porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. 
Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10. 
Gali prireikti panaudoti Math.floor() funkciją. 
*/
const a = 50;
let k = 2; //porcijos
let p = 20; //kaina

console.log('Sualius nusipirks', k, 'porcijas,', 'liks centu', Math.floor(a-(k*p) ) );