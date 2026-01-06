const coding = ["java",'pyhton',"c++","cp"]
coding.forEach( function  (item){
    // console.log(item);
    
})       // take thus then define the function inside it that will get applied to all the items of the array 



// coding.forEach(() => {
//     log
// })


// function printme(item){
    // console.log(item)/
// }



// coding.forEach(printme)   // the printme function defied by the user can be also used for the itreratin as shown here using the for each loop 
    

// coding.forEach((item,index,arr) => {
//     console.log(item, index, arr);
    
// })


const mycoding = [
    {
        languagename : "javacritp",
        languagefilename : "js"
    },{
        languagename : "python",
        languagefilename :"py"
    },
    {
        languagename : "java",
        languagefilename : "java"
    }
]


mycoding.forEach ( (item) => {                 // need to learnabout this the callback arrow function 
    console.log(item.languagename)
    console.log(item.languagefilename);
    
})