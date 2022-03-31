/*
8.Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką. 
Jei iškrenta skaičius 1, 3 arba 5 –kambarį tvarko jaunėlis, jei 2, 4 arba 6 –vyresnėlis. 
Parašykite programą, kuri įvedus iškritusį skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, 
arba „Kambarį tvarkys vyresnėlis“.Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys jaunėlis. 
Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis.
*/

let jaunelis = [1, 3, 5];
let vyresnelis = [2, 4, 6];
const k = 1;
if (k % 2 == 0 ){
    console.log('kambari tvarkys jaunelis');
    
} else {
    console.log('kambari tvarkys vyresnelis');
}


