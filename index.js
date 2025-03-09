const formulario = document.querySelector('.preencher-informacoes');
const inputs = document.querySelectorAll('.input-text');
const botao = document.querySelector('.button');
const mensagensErro = document.querySelectorAll('.paragrafo-mostrar');

function validarCampo(input, mensagemErro) {
    if (input.value.trim() === '') {
        input.classList.add('borda-vermelha');
        input.classList.remove('borda-verde');
        mensagemErro.style.display = 'block';
        return false;
    } else {
        input.classList.remove('borda-vermelha');
        input.classList.add('borda-verde');
        mensagemErro.style.display = 'none';
        return true;
    }
}

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        validarCampo(input, mensagensErro[index]);
    });
});

botao.addEventListener('click', function (event) {
    event.preventDefault();

    let formularioValido = true;

    inputs.forEach((input, index) => {
        const campoValido = validarCampo(input, mensagensErro[index]);
        if (!campoValido) {
            formularioValido = false;
        }
    });

    if (formularioValido) {
        alert('Formulário enviado com sucesso!');
        formulario.reset();
        inputs.forEach(input => input.classList.remove('borda-verde'));
    }
});