// ************************ Grouping and Capturing **************************


// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.


const phoneNumber = "(123) 456-7890";

const pattern = /\((\d{3})\)\s(\d{3})-(\d{4})/;

const matches = phoneNumber.match(pattern);

if(matches){
    // matches[0] is the entire matched string
  // matches[1] is the area code
  // matches[2] is the central office code
  // matches[3] is the line number

  console.log("Full match:", matches[0]);
  console.log("Area code:", matches[1]);
  console.log("Central office code:", matches[2]);
  console.log("Line number:", matches[3]);
}
else{
    console.log("No matches found.");
}


// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.


const email = "shailesh27@gmail.com";

const pattern1 = /^([^@]+)@([^@]+)$/;

const matches1 = email.match(pattern1);

if(matches1){
    console.log("Full match:", matches1[0]);
    console.log("Username:", matches1[1]);
    console.log("Domain:", matches1[2]);
}

else{
    console.log("No matches found.");
}