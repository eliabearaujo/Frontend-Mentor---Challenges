const inputField = document.querySelector('.form input');
const inputButton = document.querySelector('.form button');
const iconError = document.querySelector('.error-icon');
const textError = document.querySelector('.text-error');
const regexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

inputButton.addEventListener('click', checkEmail);

function checkEmail() {
  const email = inputField.value;
  if (email.match(regexp) == null) {
    iconError.style.display = 'block';
    textError.style.display = 'block';
  } else {
    iconError.style.display = 'none';
    textError.style.display = 'none';
  }
}
