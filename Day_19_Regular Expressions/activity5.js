// ************************ Practical Applications **************************


// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

const passwords = [
    "Password1!",
    "password123",
    "PASSWORD123!",
    "Pass123!",
    "P@ssw0rd",
    "P@ssword123"
];

const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`\\|]).{8,}$/;

passwords.forEach((password) => {
    const isValid = pattern.test(password);
    console.log(`Password: ${password} - ${isValid ? 'Valid' : 'Invalid'}`);
})


// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.


const urls = [
    "http://example.com",
    "https://www.example.com/path/to/resource?query=1#fragment",
    "ftp://example.com/file.txt",
    "http://subdomain.example.co.uk",
    "http://example",
    "https://.com",
    "example.com"
  ];

const pattern1 = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/[\w\d\-._~:/?#\[\]@!$&'()*+,;=]*)?$/;

  // Validate and log whether each URL is valid
urls.forEach(url => {
    const isValid = pattern1.test(url);
    console.log(`URL: ${url} - ${isValid ? 'Valid' : 'Invalid'}`);
});