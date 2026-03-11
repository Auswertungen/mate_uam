document.addEventListener('DOMContentLoaded', () => {
    const examenContainer = document.getElementById('examen-container');
    const btnEnviar = document.getElementById('btn-enviar');
    const resultadoContainer = document.getElementById('resultado-container');
    let calif = 0;
    // Función para obtener preguntas aleatorias sin repetición
    function obtenerPreguntasAleatorias(array, numPreguntas) {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numPreguntas);
    }

    const preguntasSeleccionadas = obtenerPreguntasAleatorias(preguntas, 15);

    function mostrarPreguntas() {
        examenContainer.innerHTML = ''; // Limpiar el contenedor
        preguntasSeleccionadas.forEach((pregunta, index) => {
            const preguntaCard = document.createElement('div');
            preguntaCard.classList.add('pregunta-card');
            
            const preguntaHTML = `
                <h2>${index + 1}. ${pregunta.pregunta}</h2>
                <ul class="opciones-lista">
                    ${pregunta.opciones.map((opcion, i) => `
                        <li>
                            <label>
                                <input type="radio" name="pregunta${index}" value="${i}">
                                ${opcion}
                            </label>
                        </li>
                    `).join('')}
                </ul>
            `;
            preguntaCard.innerHTML = preguntaHTML;
            examenContainer.appendChild(preguntaCard);
        });
    }
        
    function revisarExamen() {
        let respuestasCorrectas = 0;
        let resultadosHTML = '';

        preguntasSeleccionadas.forEach((pregunta, index) => {
            const nombreRadio = `pregunta${index}`;
            const respuestaUsuario = document.querySelector(`input[name="${nombreRadio}"]:checked`);
            
            const esCorrecta = respuestaUsuario && parseInt(respuestaUsuario.value) === pregunta.respuestaCorrecta;

            if (esCorrecta) {
                respuestasCorrectas++;
                calif++;
            } else {
                // Retroalimentación para respuestas incorrectas
                resultadosHTML += `
                    <div class="pregunta-card">
                        <h2>${index + 1}. ${pregunta.pregunta}</h2>
                        <p style="color: red; font-weight: bold;">Tu respuesta es incorrecta.</p>
                        <div class="retroalimentacion">
                            <strong>Respuesta correcta:</strong> ${pregunta.opciones[pregunta.respuestaCorrecta]}<br>
                            <strong>Explicación:</strong> ${pregunta.retroalimentacion}
                        </div>
                    </div>
                `;
            }
         // document.body.appendChild(button);
          button.style.display='block';

        });

        const calificacion = (respuestasCorrectas / preguntasSeleccionadas.length) * 10;
        const claseResultado = calificacion >= 7 ? 'aprobado' : 'reprobado';

        resultadoContainer.innerHTML = `
            <div class="resultado ${claseResultado}">
                <h3>Resultados:</h3>
                <p>Obtuviste ${respuestasCorrectas} de ${preguntasSeleccionadas.length} preguntas correctas.</p>
                <p>Tu calificación es: <strong>${calificacion.toFixed(1)}</strong></p>
                 let calif= ${respuestasCorrectas};
                ${resultadosHTML}
            </div>
        `;
        btnEnviar.disabled = true; // Desactivar el botón para evitar múltiples envíos
    }

    btnEnviar.addEventListener('click', revisarExamen)
    // button.style.display='block';
  
    
    mostrarPreguntas();
  //btnEnviar.addEventListener('click', revisarExamen)
   //button.style.display='block';
 const btn = document.getElementById('button');
 document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';
    //let calif=10;
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
      btn.value = 'Calificacion enviada';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });

});
});