// immediately invoked function expressions (IIFE)

(function chai (){
    console.log("db connected ")
})()  // immediately always functio works using this type of the synatx this iife 
// it is used to handle the problem of the global scope pollution problem handlign in the good way 
// semicolon to be used always

((name) => {
    console.log ("db connected now  ", `${name}`)
}) ("jatin ")    // named iffe like this to write along with the arrow fuction also works 


