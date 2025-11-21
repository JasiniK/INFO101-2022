/* This is your JavaScript file. You will use this file to create actions in your HTML pages */
var total_carbon = 0;
var total_price = 0;
var num_clothing = 0;

/* Adds the carbon footprint and price to the total */
function calculateCarbon(x, y, z) {
    total_carbon += (3*parseFloat(x) + 7*parseFloat(y));
    total_price += parseInt(z);
    num_clothing++;
}

/* Resets the total carbon and total price */
function resetCalculator() {
    total_carbon = 0;
    total_price = 0;
    alert("Calculator has been reset.");
}

/* Shows the total carbon footprint and price to the use */
function showCarbon(){
    alert("Total carbon footprint: "+ total_carbon  + "\nAverage carbon footprint: " + (total_carbon/num_clothing) + "\nTotal price: $"+ total_price + "\nNumber of items: " + num_clothing);
}

/* Shows the dropdowns on the FAQ page when clicked */
function faqDropdown(x) {
    var name = "faqAns" + String(x);
    var disp = document.getElementById(name).style.display;
    /* Closes the dropdown is already open, or open it if closed */
    if (disp == "block") {
        document.getElementById(name).style.display = "none";
    } else {
        document.getElementById(name).style.display = "block";
    }
}

/* Function that accepts feedback on the FAQ page */
function submitFeedback() {
    var feedback = document.getElementById("message").value;
    document.getElementById("sent").innerHTML = "Thank you for your response!";
}

/* Function to obtain and validate the information from the registration form */
/* String methods/functions: https://www.w3schools.com/jsref/jsref_obj_string.asp */
function validateRegistrationForm() {
    /* Obtain the values from the form */
    var name = document.forms["registration"]["f_name"].value;
    var username = document.forms["registration"]["f_user"].value;
    var email = document.forms["registration"]["f_email"].value;
    var bday = document.forms["registration"]["f_bday"].value;
    var password = document.forms["registration"]["f_password"].value;
    var password_repeat = document.forms["registration"]["f_password2"].value;
    
    if (name == "") { 
        alert("Please fill in your name."); 
    } else if (username.length < 5) { 
        alert("Username must be at least 5 characters long."); 
    } else if (!email.includes("@")) { 
        alert("Invalid email address."); 
    } else if (password.length < 8 || password.search(/[0-9]/g) == -1 || password.search(/[A-z]/g) == -1) {
        alert("Invalid password. Password must be 8 characters long, including at least one number and one letter.")
    } else if (password.localeCompare(password_repeat) != 0) { 
        alert("Repeated password is not the same, please check your password again."); 
    } else {
        alert("Thank you for registering with JayaCo! #EcoB");
    }
}

/* Function to obtain and validate payment information */
/* String methods/functions: https://www.w3schools.com/jsref/jsref_obj_string.asp */
function validatePaymentForm() {
    /* Obtain values from the form */
    var name = document.forms["payment"]["c_name"].value;
    var number = document.forms["payment"]["c_number"].value;
    var exp = document.forms["payment"]["c_exp"].value;
    var cvv = document.forms["payment"]["c_cvv"].value;
    
    /* Extracting the month and year from the expiry date */
    var month = parseInt(exp.substring(0, 2));
    var year = parseInt(exp.substring(3, 5));
    
    if (number.length != 19 || number.search(/[0-9]/g) == -1 || (number.match(/[0-9]/g)).length != 16) {
        alert ("Invalid Card Number. Please input 16 digit card number as per the example.");
    } else if (exp.length != 5 || exp.charAt(2) != "/" || month > 12 || month < 1 || year <= 0) {
        alert ("Invalid Card Expiry.");
    } else if (year < 22 || (year == 22 && month < 6)) {
        alert("Card expired. Please use another card.");
    } else if (cvv.length != 3 || cvv.search(/[0=9]/g) == -1 || cvv.match(/[^0-9]/g)) {
        alert("Invalid CVV. Please check your card again.");
    } else {
        alert("Processing payment.");
        alert("Thank you for shopping with JayaCo! #EcoB");
    }
    
}
