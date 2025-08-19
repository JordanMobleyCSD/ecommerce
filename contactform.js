document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector('form');


// Declaring all inputs related to the form 
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const contactMethod = document.getElementById('contact'); 
const phone = document.getElementById('phone-number');
const email = document.getElementById('email');
const comment = document.getElementById('comment');
const date = document.getElementById('contact-date');


// These fields are mandatory and always required to fill out the form 
[firstName, lastName, contactMethod, comment, date].forEach(el => el.required = true);


// Only require what's needed based on contact method 
function updateContactRequirements() {
const $ = contactMethod.value; 
phone.required = ($ === 'phone-number' || $ === 'phone-email');
email.required = ($ === 'email' || $ === 'phone-email');


// Clear custom messages when rules change
phone.setCustomValidity('');
email.setCustomValidity('');
}
updateContactRequirements();
contactMethod.addEventListener('change', updateContactRequirements);


form.addEventListener('submit', (e) => {
e.preventDefault();


// Valiidates any missing fields
if (!form.checkValidity()) {
form.reportValidity();
return;
}


alert('Form submitted successfully!');
form.reset();
// Reset 
updateContactRequirements();
});
});