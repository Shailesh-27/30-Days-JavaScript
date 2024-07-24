
// ************************ Graceful Error handling in Fetch **************************


// Task 8: Use the fetch API to request data from an invalid URL and handle the error using  .catch(). Log an appropriate error message to the console.

const invalidURL = 'https://thisisnotavalidurl';

fetch(invalidURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Fetch Error:', error.message);
    });


// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message. 

async function fetchData() {
    try {
        const response = await fetch(invalidURL);

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Fetch Error:', error.message);
    }
}

fetchData()