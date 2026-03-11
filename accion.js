const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';
    let calif=10;
    let nombreUsuario = prompt("Por favor, ingresa tu nombre:")
    console.log("Hola, " + nombreUsuario + "!");
   const serviceID = 'default_service';
   const templateID = 'template_fp1cinp';
 const templateParams = {
            from_name: "Examen de Historia", // Nombre del remitente
            to_name: `Tu calificación en el examen de historia es: ${nombreUsuario}.`, // Puedes pedir el nombre al usuario
            user_email: "correo@ejemplo.com", // Puedes pedir el correo al usuario
            message: `Tu calificación en el examen de historia es: ${calif} ${nombreUsuario}.`
        }; 
  //let templateParams.to_name = prompt("Por favor, ingresa tu nombre:");

   emailjs.send(serviceID, templateID, templateParams)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});