// ************************ Memoization **************************


// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
    const cache = new Map(); 
  
    return function(...args) {
      const key = JSON.stringify(args);
  
      if (cache.has(key)) {
        console.log('Fetching from cache:', key);
        return cache.get(key); 
      }
  
      console.log('Computing result for:', key);
      const result = fn(...args); 
      cache.set(key, result); 
      return result;
    };
  }
  
  
  function slowFunction(x, y) {
    for (let i = 0; i < 1e6; i++) {}
    return x + y;
  }
  
  // Create a memoized version of the slow function
  const memoizedSlowFunction = memoize(slowFunction);
  
  console.log(memoizedSlowFunction(5, 3)); // Computes and logs: 8
  console.log(memoizedSlowFunction(5, 3)); // Fetches from cache and logs: 8
  console.log(memoizedSlowFunction(10, 20)); // Computes and logs: 30
  console.log(memoizedSlowFunction(10, 20)); // Fetches from cache and logs: 30



// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoize(fn) {
    const cache = new Map(); 
  
    return function(...args) {
      const key = JSON.stringify(args); // Create a unique key based on function arguments
  
      if (cache.has(key)) {
        console.log('Fetching from cache:', key);
        return cache.get(key); 
      }
  
      console.log('Computing result for:', key);
      const result = fn(...args); 
      cache.set(key, result); 
      return result;
    };
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) return 1; 
    return n * factorial(n - 1); 
  }
  
  const memoizedFactorial = memoize(factorial);
  
  console.log(memoizedFactorial(5)); // Computes and logs: 120
  console.log(memoizedFactorial(5)); // Fetches from cache and logs: 120
  console.log(memoizedFactorial(6)); // Computes and logs: 720
  console.log(memoizedFactorial(6)); // Fetches from cache and logs: 720
  