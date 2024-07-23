
// ************************ Concurrent Promises **************************


// Task 8: Use Promise.all to wait for multiple promises to resolve anf then log all their values.

const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1';
const apiUrl2 = 'https://jsonplaceholder.typicode.com/comments/1';
const apiUrl3 = 'https://jsonplaceholder.typicode.com/users/1';


const promises = [
    fetch(apiUrl1).then(response => response.json()),
    fetch(apiUrl2).then(response => response.json()),
    fetch(apiUrl3).then(response => response.json())
];

// Using Promise.all to wait for all promises to resolve

Promise.all(promises).then((dataArray) => {
    console.log('Data from apiUrl1:', dataArray[0]);
    console.log('Data from apiUrl2:', dataArray[1]);
    console.log('Data from apiUrl3:', dataArray[2]);
})
.catch(error => {
    console.error('Error occurred:', error); // Log any errors that occurred during Promise.all
});


// Task 9: Use Promise.race to log the value of the first promise to resolves among multiple promises. 


console.log('----------------------------------------');

const promises1 = [
    fetch(apiUrl1).then(response => {
        setTimeout(() => {
            response.json()   
        }, 1000);
    }),
    fetch(apiUrl2).then(response => response.json()),
    fetch(apiUrl3).then(response => response.json())
];

Promise.race(promises1).then((result) => {
    console.log('First resolved Data:', result);
})
.catch(error =>{
    console.error('Error occurred:', error); 
})