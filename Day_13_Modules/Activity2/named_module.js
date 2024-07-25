
// Function to calculate the cube of a number
function square(x) {
    return x * x;
}

// Function to calculate the cube of a number
function cube(x) {
    return x * x * x;
}

// Funtion to calulate sum of the number
function add(a, b){
    return a + b;
}


// Exporting functions using named exports
module.exports = {
    square,
    cube,
    add,
}