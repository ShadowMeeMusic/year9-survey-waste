const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_s9q0g1i';
   const templateID = 'template_8i0909u';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Message was sent successfully! Thank you for answering! ');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});