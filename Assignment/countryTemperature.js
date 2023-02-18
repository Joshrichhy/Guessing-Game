let new_array = [
    [null,
   CountryOne = {
        name: "United States",
        population: 331449281,
        temperature: 15,
        currency: "Dollar"},

    CountryTwo = {
        name: "China",
        population: 1439323776,
        temperature: 18,
        currency: "Chinese Yen"},


    CountryThree = {
        name: "India",
        population: 1366417754,
        temperature: 20,
        currency: "Indian Rupee"}],[

    CountryFour = {
        name: "Indonesia",
        population: 270625568,
        temperature: 25,
        currency: "Indonesia Rupiah"},

    CountryFive = {
        name: "Brazil",
        population: 211823221,
        temperature: 9,
        currency: "Brazilian Real"},

    CountrySix = {
        name: "Pakistan",
        population: 220892340,
        temperature: 8,
        currency: "Pakistani Rupee"},

        null ],[

    CountrySeven = {
        name: "Nigeria",
        population: 206139589,
        temperature: 25,
        currency: "Nigerian Naira"},

        null,

    CountryEight = {
        name: "Russia",
        population: 144500000,
        temperature: 2,
        currency: "Russian Ruble"},

    CountryNine = {
        name: "Japan",
        population: 126475664,
        temperature: 7,
        currency: "Japanese Yen"},

]]

console.table(new_array);

let total = 0

for (let index = 0; index < new_array.length ; index++) {
    for (let j = 0; j < new_array[index].length; j++) {
        if(new_array[index][j] && new_array[index][j].temperature <= 10){
            console.log(new_array[index][j]);
            total += new_array[index][j].population;}
    }


}

console.log("The total population for countries with temperature lesser than 10% is:: ",total);


