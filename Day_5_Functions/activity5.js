
// ************************ Higher-Order Functions **************************


// Task 9: Write a higher-order function that takes a functions and a number, calls the functions that many times.


function callFunctionNTimes(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
};

function sayHello(){
    console.log("Shailesh");
}

callFunctionNTimes(sayHello, 5)  // Output: Shailesh
                                 //         Shailesh
                                 //         Shailesh
                                 //         Shailesh
                                 //         Shailesh


// Task 10: Write a higher-order function that takes two functions and a value, applies the first functions to the value, and the applies the second function to the result.


function twoFunctionAndValue(func1,func2,value){
    const result = func1(value)
    const finalResult = func2(result)
    return finalResult
}

function double(num){
    return num * 2
}

function square(num){
    return num * num
}


const value = 3
const output = twoFunctionAndValue(double,square,value)
console.log(output)      // Output: 36 (first double the value, then square the result)

