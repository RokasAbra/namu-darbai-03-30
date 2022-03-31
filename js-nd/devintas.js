/*
9.Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri metai. 
Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms skiriamas eilės numeris. 
Parašykite programą, kuri surastų m-ųjų metų olimpinių žaidynių numerį n. Jei metai neolimpiniai,
 turi būti spausdinama „Metai neolimpiniai“. Pasitikrinkite. Kai m = 1904, turi būti spausdinama: 
 n = 3. Kai m = 2005, turi būti spausdinama: Metai neolimpiniai.

*/ 
m = 1912;

console.log(m)

if ( (m - 1896 ) % 4 === 0 ) {
    n = 1 + ((m - 1896) / 4) ;
    console.log(`${m} metais vyko ${n}-osios olimpines zaidynes `);
    
} else { 
    console.log('Pasirinkti metai neolimpiniai');
    
}
