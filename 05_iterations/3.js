// FOR OF 
["",""]
[{},{}]
const myhero = [1,2,3,4,5,6]

for (const num of myhero) {    // here is the object represents the item we take to iterate
    // console.log(num);   
}

const greeting  = "hello world "
for (const words of greeting) {
    if (words == " "){
        continue
    }
    // console.log(words);
}

// MAPS

const map = new Map()
map.set('in','india')
map.set('usa','united states of america')  // not iterable only use the forof loop
console.log(map);


for (const key of map) {        // gives the full array of the maps contents 
    // console.log(key);
}


for (const [key,value] of map) {
    // console.log(key, ':-',value);
}

const myobject = {
    game1 : "nfs",
    game2 :"spiderman "
}

// for (const [key,value] of myobject) {
//     console.log(key,":",value);
    
      /// OBJETCS NOT ITTERABLE USING FOR OF LOOP 
// }