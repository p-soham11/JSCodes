// We will learn how to handle APIs
// THESE Codes will have to run on BROWSER CONSOLE

// Brfore starting this, also check documentation of PROMISES on MDN

fetch('https://api.chucknorris.io/jokes/random')    // fetch passes the response to next .then if it's resolved
.then(response => {
    // .json is a method to convert the response from server into json format
    console.log("API fetched ✔")
    return response.json();
})  // It will pass the data to next fn.
.then((data) => {
    console.log("Data is : " + data)
    // value property of response is holding the joke
    console.log("Joke : " + data.value)
})
.catch("Request Failed 👀")
