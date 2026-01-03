//arrays

const myarray = [0,1,2,3]
const heroor = ["ngjdb","fdsjf" ]

const ar2 = Array(12,3,4,4)

// console.log(myarray[0]); // indexing starts from zero /
// copy method give the same reference and shallow copy same 



///***********************array method */

// myarray.push(6) 
// myarray.push(23165) // value added
// myarray.pop()

// myarray.unshift(5) // add item to the start
// myarray.shift()  // remove item from start


// console.log(myarray.includes(9)) // check item in it 
// console.log(myarray.indexOf(9)); // if not givethe -1
// console.log(myarray.indexOf(3));

// const newarr = myarray.join() // new string type is formed 
// console.log (newarr); // string result 
// console.log(typeof (newarr));


// console.log(myarray);



/// slice , splice 

console.log("A",myarray);

const myni1 = myarray.slice(1,3)
console.log(myni1);
console.log("B",myarray);


const myn2 = myarray.splice(1,3) // last also included original array changed 
console.log(myn2)
console.log("C",myarray) // originAL CHANGED 



