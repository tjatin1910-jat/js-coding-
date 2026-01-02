// primitive 

// 7 categories : string , nuberer, bollean , null , undefined , symbol , Bigint


const score = 100 // statically or dynamically 
const scorevalue = 100.3
const logedin = true
const outsidetemp = null // as object type  come in 
let useremail = undefined

const id = Symbol('123')
const anoterid = Symbol("123")

const bignumber = 4465424544245421456465n




// console.log (id == anoterid)





//reference (non primitive )
// Array , Objects , Functions 



const heroes = ["shaktiman","naagrahj","doga"]

let myobj = {
    name :"jatin",
    age : 22
}


const myfunction = function(){
    console.log ("hellow world ");
}

console.log(typeof bignumber)

console.log(myobj)
console.log(myfunction)
console.log(heroes)



//==+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++MEMEORY++++++++++++++++++++++++++/********************** */
// STACK IN (PRIMITIVE ) , HEAP (NON PRIMITIVE)


let myyoutubemain = "fjfbe"

let anothername = myyoutubemain
anothername = "chai aur code"

console.log(anothername)
console.log(myyoutubemain) // like python reference getting stored actual value not getiing changed 



let usderone = {
    emial : "dhbf",
    upi : "bkgfgfgbj"
     }



let usertwo = usderone

usertwo.emial = 'jsfhvbhr'

console.log(usderone.emial)  // original value changed  not referncde created 
console.log(usertwo.emial)