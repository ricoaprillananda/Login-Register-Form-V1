// Toggle Login/Register using display style
const loginBox = document.getElementById('loginBox');
const registerBox = document.getElementById('registerBox');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

showRegister.addEventListener('click', () => {
  loginBox.style.display = 'none';
  registerBox.style.display = 'block';
});

showLogin.addEventListener('click', () => {
  registerBox.style.display = 'none';
  loginBox.style.display = 'block';
});

// Show/Hide Password toggle
const toggleIcons = document.querySelectorAll('.toggle-password');

toggleIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const input = icon.previousElementSibling;
    const type = input.getAttribute('type');

    if (type === 'password') {
      input.setAttribute('type', 'text');
      icon.textContent = '🍃'; // hide icon
    } else {
      input.setAttribute('type', 'password');
      icon.textContent = '🐦‍⬛'; // show icon
    }
  });
});
