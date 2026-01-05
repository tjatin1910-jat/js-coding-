// if 
// const isuserlogedin = true
// const temp = 42

// if (temp<50){
//     console.log("temp less then 5-");
// } else{
//     console.log("temp greater then 50);
    
// }

//  if (2="2"){


//  }

//  if (3!=2){

//  }

// // >,< ,<=,>=, == ,!=


// const balance = 1000
// // if (balance>500) console.log("test"),console.log("test2");

// if (balance< 500){
//     console.log("less then ")
// } else if (balance<750){
//     console.log("balance less  then 750");
    
// } else {
//     console.log("balance less then 1200");
    
// }

const userloggedin = true 
const debitcard  = true 
const loggedinfromemail = true

if (userloggedin && debitcard && 2==3){
    console.log("allow to purchase ");
}

if (loggedinfromemail || userloggedin){
    console.log("user loged in ")
}