import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { displayMap } from './mapbox';
import { login } from './login';
import { logout } from './login';

const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form');
const logOutBtn = document.getElementById('logout-btn');

// DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener('click', logout);
