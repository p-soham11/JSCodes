// JavaScript works in Event-Loop
// It loops throught the events and is not stuck at once

// In this file, we will discuss about :
//  PROMISES,  ASYNC  and  AWAIT

const uno = () => {
    return "I am ONE";
}

const dos = () => {
    // Promise is a callback function
    // Resolve states that
    return new Promise((resolve, reject) => {   
        // Consider this as a response from Server, taking bit time to load
        setTimeout(() =>{
            resolve("I am TWO")
        }, 2500)    // Time is in milliseconds [aka 2.5 secs]
    })
}

const tres = () => {
    return "I am THREE";
}

// asyncronous : Not occuring at the same time 
// async tells the function to be asyncronous
// So the functions will be executed sequentially one after another
const callMe = async () =>{
    let valOne = uno();
    console.log(valOne);
    
    // await tells to wait until the function is executed completely
    let valTwo = await dos();
    console.log(valTwo);
    
    let valThree = tres();
    console.log(valThree);
}

callMe(); 