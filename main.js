// main.js

// Function to show login form
function ShowLoginForm() {
    SetTitle("Login");

    ShowHideForm("LoginFrom", "Show");
    ShowHideForm("RegistrationFrom", "Hide");
    ShowHideForm("ForgotPasswordForm", "Hide");

    ActiveInactiveBtn("ShowLoginBtn", "Active");
    ActiveInactiveBtn("ShowRegistrationBtn", "Inactive");

    ShowHideFromSwitchBtn("Show");
};

// Function to show registration form
function ShowRegistrationForm() {
    SetTitle("Registration");

    ShowHideForm("RegistrationFrom", "Show");
    ShowHideForm("LoginFrom", "Hide");
    ShowHideForm("ForgotPasswordForm", "Hide");

    ActiveInactiveBtn("ShowLoginBtn", "Inactive");
    ActiveInactiveBtn("ShowRegistrationBtn", "Active");

    ShowHideFromSwitchBtn("Show");
};

// Function to show forgot password form
function ShowForgotPasswordForm() {
    SetTitle("Forgot Password");

    ShowHideForm("RegistrationFrom", "Hide");
    ShowHideForm("LoginFrom", "Hide");
    ShowHideForm("ForgotPasswordForm", "Show");

    ActiveInactiveBtn("ShowLoginBtn", "Inactive");
    ActiveInactiveBtn("ShowRegistrationBtn", "Inactive");
    ShowHideFromSwitchBtn("Hide");
}

// Function to set form title
function SetTitle(Title) {
    var formTitle = document.getElementById('formTitle');
    formTitle.innerHTML = Title;
}

// Function to show or hide a form
function ShowHideForm(FormID, ShowOrHide) {
    var Form = document.getElementById(FormID);

    if (ShowOrHide == "Show") {
        Form.style.display = 'block';
    } else {
        Form.style.display = 'none';
    }
}

// Function to activate or deactivate a button
function ActiveInactiveBtn(ButtonID, ActiveORInactive) {
    var Button = document.getElementById(ButtonID);

    if (ActiveORInactive == "Active") {
        Button.classList.add('active');
    } else {
        Button.classList.remove('active');
    }
}

// Function to show or hide the form switch button
function ShowHideFromSwitchBtn(ShowOrHide) {
    var formSwitchBtn = document.getElementById('formSwitchBtn');
    if (ShowOrHide == 'Show') {
        formSwitchBtn.style.display = '';
    } else {
        formSwitchBtn.style.display = 'none';
    }
}

// Common function to display error messages
function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId + '-error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        document.getElementById(elementId).classList.add('error-input');
    }
}

// Common function to clear error messages
function clearErrorMessage(elementId) {
    var errorElement = document.getElementById(elementId + '-error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.color = '';
        document.getElementById(elementId).classList.remove('error-input');
    }
}

// Login Form Validation
function ValidateLoginForm() {
    var email = document.getElementById('LoginEmail').value;
    var password = document.getElementById('LoginPassword').value;

    // Clear previous error messages
    clearErrorMessage('LoginEmail');
    clearErrorMessage('LoginPassword');

    // Basic validation: Check if all fields are not empty
    if (email.trim() === '') {
        displayErrorMessage('LoginEmail', 'Please enter your email address.');
        return false;
    }

    // Additional validation logic for email format can be added here
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
        displayErrorMessage('LoginEmail', 'Please enter a valid email address.');
        return false;
    }

    if (password.trim() === '') {
        displayErrorMessage('LoginPassword', 'Please enter your password.');
        return false;
    }

    // If all validation passes, you can submit the form
    alert('Login form submitted successfully!');
    return true;
}

// Registration Form Validation
function ValidateRegistrationForm() {
    var name = document.getElementById('RegiName').value;
    var email = document.getElementById('RegiEmailAddres').value;
    var password = document.getElementById('RegiPassword').value;
    var confirmPassword = document.getElementById('RegiConfirmPassword').value;

    // Clear previous error messages
    clearErrorMessage('RegiName');
    clearErrorMessage('RegiEmailAddres');
    clearErrorMessage('RegiPassword');
    clearErrorMessage('RegiConfirmPassword');

    // Basic validation: Check if all fields are not empty
    if (name.trim() === '') {
        displayErrorMessage('RegiName', 'Please enter your name.');
        return false;
    }

    // Additional validation logic for email format can be added here
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
        displayErrorMessage('RegiEmailAddres', 'Please enter a valid email address.');
        return false;
    }

    // Additional validation logic for password strength can be added here
    // Example: Check if the password meets certain criteria (e.g., minimum length)
    if (password.trim() === '') {
        displayErrorMessage('RegiPassword', 'Please enter a password.');
        return false;
    }

    if (password.length < 8) {
        displayErrorMessage('RegiPassword', 'Password must be at least 8 characters long.');
        return false;
    }

    // Additional validation logic for matching passwords can be added here
    if (confirmPassword.trim() === '') {
        displayErrorMessage('RegiConfirmPassword', 'Please confirm your password.');
        return false;
    }

    if (password !== confirmPassword) {
        displayErrorMessage('RegiConfirmPassword', 'Passwords do not match.');
        return false;
    }

    // If all validation passes, you can submit the form
    alert('Registration form submitted successfully!');
    return true;
}


// Forgot Password Form Validation
function ValidateForgotPasswordForm() {
    var email = document.getElementById('forgotPassEmail').value;

    // Clear previous error messages
    clearErrorMessage('forgotPassEmail');

    // Basic validation: Check if email is not empty
    if (email.trim() === '') {
        displayErrorMessage('forgotPassEmail', 'Email is required.');
        return false;
    }

    // Additional validation logic for email format can be added here
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
        displayErrorMessage('forgotPassEmail', 'Please enter a valid email address.');
        return false;
    }

    // If all validation passes, you can submit the form
    alert('Forgot password form submitted successfully!');
    return true;
}

// Common function to display error messages
function displayErrorMessage(elementId, message) {
    var errorElement = document.getElementById(elementId + '-error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = 'red';
    }
}

// Common function to clear error messages
function clearErrorMessage(elementId) {
    var errorElement = document.getElementById(elementId + '-error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.color = '';
    }
}

