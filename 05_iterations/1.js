// for 
// for (let index = 0; index  < 10 ; index++) {
//     const element = index;
//     if (element == 5 ){
//         console.log("5 is the best");
        
//     }
//     console.log(element);
    
    
// }



// for (let i = 0; i < 5; i++) {
//     console.log("outer loop ",`${i}`);
//     for (let j = 0; j < 5; j++) {
//         // console.log("inneer loop",`${j}`,"and outer loop ", `${i}`);   
//         console.log(i + '*' + j ,"=", i*j);
        
//     }
// }


// let myarray = ["flash ", "dc ", " super man "]
// for (let index = 0; index < myarray.length; index++) {
//     const abs = myarray[index];
//     console.log(abs);
// }

for (let index = 1; index < 20; index++) {
    console.log(`value of the index is ${index}`);
    if (index == 5){
        console.log("detectd 5");
        // break  
        continue
    }
}