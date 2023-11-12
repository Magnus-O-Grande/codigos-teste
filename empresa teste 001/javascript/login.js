const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === "") {
        setErrorFor(username, "O nome do Usuário é obrigatório.");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
    }
    else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória.");
    } else if(passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres.");
    } else {
        setSuccessFor(password);
    }

    if(passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmationValue, "A confirmação de senha é obrigatória")
    } else if(passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas não coferem.");
    } else setSuccessFor(passwordConfirmation);

    const formControl = form.querySelectorAll('.form-control')
    const formIsValid = [...formControls].every(formControl => {
        return (formControl.className = "form-control success");
    });

    if (formIsValid) {
        console.log("O formulário está 100% válido!")
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    //Adicionar mensagem de Error

    small.innerText = message;

    //Adicionar a classe de Error

    formControl.className = "form-controll success";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    //adicionar a class de success
    
    formControl.className = "form-control success";
}