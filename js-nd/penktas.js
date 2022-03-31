/*
5.Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. 
Parduotuvėje porcija ledų kainuoja p centų. Parašykite programą, kuri suranda, 
kiek porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. 
Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10. 
Gali prireikti panaudoti Math.floor() funkciją. 
*/

const a = 50;//pinigai
let p = 20; //kaina
const p1 = Math.floor(a / p)
const liks = a- (p * p1 )
console.log('Sualius nusipirks', p1, 'porcijas,', 'liks centu', liks ) ;