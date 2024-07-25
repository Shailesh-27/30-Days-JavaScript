
// ************************ Using Third-Party Modules **************************


// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

// Importing axios
const axios = require('axios');

// Example API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Making a GET request using axios
axios.get(apiUrl).then((res) => {
        console.log('Response from API:');
        console.log(res.data);
}).catch((error) => {
    console.error('Error fetching data:', error.message);
})