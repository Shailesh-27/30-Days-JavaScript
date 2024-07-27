// ************************ Closures in Loops **************************


// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.


function createFunctionsArray(count){
    const functionArray = [];

    for (let i = 0; i< count; i++){
        functionArray.push(function(){
            console.log(i);
        })
    }

    return functionArray;
}

// Create an array of functions
const funcs = createFunctionsArray(5);

// Call each function and log its index
funcs.forEach(func => func());
