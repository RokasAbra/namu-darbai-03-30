/*
7.Parašykite programą, kuri žinantmėnesio numerį n atspausdintų to mėnesio dienų kiekį d. 
(tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)
*/
let month = 5;
daysInMonth = new Date(2022, month, 0).getDate();
console.log('Pasirinktame menesyje yra:', daysInMonth);
/////////////////////////////////////////////////////////////////////

const menuo = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

console.log(`Sio menesio dienu skaicius yra ${menuo[10]}`);

let n=5;
console.log(`ats. d=${menuo [n]}`);

