const marvel_heroses = ["thor ", "ironman","spiderman"]
const dc_heroes = ["super","flash "]
// marvel_heroses.push(dc_heroes) // GIVE ARRAYS AS ANOTHER 

 const allheroes = marvel_heroses.concat(dc_heroes) // new array must me be used
 
 const all_newhero = [...marvel_heroses,...dc_heroes]  // spread all the heros use this method

//  console.log((all_newhero));
// console.log(marvel_heroses);
// console.log(allheroes);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anohter_array = another_array.flat(Infinity)  // used to remove the intereanl array
console.log(real_anohter_array);



console.log(Array.isArray("jatin"));
console.log(Array.from("jatin"))
console.log(Array.from({name:"jatin"})); 


let score1 = 1000
let score2 = 500
let score = 503

console.log(Array.of(score1,score2,score,"jatin"));




