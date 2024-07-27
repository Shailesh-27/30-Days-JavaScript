// ************************ Understanding Closures **************************


// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outer(){
    const userName = "Shailesh Prajapati"

    function inner(){
        console.log(userName);
    }
    return inner;
}

const myFunc = outer();

myFunc()


// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.


function counter(){
    let privateCounter = 0;   

    function increment(){
        privateCounter++;
    }

    function getCounter(){
        return privateCounter;
    }

    return{
        increment,
        getCounter,
    }

}

const count = counter()

// Initial value of counter
console.log(count.getCounter());

count.increment()
count.increment()
count.increment()
count.increment()
count.increment()

console.log(count.getCounter());
