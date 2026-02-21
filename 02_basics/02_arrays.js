const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // an array can take any data type - as here it will take the whole dc array as an elemnt 
// push does its job and the resultant is stored in the og array.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // concat need a new variable so here we will make "allHeroes" named variable
// console.log(allHeros);

// spread operator does it easier than concat, does the same work and also we can add arrays wherea as in concat can merge only 2 at a time.
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//simplifying the above array as it can go inside array accross depth and get the individual elements
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Aditya")) // checks whether it is array 
console.log(Array.from("Aditya")) // converts it to array
console.log(Array.from({name: "Aditya"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //can use 'of' inplace of 'from' for conversion