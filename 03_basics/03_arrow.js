const user ={
    username : "jatin ",
    price : 566,

    welcomemessage : function(){
        console.log(`${this.username},welcome to the website `);   // for the cuurent context like this the this is used as herenin the scope 
        console.log(this)
    }
}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this);      // gives an {}



// function chai (){
//     let username = "jatin"
//     console.log(this.username)  // works in the object type thrown functioon 
// }
//  chai()



// const chai = function(){
//     let username = "jatin"
//     console.log(this.username)
// }

// const chai = => (){
//     let username = "jatin"
//     console.log(this.username)
// }

// chai()






// const addtwo = = (num1,num2) => {
//     return num1 + num 2      // arrow function synatx         // with the curly braces the return is required 
// }

// const addtwoo = (num1 , num2 ) => num1 + num2    // removing the paranthesimeans not to use the return directly use the required things
// const addtwo = (num1,num2) => ({suername: "dhasd" })  // for returning the objects in the arrow function use this 


