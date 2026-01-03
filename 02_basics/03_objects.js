// singleton from the constructor 

// object literal 
// Object.create  constructor as the singleton 


const mysym = Symbol("key1")
const jsuser = {
    "name " :"thakur ",
    location:"jaipur ",
    [mysym]:"mykey1",  // imp thing for as the symbol 
    emial:"jaitn ",
    loggedin :false,
    lastlogged : ["monday","tureday"]
}

// console.log(jsuser.emial);
// console.log(jsuser["emial"]); // in this give in the string type 
// console.log(jsuser["name "]);
// console.log(jsuser[mysym]);

jsuser.emial = "chatgpt.com"
console.log(jsuser.emial);

// Object.freeze(jsuser)  // after freze no change
jsuser.emial = "my crodbc"
console.log(jsuser.emial);

jsuser.greetings = function(){
    console.log("helloe js user");
}

jsuser.greetings2 = function(){
    // console.log("hellow  js user ",${this.name});
    
}
console.log(jsuser.greetings()) // wihout the () it will not work 
