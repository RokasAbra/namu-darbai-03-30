/*
9.Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri metai. 
Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms skiriamas eilės numeris. 
Parašykite programą, kuri surastų m-ųjų metų olimpinių žaidynių numerį n. Jei metai neolimpiniai,
 turi būti spausdinama „Metai neolimpiniai“. Pasitikrinkite. Kai m = 1904, turi būti spausdinama: 
 n = 3. Kai m = 2005, turi būti spausdinama: Metai neolimpiniai.

*/
 let pirmoSIosOlimpines = 1896;
 let olimpiniaiMetai = pirmoSIosOlimpines+=4;
 console.log(olimpiniaiMetai);

 console.log('-----------------');

 for (let i = 1896; i < 2022; i+=4) {
     olimpiniaiMetai = i;
     
     console.log(i);
 }
