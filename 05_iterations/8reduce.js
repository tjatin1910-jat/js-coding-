/////REDUCE/////
const numbs = [1, 2, 3, 4, 5 ];
const mytotal = numbs.reduce(function (acc,current) {
    // console.log(`acc : ${acc} and current ${current}`);
    return acc + current     
},0)       /// HERE 0 AT THE END IS MUST FOR THE PROPER FUNCTIONOING OF THE REDUCE FUNCTION 



// USING ARROW FUNCTION 
const mytot = numbs.reduce((acc,current) => { return acc+current},   0)
// console.log(mytot);
// console.log(mytotal);


