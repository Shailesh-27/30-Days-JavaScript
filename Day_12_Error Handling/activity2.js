
// ************************ Finally Block **************************


// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in a the try, catch and finally blocks to observe the execution flow.

const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
} finally{
    console.log('Finally will execute every time');
}