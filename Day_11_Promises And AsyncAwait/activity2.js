
// ************************ Chaining Promises **************************


// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log the messages in a specific order.

let promise = new Promise((resolve,reject) => {
    setTimeout(() => resolve(10), 2000)
})

promise.then((result) => {
    console.log(result);  // 10
    return result * 2;
})
.then((result) =>{
    console.log(result);  // 20
    return result * 3;
})
.then((result) =>{
    console.log(result);  // 60
    return result * 4
})


// Another example

let promise1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve(10), 2000)
})

promise1.then((result) => {
    console.log(result);  // 10
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve(result * 2), 2000)
    })
})
.then((result) =>{
    console.log(result);  // 20
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve(result * 3), 2000)
    })
})
.then((result) =>{
    console.log(result);  // 60
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve(result * 4), 2000)
    })
})