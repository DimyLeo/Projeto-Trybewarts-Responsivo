const loginButton = document.getElementById('button-login');
const email = document.getElementById('email');

function loginAlert(event) {
  event.preventDefault();
  if (email.value !== '') {
    window.alert('Olá, Tryber!');
  } else if (email.value === '') {
    window.alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', loginAlert);

const agreementCheck = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
submitBtn.style.backgroundColor = 'gray';

agreementCheck.addEventListener('change', () => {
  if (agreementCheck.checked === true) {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = 'rgb(78, 44, 131)';
  } else if (agreementCheck.checked === false) {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = 'gray';
  }
});

const textArea = document.getElementById('textarea');
const count = document.getElementById('counter');

textArea.addEventListener('keyup', () => {
  const caracteres = textArea.value;
  const caracteresLength = caracteres.length;
  const countRegressivo = 500 - caracteresLength;
  count.innerHTML = `Caracteres restantes: ${countRegressivo}.`;
});
