// GLOBAL VARIABLES  ======================================
const sendBTN = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBTN = document.getElementById('resetBtn');
      sendEmail = document.getElementById('email-form');


// EVENT LISTENERS  ============================================
formEvents();
function formEvents(){

    //App init
    document.addEventListener('DOMContentLoaded', appInit);

    //Validate the form
    email.addEventListener('blur', validateForm);
    subject.addEventListener('blur', validateForm);
    message.addEventListener('blur', validateForm);
    
    //  Spinner Event
    sendEmail.addEventListener('submit', sendEmailSpinner);

    // Reset form after
    resetBTN.addEventListener('click', resetForm);
}

// FUNCTIONS  ====================================================
function appInit(){
    // Diable the send button on load
    sendBTN.disabled = true;
}

function sendEmailSpinner(e){
    e.preventDefault();

    //Show the pinner
     const spinner = document.querySelector('#spinner');
     spinner.style.display = 'block';

     // Show the sent image
     const sentImage = document.createElement('img');
     // The image source
     sentImage.src = 'img/mail.gif';
     sentImage.style.display = 'block';


     //Hide the spinner and show sent mail
     setTimeout( function() {
        spinner.style.display = 'none';

        // Show the new element image
        document.querySelector('#loaders').appendChild(sentImage);

        // Reset form
        setTimeout(function() {
            sendEmail.reset();
            sentImage.remove();
        }, 1500);

     }, 3000);
}

function validateForm() {
   let error;
   //validate the lengt of the field
   validateLength(this)

   //validate the email
   if(this.type === 'email') {
       validateEmail(this);
   }
    // Both will return errors, and check if there are any error
   error = document.querySelectorAll('.error');

   //Check that inputs are not empty
   if(email.value !== '' && subject.value !== '' && message.value !== ''){
       if(error.length === 0){
        sendBTN.disabled = false;
       }
   }
   
}

//validate the length of the fields
function validateLength(field){
    if(field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//validate email (check for @ sign in the value)
function validateEmail(field){
    let emailText = field.value;
    // check if the emailTest contains @ sign
    if(emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error'); 
    } else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// Reset the form
function resetForm() {
    sendEmail.reset();
}