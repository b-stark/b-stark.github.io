/* Adapted from codepen user Leonam Silva de Souza:
 https://codepen.io/leonam-silva-de-souza/pen/vEYYxGP */

// Changing Active Link

const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}

navLink.forEach(n => n.addEventListener('click', linkAction));