const useremail = "kdhcd"
if (useremail){
    console.log("got the email")
} else {
    console.log("dont have the email");
    
}



// false values => 0 , -0 , 0n , "" ,null , undefined, NaN rest all the true values 

// true  values => "0", "false" as inside the string any thing will give the true , {} empty objects , [] empty array , empty function also 

if (useremail.length === 0 ){
    console.log("empty array ");
}

const obj = {}
if (Object.keys(obj).length === 0){
    console.log("empty object");
}

// Nullsih coeleasing operator (??): null undefined 
// let val1 ;   // keep the variable empty 
// // val1 = 5 ?? 10     // now assigning the value to the variable as here val1 named 
//  val1 = null ?? 10      // this will not allow the null operator to come as the 10 is given 
//  // in the normal case the first value is taken 
//  val1 = undefined ?? 15   // same here also the 15 is assigned used as the filter to remove the undefined 
//  val1 = undefined ?? 56 ?? 5498
// console.log(val1);


// TERNIARY OPERATOR

const iceteaprice = 100
iceteaprice<80 ? console.log("less then 80") : console.log("more then 80")   // terniary operator works like this okay 