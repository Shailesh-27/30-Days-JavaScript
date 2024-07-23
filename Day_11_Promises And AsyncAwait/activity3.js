
// ************************ Using Async/Await **************************


// Task 4: Write an async funtion that awaits for a promises to resolve and the  logs the resolved value.


function fetchDataFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from server');
        }, 2000);
    });
}


async function logResolvedValue() {
    try {
        const result = await fetchDataFromServer();
        console.log('Resolved value:', result); // Logs: Resolved value: Data from server
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

logResolvedValue()

// Task 5: Write an async funtion that handles a rejected using try-catch and the  logs the error message.

function fetchRejectedDataFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error: Failed to fetch data from server');
        }, 2000);
    });
}

async function handleRejectedPromise() {
    try {
        const result = await fetchRejectedDataFromServer();
        console.log('Resolved value:', result); // This will not execute in case of rejection
    } catch (error) {
        console.error('Error occurred:', error); // Logs: Error occurred: Error: Failed to fetch data from server
    }
}

handleRejectedPromise()