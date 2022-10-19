import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('[name="email"]');
const messageRef = document.querySelector('[name="message"]');

const FEEDBACK_KEY = 'feedback-form-state';
let formData = {};
// localStorage.clear();

// const email = 'email';
// const message = 'message';

onFormInitial();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  // localStorage.setItem(email, emailRef.value);
  // localStorage.setItem(message, messageRef.value);

  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));

  // localStorage.setItem(
  //   FEEDBACK_KEY,
  //   JSON.stringify({ email: emailRef.value, message: messageRef.value })
  // );
}

function onFormInitial() {
  // const dataSaved = localStorage.getItem(GOVNO_KEY);
  const initialData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

  if (!initialData) {
    return;
  }
  if (initialData.email) {
    emailRef.value = initialData.email;
  }
  if (initialData.message) {
    messageRef.value = initialData.message;
  }
  formData = initialData;
}

function onFormSubmit(evt) {
  evt.preventDefault();
  // console.log('email: ', emailRef.value);
  // console.log('message: ', messageRef.value);
  console.log('formData: ', formData);
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
  formData = {};
}
