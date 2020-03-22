const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1991, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages= [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++){
//     console.log(JSON.stringify(companies[i]));
// }

// forEach

// companies.forEach(function (company) {
//     console.log(`${company.name} : ${company.category}`);
// });

// filter
// Get 21 and older
// console.log("The ages 21 or over are: ");
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         console.log(ages[i]);
//     }
// }
// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(`canDrink: ${JSON.stringify(canDrink)}`);

// const canDrink = ages.filter(function (age) {
//     if(age >= 21){
//         return true;
//     }
// });

const canDrink = ages.filter(age => age >= 21);
console.log(`canDrink: ${JSON.stringify(canDrink)}`);

// Filter Retail companies
const Retail = companies.filter(company => company.category === "Retail");
// console.log(`Retail Companies are: `); 
// console.log(Retail);

// const Retail = companies.filter(function (company) {
//     if(company.category === "Retail"){
//         return true;
//     }
// });
// console.log(`Retail Companies are: `); 
// // console.log(Retail);
// Retail.forEach(company => console.log(company.name));

// filter Companies that started in the 80's (from 1980 to 1989)
const company80 = companies.filter(company => company.start >= 1980 && company.start <= 1989);
console.log(`The Companies that started in the 80's are:`);
console.log(company80);

// Filter Companies that lasted at least 10 years
const company10 = companies.filter(company => company.end - company.start + 1 >= 10);
console.log(`The Companies that lasted at least 10 years are:`);
console.log(company10);


// map

// create array of company names
const companyNames = companies.map(function (company) {
   return company.name; 
});
console.log(`The names of the Companies are ${JSON.stringify(companyNames)}`);

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap);

// Find square root of all ages
const agesSqrt = ages.map(function (age) {
    return Math.sqrt(age);
});
console.log(agesSqrt);

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

//Find log of all ages, then multiply it by 5
const agesMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 5);

console.log(agesMap);

// sort
// sort companies according to their start dates
const sortedCompanies1 = companies.sort(function (c1, c2) {
    if(c1.start > c2.start){
        return 1;
    }
    else{
        return -1;
    }
});
console.log(sortedCompanies1);

// sort companies according to the first letter of their category
const sortedCompanies2 = companies.sort((c1, c2) => (c1.category.charAt(0) > c2.category.charAt(0)) ? 1: -1);
console.log(sortedCompanies2);

// Sort ages
const sortedAges = ages.sort((age1, age2) => (age1 - age2));
console.log(sortedAges);

// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function (total, age) {
//     return total + age;
// }, 0);

// Get the sum of all ages
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// Get the total years for all companies
const companyTotalYears = companies.reduce((total, years) => (total + (years.end - years.start + 1)), 0);
console.log(companyTotalYears);

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((age1, age2) => (age1 < age2) ? 1: -1)
    .reduce((total, ages) => (total + ages), 0);

console.log(combined);    