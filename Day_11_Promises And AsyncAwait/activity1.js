
// ************************ Understanding Promises **************************


// Task 1: Create a promises that resolves with a message after 2-second timeout and log the message to the console.

const timeoutPromise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve()
    },2000)
});

timeoutPromise.then(() =>{
    console.log('Timeout resolved after 2 seconds');
})
.catch((error) =>{
    console.error('Error occurred:', error);
})


// Task 2: Create a promises that rejects with an error message after 2-second timeout and log the handle the error using .catch().

const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Timeout error occurred after 2 seconds');
    }, 2000);
});

errorPromise.then((message) =>{
    console.log('Success:', message);
}).catch((error) =>{
    console.error('Error occurred:', error);
})