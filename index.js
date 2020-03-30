const { hash } = window.location;
//decoded
const secretMessage = Base64.decode(hash.replace('#', ''));

if (secretMessage) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');

  document.querySelector('h1').innerHTML = `${secretMessage}`;
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const input = document.querySelector('#message-input');
  //encoded
  const encrypted = Base64.encode(input.value);

  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
