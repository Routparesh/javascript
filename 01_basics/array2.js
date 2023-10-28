//array concat
const marvelHeros = ['Thor','Ironman', 'spiderman']

const dcHeros = ['Batman','superman','flash']

const combine = marvelHeros.concat(dcHeros)

console.log(combine)

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5],{name:'paresh',value:2 ,type:'String'}]]

const real_arr = another_arr.flat(Infinity)

console.log(real_arr)

//check if the array or not
console.log(Array.isArray(combine))

// convert arrays
console.log(Array.from('paresh'))

//return empty array
console.log(Array.from({name:"paresh"}))

//convert multiple variable inside arrays

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3))