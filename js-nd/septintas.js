/*
7.Parašykite programą, kuri žinantmėnesio numerį n atspausdintų to mėnesio dienų kiekį d. 
(tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)
*/
let month = 5;
daysInMonth = new Date(2022, month, 0).getDate();
console.log('Pasirinktame menesyje yra:', daysInMonth);
const day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
/////////////////

let days = [28, 30, 31];
let menuo = 5;

if (menuo === 2) {
    days = days[0];
} else if (menuo === 0 || menuo === 2 || menuo === 4 || menuo === 6 || menuo === 7 || menuo === 8 || menuo === 9) {
    days = days[1]
} else {
    days = days[2]
} 
    console.log(`Sio menesio dienu skaicius yra ${days}`);
