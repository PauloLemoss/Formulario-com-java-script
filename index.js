const form = document.querySelector('.preencher-informacoes');
const inputs = document.querySelectorAll('.input-text');
const button = document.querySelector('.button');
const errorMessages = document.querySelectorAll('.paragrafo-mostrar');

function validateField(input, errorMessage) {
    if (input.value.trim() === '') {
        input.classList.add('borda-vermelha');
        input.classList.remove('borda-verde');
        errorMessage.style.display = 'block';
        return false;
    } else {
        input.classList.remove('borda-vermelha');
        input.classList.add('borda-verde');
        errorMessage.style.display = 'none';
        return true;
    }
}


inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        validateField(input, errorMessages[index]);
    });
});


button.addEventListener('click', function (event) {
    event.preventDefault();

    let formIsValid = true;

    inputs.forEach((input, index) => {
        const isValid = validateField(input, errorMessages[index]);
        if (!isValid) {
            formIsValid = false;
        }
    });

    if (formIsValid) {
        alert('Formulário enviado com sucesso!');
        form.reset();
        inputs.forEach(input => input.classList.remove('borda-verde'));
    }
});