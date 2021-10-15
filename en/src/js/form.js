
// INITIALIZE EMAILJS
emailjs.init("user_Sd0DzExIpd6YQLIjSh7dK");

// SELECTOR FOR CONTACT FORM
const contactForm = document.querySelector('#contactForm');

// ADD EVENT SUBMIT TO CONTACT FORM
contactForm.addEventListener('submit', (event) => {

    event.preventDefault();

    // ALERT
    alertify.message('Enviando mensaje..');

    // SEND EMAIL
    emailjs.sendForm('service_yqsyeaq', 'template_0rdfhlh', '#contactForm')
    .then(() => {

        // ALERT
        alertify.success('¡Mensaje enviado!');

    }, (form_error) => {

        // ALERT
        alertify.error(`Error: ${form_error}`);

    });

    contactForm.reset();

});