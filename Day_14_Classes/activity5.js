// ************************ Private Fields (Optional) **************************


// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

class Account{
    #balance   // Private field for balance
    
    constructor(initialBalance){
        this.#balance = initialBalance >= 0 ? initialBalance : 0;
    }

    // Method to deposit money
    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
        }
        else{
            console.log('Deposit amount must be positive.');
        }
    }

    // Method to withdraw money
    withdraw(amount){
        if(amount > 0){
            if(amount <= this.#balance){
                this.#balance -= amount;
                console.log(`Withdraw ${amount}. New balance: ${this.#balance}`);
            }
            else{
                console.log('Insufficient funds.');
            }
        }
        else{
            console.log('Withdrawal amount must be positive.');
        }
    }

    // Method to get the current balance (read-only)
    getBalance() {
        return this.#balance;
    }

}


// Create an instance of the Account class
const myAccount = new Account(1000);

// Log the initial balance
console.log(`Initial balance: ${myAccount.getBalance()}`);

// Deposit money
myAccount.deposit(100); // Deposited 100. New balance: 1100

// Log the balance after deposit
console.log(`Balance after deposit: ${myAccount.getBalance()}`);

// Withdraw money
myAccount.withdraw(200); // Withdrew 200. New balance: 900

// Log the balance after withdrawal
console.log(`Balance after withdrawal: ${myAccount.getBalance()}`);

// Try to access private balance directly (will result in an error)
// console.log(myAccount.#balance); // Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class

// Get the current balance using the method
console.log(`Current balance: ${myAccount.getBalance()}`); // Current balance: 120