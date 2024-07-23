
// ************************ Fetching Data from an API **************************


// Task 6: Use the fetch API to get the data from public API and log the response data to the console using promises.

const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1';

// Using fetch API to get data from the API
fetch(apiUrl1).then((response) =>{
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then((data) =>{
    console.log('Response data:', data);
})
.catch((error)=>{
    console.error('Fetch error:', error);
})



// Task 7: Use the fetch API to get the data from public API and log the response data to the console using Async/Await.


const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/2';

async function fetchData(){
    try{
        const res = await fetch(apiUrl2);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json()
        console.log('Response data:', data); 
    }
    catch(error){
        console.error('Fetch error:', error);
    }
}


fetchData()