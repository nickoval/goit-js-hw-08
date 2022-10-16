import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const emailRef = document.querySelector('[name="email"]');

const messageRef = document.querySelector('[name="message"]');

// localStorage.clear();

const GOVNO_KEY = 'feedback-form-state';

// const email = 'email';
// const message = 'message';

onFormInitial();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

const formData = {};

function onFormInput(evt) {
  // localStorage.setItem(email, emailRef.value);
  // localStorage.setItem(message, messageRef.value);

  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(GOVNO_KEY, JSON.stringify(formData));

  // localStorage.setItem(
  //   GOVNO_KEY,
  //   JSON.stringify({ email: emailRef.value, message: messageRef.value })
  // );
}

function onFormInitial() {
  const dataSaved = localStorage.getItem(GOVNO_KEY);
  if (dataSaved) {
    // console.log('onFormInit ~ govnoSaved: ', govnoSaved);
    const initialData = JSON.parse(dataSaved);

    emailRef.value = initialData.email;
    messageRef.value = initialData.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('email: ', emailRef.value);
  console.log('message: ', messageRef.value);
  evt.currentTarget.reset();
  localStorage.removeItem(GOVNO_KEY);
}
