//Namu darbai 03/30
/*Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

const a = 2;  
const b = 3;  
const c = 4;  
const d = 5;  
console.log(a + b + c + d);
console.log('--------------');
const e = 'Sveiki';
const f = 'mano';
const g = 'vardas';
const j = 'Rokas';
console.log(e + ' ' + f + ' ' + g + ' ' + j);
console.log('-------strings--------');
const studentai = [ 'Petras,', 'Rokas,', 'Jonas.']

console.log(studentai);

console.log('--------skaiciavimas---------');

const a1 = 0;
const a2 = 2;
const a3 = 3;
const a4 = 4;
const a5 = 6;
console.log(a1 - a2 + a3 - a4 + a5);

console.log('----------------');
const vaikai = [ 'Jonukas, ', ' Onute, ', 'Povilas, ']
console.log(vaikai);


/* 1.Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? Neigiamas –„Blogas“, teigiamas „Geras“. 
Pasitikrinkite: Kai n = 20, turėtume gauti: Skaičius geras.
*/
console.log('----ND:1------');
const n = 20;
if ( n % 2 == 0) {
   console.log('Skaicius yras geras');
}else {
console.log('Skaicius yra blogas');
}
/*2.Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą, kuri nustatytu, kaip turi pasielgti mokinys? 
Žinome šviesoforo spalvos kodą n, 1-žalia, 2-geltona, 3-raudona. Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.
 */
console.log('--------2--------');

const zalias = 1;
const geltonas = 2;
const raudonas = 3;

if ( zalias >= 2 ){
    console.log('sustokite');

}else {
    console.log('Palaukite');
}

/*3.Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas į dėžes. Gintautas turi d dėžių ir k knygų. 
Parašykite programą, kuri apskaičiuotų, ar Gintauto turimos knygos tilps į dėžes, jei į vieną dėžę telpa po n knygų. 
Pasitikrinkite: Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos telpa į dėžes; kai d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos netelpa į dėžes. */

console.log('-------3:-------');
const boxes = 3 ;
const books = 18 ;
const size = 5;

console.log('I ' + boxes + ' dezes ' + ' telpa ' + ' po ' + size + ' knygas ' );
const fit = boxes * size;
console.log('Dėžese telpa: ', fit);

if (books <= fit ) {
    console.log('Knygos telpa į dėžes');
}else console.log('Knygos netelpa į dėžes');


/*4.Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu vienetu, o mažesnį padidintu vienetu. */

let didesnis = 7;
let mazesnis = 6;
if (didesnis > mazesnis) {
    console.log(--didesnis);
}else console.log(++mazesnis);

/*5.Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų kainuoja p(money) centų. Parašykite programą, kuri suranda, kiek porcijų ledų k(ledai) nusipirks Saulius ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10. Gali prireikti panaudoti Math.floor() funkciją. */

console.log('[------5------]');
const money = 50;
let ledai = 20;
let m = money - ledai;
let liks = m - ledai
let porcijos = money / ledai; 
q= Math.floor(porcijos);
   
console.log('liko pinigu:', m);
console.log('-----');
console.log('Saulius nusipirks ',  q, 'porcijas, ', 'liks ', liks, ' centu'  );

/*6.Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti: Trikampį sudėlioti negalima. */

console.log('-------6--------');
let n6 = 6;
const krastine = n6 / 3;


if (krastine == n6 / 3){
    console.log('Trikampi sudelioti galima');
}else console.log('Trikampi sudelioti negalima');

/*7.Parašykite programą, kuri žinantmėnesio numerį n atspausdintų to mėnesio dienų kiekį d. (tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)
 */

//const month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] 
//let months = month[day.getMonth()];
console.log(months);


console.log('---------');
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const l = new Date();
let month = months[d.getMonth(January)];
document.getElementById("demo").innerHTML = month;

console.log(l);

/*8.Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką. Jei iškrenta skaičius 1, 3 arba 5 –kambarį tvarko jaunėlis, jei 2, 4 arba 6 –vyresnėlis. Parašykite programą, kuri įvedus iškritusį skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, arba „Kambarį tvarkys vyresnėlis“.Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys jaunėlis. Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis. */



