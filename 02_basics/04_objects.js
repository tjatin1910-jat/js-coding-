// const tinderuser = new Object()  singleton constructor 

const tinderuser = {}
tinderuser.id ="1654"
tinderuser.name ="jsdb"
tinderuser.logeedin = true

// console.log(tinderuser);

const regularuser = {
    fullname : {
        firstname : "jatin",
        lastname : "thakur"
    }
}

// console.log(regularuser.fullname.lastname);  // 

const obj1 = {1 : "A", 2 : "B"}
const obj2 = {3: "a", 4 : "b"}

const obj3 = Object.assign(obj1,obj2,{})   // merge the two objects together
// console.log(obj3);  // mdn assign use 

const obj4 = {...obj1,...obj2}  // also work spread method 
// console.log(obj4);

const user = [
    {
        id : 1,
        email : "hjdsb"
    },
    {

    },{

    }
]


user[1].email
// console.log(tinderuser);
// console.log(user[0].email);
// console.log(Object.keys(tinderuser));    // check the protoype of the console for the object 
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser)); // coversion to the arrays like as [[id,jhgd],[gfv:fgvhb]] like this the value are coverted 

// console.log(tinderuser.hasOwnProperty('islogged'));   // used to check if the object has the following key 


const course  ={
    coursename : "bd",
    prize : "552",
    coureseinstructior : "hdgf"
}


const {coureseinstructior} = course   // another method th=o get the value
const {coureseinstructior:instructor} = course // changed the name of courdeinstructor to instructor for our refrence only use like this 
console.log(coureseinstructior)
console.log(instructor);   // destructure  learn more 

// {
//     "name" : "jatin",
//     "coursename" : "jshindi",    data from the json :
//     "price" : "free"
// }



