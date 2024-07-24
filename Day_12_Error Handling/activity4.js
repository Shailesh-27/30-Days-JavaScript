
// ************************ Error Handling in Promises **************************


// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to console.


const randomPromise = new Promise((resolve, reject) =>{
    const randomNumber = Math.random();
    if(randomNumber < 0.5){
        resolve("Promise resolved successfully.");
    }
    else{
        reject(new Error("Promise rejected."));
    }
})


randomPromise.then((result) =>{
    console.log("Resolved:", result);
})
.catch((error) => {
    console.error("Rejected:", error.message);
})


// Task 7: Use try-catch within an async function to handle error from a promise that randomly resolves or rejects, and log the error message.

console.log('-----------------------------');
async function handlePromise(){
    try {
        const result = await randomPromise
        console.log("Resolved:", result);
    } catch (error) {
        console.error("Caught Error:", error.message);
    }
}

handlePromise()