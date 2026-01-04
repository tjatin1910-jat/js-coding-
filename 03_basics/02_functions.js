let a = 300
if (true) {
    let a = 10                 // scope is {}
    const b = 20
    // var c = 30     // here comes the problem with the c as the var is used as might be global is used as var 
    // console.log ("ineer a ",a)
}

// console.log(a);
// console.log(b);  
// console.log(c);


/////////////////////////////nested scope

function one () {
    const usernmae = "jatin"
    function two(){
        const website = "youtbe "
        console.log(usernmae)
    }
    // console.log(website) 
    two()
}

// one()

if(true){
    const username = "jatin "
    if (username === "jatin "){
        const website = "youtube "
        // console.log(username+website);    
    }
    // console.log(website);
    
}
//  console.log(username);
 

/// *****************interesting **********************************/////

function addone(num){
    return num +1
}

console.log(addone(55));     // this can be declared as before or after no problem here 


const addtwo = function(num){
    return num +2
}
console.log(addtwo(55));   // this type will not be worked before the declaration of the variable 






















































































































































































