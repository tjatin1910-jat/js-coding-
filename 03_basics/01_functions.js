function sayname(){
    console.log("jatin");
    
}

// sayname()

// function addnums(num1,num2){
//     console.log(num1+num2);
// }

// addnums(3,4)
// addnums(3,"4")
// addnums(3,null)
// const result = addnums(3,4)
// console.log("resut" , result);


// function addtwonums(num1,num2){
//    let result = num1+num2
//     return result
// }

// return to do it in the another variable 

// function loginusermessage (username ){
//     if (username === undefined) {                    // for the !username 
//         console.log("plesare enter user name")
//         return
//     }
//     return '${username} just logged in '
// }

// loginusermessage("hitesh")
// // console.log(loginusermessage("jatin"));
// console.log(loginusermessage())
// console.log(${username});


function calculatecartprize(val1,val2,...num1){
    return num1
}

// console . log (calculatecartprize(500,584,8956,5852,2545)) // givw the num1 return only there 

const user = {
    ussrname : "jatin",
    price : 654
}


function handleobject (annyobject){
    console.log( 'username is :', `${annyobject.ussrname}`, "and the prize the" ,`${annyobject.price}`)
}
//  handleobject(user)


 handleobject({
    ussrname : "jatin thkaur",
    price : 51545
 })


//  const mynewarray = [45,88,58,58,58,865]

 function returnsecondvalue(getarray){
    return getarray[1]
 }

 