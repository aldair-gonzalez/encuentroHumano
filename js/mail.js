// Formulario de mail
const form = document.getElementById('Form');
const formMail = document.getElementById('Form-mail');
const formName = document.getElementById('Form-name');
const formMessage = document.getElementById('Form-message');
const formInput = [...document.getElementsByClassName('Form-input')];

// Validacion de formulario
// Inputs no deben de estar vacios
if (form && formInput && formMail && formName && formMessage) {
    function validateForm() {
        let isValid = true;
        formInput.forEach(input => {
            if (input.value === '') {
                isValid = false;
            }
            /*
                No se permite ingresar caracteres especiales
                Solo se pueden agregar
                - Letras
                - Numeros
                - Espacios
                - Guiones
                - Guiones bajos
                - Punto
                - Comillas
                - Arroba
                - Puntos suspensivos
            */
            if (input.value.match(/[^a-zA-Z0-9\s-_.,@]/g)) {
                isValid = false;
            }
        });
        return isValid;
    }
    
    (function(){
        // emailjs.init("-k5HyJjMsUasrk8RS");
        emailjs.init("-k5HyJjMsUasrk8RS");
    })();
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            const templateParams = {
                from_name: formName.value + ' ' + formMail.value,
                to_name: 'Laura',
                mensaje: formMessage.value
            }
            // emailjs.send('service_7irjt7a', 'template_vh96tr8', templateParams)
            emailjs.send("service_7irjt7a", "template_vh96tr8", templateParams)
                .then(function(response) {
                       console.log('SUCCESS!', response.status, response.text);
                    }, function(error) {
                   console.log('FAILED...', error);
            });
            alert('Gracias por contactarnos');
            location.reload();
        } else {
            alert('Favor de llenar todos los campos sin caracteres especiales');
        }
    });
}