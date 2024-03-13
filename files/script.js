
function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var country = document.getElementById('country').value;
    var program = document.getElementById('program').value;
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var transcripts = document.getElementById('transcripts').value.trim();
    var englishTest = document.querySelector('input[name="englishTest"]:checked');
    var testScore = document.getElementById('testScore').value.trim();
    var termsAndConditions = document.getElementById('termsAndConditions').checked;

    var nameRegex = /^[a-zA-Z0-9\s]+$/;
    if (!nameRegex.test(name)) {
    window.alert("Please enter a valid name (only alphanumeric characters allowed).");
    return false;
    }

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
    window.alert("Please enter a valid email address.");
    return false;
    }


    var phoneNumberRegex = /^\+1-\d{3}-\d{3}-\d{4}$/; 
    if (!phoneNumberRegex.test(phoneNumber)) {
    window.alert("Please enter a valid phone number (format: +1-xxx-xxx-xxxx).");
    return false;
    }

    if (!transcripts.endsWith('.pdf')) {
    window.alert("Please upload a PDF file for academic transcripts.");
    return false;
    }

    if (englishTest && testScore.trim() === '') {
    window.alert("Please enter the test score for the selected English proficiency test.");
    return false;
    }

    if (!termsAndConditions) {
    window.alert("Please agree to the Terms and Conditions.");
    return false;
    }

    return true;
}