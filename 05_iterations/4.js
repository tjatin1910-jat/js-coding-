/// FOR IN LOOP 


const myobj = {
    js : "java script",
    cpp : "c ++",
    swift : "swift by apple"
}

for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
      // cnst element = object[keymyobj  
}

const myarr = [ "js","rb",'python',"java","cpp"]
for (const key in myarr) {
    console.log(key);
    console.log(myarr[key]);
                  // **** THIS GIVES THE KEY FOR TALL THE ITEMS 
}